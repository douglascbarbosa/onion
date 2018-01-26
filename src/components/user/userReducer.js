
import {
	USER_INFO,
} from './UserActions'


const INITIAL_STATE = {
	email: '', 
	password: '',
	user: null, 
	error: '',
	loading: false
};


export default function userReducer (state = INITIAL_STATE, action ){

  switch (action.type){
    case USER_INFO:
      return {...state, username: action.data.nome };
    default:
      return state
  }

}