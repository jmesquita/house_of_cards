import Card from './card';

class Deck {
  /**
   * The Deck definition
   */
  constructor() {
    this._deck = [];
    // Initialize the deck with ordered cards
    for (let i = 0; i < 52; i++) {
      if (i <= 12) {
        this._deck.push(new Card('hearts', i+1));
      } else if ( i <= 25 ) {
        this._deck.push(new Card('spades', i-13+1));
      } else if ( i <= 38  ) {
        this._deck.push(new Card('clubs', i-26+1));
      } else {
        this._deck.push(new Card('diamonds', i-39+1));
      }
    }

    this._dealtCards = [];
  }

  /**
   * Shuffles the deck
   *
   * Multiple calls to this method are safe as cards will continue to be dealt
   * without duplication.
   */
  shuffle() {
    let m = this._deck.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this._deck[m];
      this._deck[m] = this._deck[i];
      this._deck[i] = t;
    }
  }

  /**
   * Deal one card from the deck
   *
   * This method is guaranteed to return a new card on every call until the end
   * of the deck where it will return undefined. Mutiple calls to shuffle are
   * safe and guarantee that only 52 cards are returned by this method.
   *
   * @returns {{Card|undefined)} - A card or undefined if entire deck has been dealt
   */
  dealOneCard() {
    let card = this._deck.find( (card) => {
      return !this._dealtCards.includes(card);
    });
    if (card) {
      this._dealtCards.push(card);
      return card;
    }
  }
}

export default Deck
