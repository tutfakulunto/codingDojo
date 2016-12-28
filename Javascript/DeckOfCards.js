function DeckConstructor() {
    this.buildDeck();
}

DeckConstructor.prototype.buildDeck = function() {
    var suits = ['diamonds', 'clubs', 'hearts', 'spades'],
        values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'],
        self = this;

    this.cards = [];
        suits.forEach(function(suit){
            values.forEach(function(value){
                self.cards.push(new Card(value, suit));
            });
        });
        return this;
}

DeckConstructor.prototype.shuffle = function() {
    var unshuffledEdge = this.cards.length,
    cardToShuffleIdx,
    temp;

    while (unshuffledEdge > 0) {
        cardToShuffleIdx = math.floor(Math.random() * unshuffledEdge);
        unshuffledEdge -= 1;

        temp = this.cards[cardToShuffleIdx];
        this.cards[cardToShuffleIdx] = this.cards[unshuffledEdge];
        this.cards[unshuffledEdge] = temp;
    }
    return this;
}

DeckConstructor.prototype.reset = function() {
    this.buildDeck().shuffle();
}

DeckConstructor.prototype.dealRandomCard = function() {
    return (this.cards.length > 0) ? this.cards.pop() : null;
}

function Card(value, suit) {
    this.value = value;
    this.suit = suit;
}

function Player(name) {
    this.name = name;
    this.hand = [];
}

Player.prototype.takeCard = function(DeckConstructor) {
    this.hand.push(DeckConstructor.dealRandomCard());
    return this;
}

Player.prototype.discard = function(cardIdx) {
    if (this.hand.length > cardIdx) {
        this.hand.splice(cardIdx, 1);
    }
    return this;
}
