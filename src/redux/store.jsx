import { createStore, combineReducer, applyMiddlewar } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

//REDUCER(redux)

//SAGA
const sagaMiddleware = createSagaMiddleware();

//SAGA GENERATOR FUNCTIONS

//CORE SAGA function(generator function), ALL SAGA FUNCTIONS WILL GET PASSED HERE
//CAN BE CALLED ANYTHING
function* watcherSaga() {
  //NEED YIELD
  const response = yield axios.get();
}

//STORES REDUCERS
const store = createStore(
  combineReducer({}),
  applyMiddlewar(sagaMiddleware, logger)
);

//CORE SAGA FUNCTION GETS PASSED HERE
sagaMiddleware.run(watcherSaga);

export default store;
