import {  all } from 'redux-saga/effects';
import productsWatcher from './productsWatchers/productsWatchers';
import userWatcher from './userWatchers/userWatchers';

function* rootSaga(){
   yield all([
    productsWatcher(),
    userWatcher()
   ])
}
export default rootSaga;