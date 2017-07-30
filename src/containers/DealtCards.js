import { connect } from 'react-redux';
import DealtCards from '../components/DealtCards'


export default connect(
  (state) => ({
    cards: state.deck.theCards
  })
)(DealtCards)

