var blogAppViewController = angular.module ('blogAppViewController', []);

blogAppViewController.factory('sharedService', function ($rootScope){
  var shared = {};

  shared._idList=[];
  shared.globalPAGECount=0;
  shared.recentList=[];
  shared.index_List=[];
  shared.oneTime_Toggle=true;
  return shared;
});

blogAppViewController.controller('post_View_Ctrl', function ($scope, $http, $routeParams, $location, sharedService, $sce) {

  console.log('allposts');
  sharedService._idList=[];
  sharedService.globalPAGECount=0;
  sharedService.recentList=[];
  sharedService.index_List=[];

  $http.get('/allposts').success(function(input_data) {
    var post_Buffer=[];
    if (input_data.length>5){
      for (var i=0; i<5; i++){
        post_Buffer.push(input_data[i]);
      }
    }
    $scope.posts = input_data;
    $scope.TrustDangerousSnippet = function(snippet) {
      return $sce.trustAsHtml(snippet.slice(0,300)+'...');
    };

    var posts_Length=$scope.posts.length;

    for (var i=0; i<5; i++){
      sharedService.recentList[i] = input_data[i];
    }

    $scope.post1=sharedService.recentList[0];
    $scope.post2=sharedService.recentList[1];
    $scope.post3=sharedService.recentList[2];
    $scope.post4=sharedService.recentList[3];
    $scope.post5=sharedService.recentList[4];

    sharedService._idList.push({"Page":1, "_id":$scope.posts[0]._id});
    var count=0;
    var PageCount=2;
    for (var each in $scope.posts){
      count++;
      if (count==5){
        sharedService._idList.push({"Page": PageCount, "_id": $scope.posts[each]._id});
        count=0;
        PageCount++;
      }
    }

    sharedService._idList.push({"Page": PageCount, "_id":$scope.posts[posts_Length-1]._id});
    var listLength = sharedService._idList.length;
    if(sharedService._idList[listLength-1]._id == sharedService._idList[listLength-2]._id ){
      sharedService._idList.pop();
    }
    $scope.idList_Copy=sharedService._idList;
    console.log("here", sharedService._idList);

    $scope.numbers=[];
    for (var i=0; i<sharedService._idList.length - sharedService.globalPAGECount; i++){
      $scope.numbers.push({"number":sharedService.globalPAGECount+i+1, "id":sharedService._idList[sharedService.globalPAGECount+i]['_id']});
      sharedService.index_List.push({"number":sharedService.globalPAGECount+i+1, "id":sharedService._idList[sharedService.globalPAGECount+i]['_id']});
    }

    if (input_data.length>5){
      $scope.posts = post_Buffer;
      console.log(post_Buffer);
    }
  });

  $scope.selectSearch = function(input) {
    $scope.Search1 = input;
    if ($scope.Search1 == 'Title'){
      $scope.searchTitle = true;
      $scope.searchContent = false;

      $scope.search_Hits=null;
    }
    if ($scope.Search1 == 'Post Content'){
      $scope.searchTitle = false;
      $scope.searchContent = true;
      $scope.search_Hits=null;
    }
  };

  $scope.searchDatabase = function(type, input) {
    if (type === 'Title') {
      $http.post('/search_post_Titles', {title: input}).success(function (response) {
        $scope.search_Hits = response;
      });
    }
    if (type === 'Post Content') {
      $http.post('/search_post_Content', {post: input}).success( function (response) {
        $scope.search_Hits = response;
      });
    }
  };

});

blogAppViewController.controller('range_View_Ctrl', function ($scope, $http, $routeParams, $location, sharedService, $sce) {

  console.log("Range View Controller Initalized");
  console.log("High:",$routeParams.high,"Low:", $routeParams.low);
  if (sharedService.oneTime_Toggle!=true){
    $http.get('/get_posts/high/' + $routeParams.high + '/low/' + $routeParams.low).success(function (input_data) {
      $scope.posts = input_data;
      $scope.TrustDangerousSnippet = function(snippet) {
        return $sce.trustAsHtml(snippet.slice(0,300)+'...');
      };
      $scope.post1=sharedService.recentList[0];
      $scope.post2=sharedService.recentList[1];
      $scope.post3=sharedService.recentList[2];
      $scope.post4=sharedService.recentList[3];
      $scope.post5=sharedService.recentList[4];
    });
  }
  sharedService.oneTime_Toggle=false;

  $scope.numbers=[];
  console.log(sharedService._idList.length - sharedService.globalPAGECount);
  for (var i=0; i<sharedService._idList.length - sharedService.globalPAGECount; i++){
    $scope.numbers.push({"number":sharedService.globalPAGECount+i+1, "id":sharedService._idList[sharedService.globalPAGECount+i]['_id']});
  }

  for (var each in $scope.numbers){
    console.log($scope.numbers[each]);
  }

  $scope.incrementPAGE =function (event) {
    event.preventDefault();
    console.log("increment");

    var pag_Length = $('.pagination li').length;
    console.log(pag_Length);

    if(pag_Length<7){
      return;
    }

    sharedService.globalPAGECount+=5;
    for (var i=0; i<5; i++){
      $scope.numbers.shift();
    }

  };

  $scope.decrementPAGE =function (event) {
    event.preventDefault();
    var pag_Length = $('.pagination li').length;
    console.log(pag_Length);

    if (pag_Length >= sharedService._idList.length - sharedService.globalPAGECount){
      return;
    }

    console.log("decrement");
    sharedService.globalPAGECount-=5;

    $scope.numbers=[];
    console.log(sharedService._idList.length - sharedService.globalPAGECount);
    for (var i=0; i<sharedService._idList.length - sharedService.globalPAGECount; i++){
      $scope.numbers.push({"number":sharedService.globalPAGECount+i+1, "id":sharedService._idList[sharedService.globalPAGECount+i]['_id']});
    }
  };

});