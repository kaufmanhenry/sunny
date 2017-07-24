import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import apiMiddleware from './middleware/api';

import rootReducer from './modules';

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(applyMiddleware(logger, thunk, apiMiddleware))
  );
}
