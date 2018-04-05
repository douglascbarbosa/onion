
import {
    ACCOUNT_NEW,
    ACCOUNT_FETCH_ALL,
    ACCOUNT_FETCH,
    ACCOUNT_NOT_FOUND,
    ACCOUNT_FORM_ERROR,
    ACCOUNT_UPDATE
} from './AccountActions';


const INITIAL_STATE = {
    account: null,
    list : [],
    msg: '',
    error: '',
    listError: ''
};

export default function accountReducer(state = INITIAL_STATE, action){
    
    switch (action.type){
        case ACCOUNT_NEW:
            return {...state, list : [
                    ...state.list,
                    action.account
                   ], msg: 'Account successfully registered', error: '', listError : ''}
        case ACCOUNT_UPDATE:
            return {...state, list: [
                ...state.list,
                action.account
            ], msg: 'Account updated successfully', error: '', listError: ''}           
        case ACCOUNT_FETCH_ALL:
            return {
                ...state,
                list : [...action.accounts]
            }
        case ACCOUNT_FETCH: 
            return {...state, account : action.account, erro: '', listError : '' }               
        case ACCOUNT_NOT_FOUND:
            return {...state, listError: 'Account not found.'}
        case ACCOUNT_FORM_ERROR:
            return {...state, error : action.error}
        case ACCOUNT_NOT_FOUND:
            return {...state, listError: action.error}
            
        default:
            return state;
    }
}