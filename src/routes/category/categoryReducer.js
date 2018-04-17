import {
    CATEGORY_NEW,
    CATEGORY_FETCH_ALL,
    CATEGORY_FETCH,
    CATEGORY_DELETE,
    CATEGORY_NOT_FOUND,
    CATEGORY_FORM_ERROR,
    CATEGORY_FORM_CLEAR,
    CATEGORY_CLEAR_MSG,
    CATEGORY_CLEAR_ERROR
} from './CategoryActions'

const INITIAL_STATE = {
    category : null,
    list: [],
    msg: '',
    error: '',
    loading : false    
}

export default function categoryReducer(state = INITIAL_STATE, action){
    
    switch (action.type){
        case CATEGORY_NEW:
            return {...state, list : [
                    ...state.list,
                    action.category
                   ], msg: 'Category successfully registered', error: '', category : null}
        case CATEGORY_FETCH_ALL:
            return {
                ...state,
                list : [...action.categories]
            }
        case CATEGORY_FETCH: 
            return {...state, category : {...action.category, erro: '' }}
        case CATEGORY_NOT_FOUND:
            return {...state, error: 'Category not found.'}
        case CATEGORY_FORM_ERROR:
            return {...state, error : action.error}
        case CATEGORY_FORM_CLEAR:
            return {...state, category : null}    
        case CATEGORY_DELETE:
            return {...state, list: state.list.filter(e => e.id !== action.id), category : null }; //FIXME: problem with the msg -> , msg : "Account deleted successfully"
        case CATEGORY_CLEAR_MSG:
            return {...state, msg: ''}
        case CATEGORY_CLEAR_ERROR:    
            return {...state, error: ''}
        default: 
            return state;
    }

}