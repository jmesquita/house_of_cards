import {
  SHUFFLE_DECK,
  DEAL_ONE_CARD
} from '../actions/deck';

// Export this so we can use this initial state on the tests
export const INITIAL_STATE = {
  shuffled: false,
  dealtCards: 0,
  theCards: []
};

const deck = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch(type) {
    case SHUFFLE_DECK:
      return {
        ...state,
        shuffled: true
      }
    case DEAL_ONE_CARD: {
      return {
        ...state,
        dealtCards: state.dealtCards+1,
        theCards: [
          ...state.theCards,
          {
            face: payload.face,
            suite: payload.suite
          }
        ]
      }
    }
    default:
      return state;
  }
}

export default deck
