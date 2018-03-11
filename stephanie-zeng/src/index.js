import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import 'normalize.css';
import './stylesheets/App.css';

import {reducer} from './reducers';

import registerServiceWorker from './registerServiceWorker';

// Todo: add middleware
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
