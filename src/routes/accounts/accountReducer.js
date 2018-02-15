
import {
    ACCOUNT_NEW
} from './AccountActions';


const INITIAL_STATE = [];

export default function accountReducer(state = INITIAL_STATE, action){
    
    switch (action.type){
        case ACCOUNT_NEW:
            return [
                ...state,
                action.account
            ];
        default:
            return state;
    }
}