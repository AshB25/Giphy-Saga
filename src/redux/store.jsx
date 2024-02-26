import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const giphy = (state = [], action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return action.payload;
    default:
      return state;
  }
};

//SAGA
const sagaMiddleware = createSagaMiddleware();

//MAKE POST FOR GIPHY
//SAGA GENERATOR FUNCTIONS
function* searchGiphySaga(action) {
  // try catch block
  try {
    // code to try running HERE
    const searchResult = yield axios.post('/api/giphy/search', {
      searchTerm: action.payload.name,
    });
    yield put({ type: 'SET_IMAGES', payload: searchResult.data });
  } catch (error) {
    // error happens in try black get sent HERE
    console.log('ERROR:', error);
  }
}

//CORE SAGA function(generator function), ALL SAGA FUNCTIONS WILL GET PASSED HERE
//CAN BE CALLED ANYTHING
function* watcherSaga() {
  //NEED YIELD
  //need type from reducer in the takeEvery string ('')

  yield takeEvery('SEARCH_GIPHY', searchGiphySaga);
}

const store = createStore(
  combineReducers({ giphy }),
  applyMiddleware(sagaMiddleware, logger)
);

//CORE SAGA FUNCTION GETS PASSED HERE
sagaMiddleware.run(watcherSaga);

export default store;
