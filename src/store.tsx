// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './slices/index'; // Assuming you have multiple slices in a `slices` folder
import rootSaga from './sagas/index'; // Assuming you have a rootSaga that combines all sagas

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer, // Add your reducers here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
