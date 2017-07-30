import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index'
import 'bootstrap/dist/css/bootstrap.css';
import './cards.css';
import Navbar from './containers/Navbar';
import DealtCards from './containers/DealtCards'


class App extends Component {
  render() {
    const store = createStore(rootReducer)
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <DealtCards />
        </div>
      </Provider>
    );
  }
}

export default App;
