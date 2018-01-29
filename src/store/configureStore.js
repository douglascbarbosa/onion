import {createStore, combineReducers,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
import {routerReducer as routing} from 'react-router-redux'
import {userReducer} from '../components/user'



export const rootReducer = combineReducers(
  {
    routing,
    user: userReducer,
    form: formReducer
  }
);

const store =  createStore(rootReducer,
  applyMiddleware(
    thunk
  )
);

export default store;
