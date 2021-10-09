import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga"
import persistStore from 'redux-persist/es/persistStore';

const saga = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(saga),
  // other store enhancers if any
));
export const persistor = persistStore(store)
saga.run(rootSaga)
export default store