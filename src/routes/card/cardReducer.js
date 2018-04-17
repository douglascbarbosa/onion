
import {
    CARD_NEW,
    CARD_FETCH_ALL,
    CARD_FETCH,
    CARD_NOT_FOUND,
    CARD_FORM_ERROR,
    CARD_UPDATE,
    CARD_DELETE,
    CARD_FORM_CLEAR,
    CARD_CLEAR_MSG,
    CARD_CLEAR_ERROR
} from './CardActions';

const INITIAL_STATE = {
    card: null,
    list : [],
    msg: '',
    error: '',
    loading : false
};

export default function cardReducer(state = INITIAL_STATE, action){
    
    switch (action.type){
        case CARD_NEW:
            return {...state, list : [
                    ...state.list,
                    action.card
                   ], msg: 'Card successfully registered', error: '', card : null}
        case CARD_UPDATE:
            return {...state, list: [
                ...state.list,
                action.card
            ], msg: 'Card updated successfully', error: '', card : null}           
        case CARD_DELETE:
            return {...state, list: state.list.filter(e => e.id !== action.id), card : null }; //FIXME: problem with the msg -> , msg : "Account deleted successfully"
        case CARD_FETCH_ALL:
            return {
                ...state,
                list : [...action.cards]
            }
        case CARD_FETCH: 
            return {...state, card : {...action.card}, erro: '' }
        case CARD_NOT_FOUND:
            return {...state, error: 'Card not found.'}
        case CARD_FORM_ERROR:
            return {...state, error : action.error}
        case CARD_FORM_CLEAR:
            return {...state, account : null}    
        case CARD_CLEAR_MSG:
            return {...state, msg: ''}
        case CARD_CLEAR_ERROR:    
            return {...state, error: ''}
        default:
            return state;
    }
}