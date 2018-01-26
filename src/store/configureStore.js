import {createStore, combineReducers,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {routerReducer as routing} from 'react-router-redux'
import {userReducer} from '../components/user'



export const rootReducer = combineReducers(
  {
    routing,
    user: userReducer,
  }
);

const store =  createStore(rootReducer,
  applyMiddleware(
    thunk
  )
);

export default store;
