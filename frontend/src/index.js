import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from "./store/reducer";
import { Provider } from "react-redux";
const actions = require('./store/actions');
//import * as serviceWorker from './serviceWorker';

const redux = require('redux');

const store = redux.createStore(reducer);

store.dispatch(actions.setState());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

