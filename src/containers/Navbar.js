import { connect } from 'react-redux';

import Navbar from '../components/Navbar'
import {
  shuffleDeck,
  dealOneCard
} from '../actions/deck';

export default connect(
  (state) => ({
    canDeal: state.deck.dealtCards < 52,
    cardsDealt: state.deck.dealtCards
  }),
  (dispatch) => ({
    shuffle: _ => dispatch(shuffleDeck()),
    dealOneCard: _ => dispatch(dealOneCard())
  })
)(Navbar)
