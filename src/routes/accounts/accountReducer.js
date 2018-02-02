
import {
    ACCOUNT_NEW
} from './AccountActions';


const INITIAL_STATE = {
    id: '',
    name: '',
    initialValue: 0,
    currentValue: 0 
}

export default function accountReducer(state = INITIAL_STATE, action){
    
    switch (action.type){
        case ACCOUNT_NEW:
            return {...state, id : action.payload.id, name: action.payload.name, initialValue: action.payload.initialValue}
        default:
            return state;
    }
}