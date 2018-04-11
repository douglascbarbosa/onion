const INITIAL_STATE = {
    category : null,
    list: [],
    msg: '',
    error: '',
    loading : false    
}

export default function categoryReducer(state = INITIAL_STATE, actions){
    
    switch (actions.type){
        default: 
            return state;
    }

}