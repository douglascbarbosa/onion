import {createStore, combineReducers,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {routerReducer as routing} from 'react-router-redux'

export const rootReducer = combineReducers(
  {
    routing,
  }
);

const store =  createStore(rootReducer,
  applyMiddleware(
    thunk
  )
);

export default store;
