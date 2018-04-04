
import {
    ACCOUNT_NEW,
    ACCOUNT_FETCH_ALL
} from './AccountActions';


const INITIAL_STATE = {
    account: null,
    list : [],
    msg: '',
    error: ''
};

export default function accountReducer(state = INITIAL_STATE, action){
    
    switch (action.type){
        case ACCOUNT_NEW:
            return {...state, list : [
                    ...state.list,
                    action.account
                   ], msg: 'Account successfully registered', error: ''};
        case ACCOUNT_FETCH_ALL:
            return {
                ...state,
                list : [...action.accounts]
            }           
        default:
            return state;
    }
}