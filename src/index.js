import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

import './index.css';

const storeWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore);



ReactDOM.render(
  <Provider store={storeWithMiddleWare(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root')
);
