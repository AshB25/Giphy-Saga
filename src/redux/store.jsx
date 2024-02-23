
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

const giphy = (state = [], action) => {
    switch (action.type) {
      case 'SET_IMAGES':
        return action.payload;
      default:
        return state;
    }
  };

const store = createStore(combineReducers({giphy}), applyMiddleware(logger));

//REDUCER(redux)

//SAGA
const sagaMiddleware = createSagaMiddleware();

//MAKE POST FOR GIPHY

//SAGA GENERATOR FUNCTIONS
function firstSaga(action) {
  const categoryResponse = yield axios({
    method: 'GET',
    url:'/',
  });
//dispatch to TYPE FROM REDUCER with categoryResponse.data
yield put({ type: '', payload: categoryResponse.data })
}


//CORE SAGA function(generator function), ALL SAGA FUNCTIONS WILL GET PASSED HERE
//CAN BE CALLED ANYTHING
function* watcherSaga() {
  //NEED YIELD
  //need type from reducer in the takeEvery string ('')
  yield takeEvery('GET_', firstSaga)
  const response = yield axios.get();
}

//CORE SAGA FUNCTION GETS PASSED HERE
sagaMiddleware.run(watcherSaga);


export default store;
