import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

const giphy = (state = [], action) => {
    switch (action.type) {
      case 'SET_IMAGES':
        return action.payload;
      default:
        return state;
    }
  };

const store = createStore(combineReducers({giphy}), applyMiddleware(logger));

export default store;
