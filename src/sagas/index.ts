// src/sagas/index.js
import { all } from 'redux-saga/effects';
import watchPostsSaga from './postsSaga';

export default function* rootSaga() {
  yield all([watchPostsSaga()]);
}
