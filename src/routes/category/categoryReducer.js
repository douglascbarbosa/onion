import {
    CATEGORY_NEW    
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
        default: 
            return state;
    }

}