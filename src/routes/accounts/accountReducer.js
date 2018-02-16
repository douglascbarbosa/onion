
import {
    ACCOUNT_NEW,
    ACCOUNT_FETCH
} from './AccountActions';


const INITIAL_STATE = {
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
        case ACCOUNT_FETCH :
            return {
                ...state,
                list : [...action.accounts]
            }           
        default:
            return state;
    }
}