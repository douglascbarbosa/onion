
import {
    ACCOUNT_NEW,
    ACCOUNT_FETCH_ALL,
    ACCOUNT_FETCH,
    ACCOUNT_NOT_FOUND,
    ACCOUNT_FORM_ERROR,
    ACCOUNT_UPDATE,
    ACCOUNT_DELETE,
    ACCOUNT_FORM_CLEAR,
    ACCOUNT_CLEAR_MSG,
    ACCOUNT_CLEAR_ERROR

} from './AccountActions';

import Functions from '../../components/utils/Functions'

const INITIAL_STATE = {
    account: null,
    list : [],
    msg: '',
    error: '',
    loading : false
};

export default function accountReducer(state = INITIAL_STATE, action){
    
    switch (action.type){
        case ACCOUNT_NEW:
            return {...state, list : [
                    ...state.list,
                    action.account
                   ], msg: 'Account successfully registered', error: '', account : null}
        case ACCOUNT_UPDATE:
            return {...state, list: [
                ...state.list,
                action.account
            ], msg: 'Account updated successfully', error: '', account : null}           
        case ACCOUNT_DELETE:
            return {...state, list: state.list.filter(e => e.id !== action.id), account : null }; //FIXME: problem with the msg -> , msg : "Account deleted successfully"
        case ACCOUNT_FETCH_ALL:
            return {
                ...state,
                list : [...action.accounts]
            }
        case ACCOUNT_FETCH: 
            return {...state, account : {...action.account, initialValue : Functions.floatTostr(action.account.initialValue)}, erro: '' }
        case ACCOUNT_NOT_FOUND:
            return {...state, error: 'Account not found.'}
        case ACCOUNT_FORM_ERROR:
            return {...state, error : action.error}
        case ACCOUNT_FORM_CLEAR:
            return {...state, account : null}    
        case ACCOUNT_CLEAR_MSG:
            return {...state, msg: ''}
        case ACCOUNT_CLEAR_ERROR:    
            return {...state, error: ''}
        default:
            return state;
    }
}