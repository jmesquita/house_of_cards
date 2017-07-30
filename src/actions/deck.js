import Deck from '../lib/deck';

export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const DEAL_ONE_CARD = 'DEAL_ONE_CARD';
export const NO_MORE_CARDS_ON_DECK = 'NO_MORE_CARDS_ON_DECK';

const myDeck = new Deck();

export const shuffleDeck = _ => {
  myDeck.shuffle();
  return {
    type: SHUFFLE_DECK
  }
};

export const dealOneCard = _ => {
  let card = myDeck.dealOneCard();
  if (!card) {
    alert('No more cards on the deck!');
    return;
  }
  return {
    type: DEAL_ONE_CARD,
    payload: {
      suite: card.getSuite(),
      face: card.getFace()
    }
  }
};
