define(function(){

  function Deck(){
    this.Deck = [];
    this.Suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    this.CardType = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Queens', 'Hearts', 'Ace']
  }

  Deck.prototype.shuffle = function() {
    for (var i=0; i<52; i++){
      this.Deck.push({
        Suit: this.Suit[Math.floor(Math.random()*this.Suit.length-1)+1],
        CardType : this.CardType[Math.floor(Math.random()*this.CardType.length-1)+1]
      })
    }
  }

  Deck.prototype.printDeck = function() {
    for (var i=0; i<this.Deck.length; i++){
      console.log(i, this.Deck[i]);
    }
  }

  Deck.prototype.length = function() {
    return this.Deck.length;
  }
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  function Dealer(name) {
    this.name = name;
    this.deck = new Deck();
  }

  Dealer.prototype.getDeck = function() {
    this.deck.shuffle();
    this.deck.printDeck();
  }

  Dealer.prototype.makeSet = function() {
    return {
      firstCard: this.deck.Deck.pop(),
      secondCard: this.deck.Deck.pop()
    }
  }

  Dealer.prototype.DealCards = function(User,context) {
    this.getDeck();
    return this.makeSet()
  }

  Dealer.prototype.ReturnCard = function(card, dealer){
    dealer.deck.Deck.push(card);
    Deck.prototype.printDeck.call(dealer.deck);
  }
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  function User(name){
    this.name = name;
    this.set=[];
  }

  User.prototype.getSet = function(dealer){
    this.set = dealer.DealCards();
    return this.set;
  }

  User.prototype.returnCard = function(card,dealer){
    console.log(dealer);
    Dealer.prototype.ReturnCard.apply(dealer, [card, dealer]);
  }

  return {
    Deck: Deck,
    Dealer: Dealer,
    User: User
  }
});