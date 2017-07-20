import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './layouts/App';

import rootReducer from './reducers';
import IndexSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

const store = configureStore();

sagaMiddleware.run(IndexSagas);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
