import {
    CATEGORY_NEW,
    CATEGORY_FETCH_ALL,
    CATEGORY_DELETE
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
        case CATEGORY_DELETE:
            return {...state, list: state.list.filter(e => e.id !== action.id), category : null }; //FIXME: problem with the msg -> , msg : "Account deleted successfully"
        default: 
            return state;
    }

}