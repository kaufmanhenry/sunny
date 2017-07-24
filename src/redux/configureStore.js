import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from './middleware/api';

import rootReducer from './modules';

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk, apiMiddleware))
  );
}
