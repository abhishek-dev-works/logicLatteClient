// src/sagas/postsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} from '../slices/postSlice';

function* fetchPostsSaga() {
  try {
    const response = yield call(axios.get, process.env.REACT_APP_API_URL + '/posts');
    yield put(fetchPostsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchPostsFailure(error.message));
  }
}

export default function* watchPostsSaga() {
  yield takeLatest(fetchPostsStart.type, fetchPostsSaga);
}
