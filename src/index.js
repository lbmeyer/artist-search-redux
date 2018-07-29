import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleWare from 'redux-promise';
import Routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleWare)(createStore);

const jsx = (
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
