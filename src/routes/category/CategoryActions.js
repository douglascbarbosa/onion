import database from '../../firebase/firebase';
import history from '../../routes/History';

export const CATEGORY_NEW         = 'CATEGORY_NEW';
export const CATEGORY_UPDATE      = 'CATEGORY_UPDATE';
export const CATEGORY_DELETE      = 'CATEGORY_DELETE';
export const CATEGORY_FETCH_ALL   = 'CATEGORY_FETCH_ALL';
export const CATEGORY_FETCH        = 'CATEGORY_FETCH';
export const ACCOUNT_NOT_FOUND    = 'ACCOUNT_NOT_FOUND';
export const CATEGORY_LIST_ERROR  = 'CATEGORY_LIST_ERROR';
export const CATEGORY_FORM_ERROR  = 'CATEGORY_FORM_ERROR';
export const ACCOUNT_FORM_CLEAR   = 'ACCOUNT_FORM_CLEAR';
export const CATEGORY_LAODING     = 'CATEGORY_LAODING';
export const ACCOUNT_CLEAR_MSG    = 'ACCOUNT_MSG';
export const ACCOUNT_CLEAR_ERROR  = 'ACCOUNT_ERROR';

export const new_category = ({name}) =>{

    return (dispatch, getState) => {

        dispatch({type: CATEGORY_LAODING});

        return database.ref(`/users/${getState().user.uid}/Category`)
            .push({name})
            .then(ref => {
                dispatch({
                    type: CATEGORY_NEW,
                    category : {
                        id : ref.key,
                        name
                    }
                });

                //After add a category, redirect to the account list page!
                history.push('/categories');
        })
        .catch(error => {
            dispatch({
                type: CATEGORY_FORM_ERROR,
                error : error.message
            })
        });
        
    }
}

export const update_category = (id, values) => {

    return (dispatch, getState) => {

        dispatch({type: CATEGORY_LAODING});
        
        const category = {
            name : values.name,
        }

        return database.ref(`/users/${getState().user.uid}/Category/${id}`)
            .update(category)
            .then(ref => {
                dispatch({
                    type: CATEGORY_UPDATE,
                    category : {
                        id,
                        ...category
                    }
                });

                //After update a categories, redirect to the category list page!
                history.push('/categories');
        })
        .catch(error => {
            dispatch({
                type: CATEGORY_FORM_ERROR,
                error : error.message
            })
        });
        
    }    
}

export const delete_category = (id) => {

    return (dispatch, getState) => {

        return database.ref(`/users/${getState().user.uid}/Category/${id}`)
            .remove()
            .then(() => {

                dispatch({
                    type: CATEGORY_DELETE,
                    id
                });
                
        })
        .catch(error => {
            dispatch({
                type: CATEGORY_LIST_ERROR,
                error : error.message
            })
        });
        
    }    

}


export const fetch_categories = () => {
    return (dispatch, getState ) => {
        return database.ref(`/users/${getState().user.uid}/Category`).once('value').then(snapshot => {
            const categories = [];    

            snapshot.forEach(childSnapshot => {
                categories.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
          dispatch({
              type: CATEGORY_FETCH_ALL,
              categories
          })  
        });
    }
}

export const fetch_category = (id) => {
    return (dispatch, getState ) => {
        return database.ref(`/users/${getState().user.uid}/Category/${id}`).once('value').then(snapshot => {
            //Check if the account exist!
            if (snapshot.exists()){
                const category = snapshot.val();

                dispatch({
                    type: CATEGORY_FETCH,
                    category
                });
                 
            }else{
                dispatch({
                    type: ACCOUNT_NOT_FOUND
                });

                //If the account doesn't exist, I'll redirect to the list!
                history.push('/categories');
                
            }
        })
        .catch(error => {

            dispatch({
                type: CATEGORY_LIST_ERROR,
                error : error.message
            })

            //If the account doesn't exist, I'll redirect to the list!
            history.push('/accounts');
            
        });
    }
}

// export const clear_form_account = () => {
//     return (dispatch) => {
//         dispatch({type: ACCOUNT_FORM_CLEAR})
//     }

// }

// export const clear_message = (type) => {
//     return dispatch => {
//         console.log('limpando erro', type);

//         if (type === 'M'){
//             dispatch({
//                 type: ACCOUNT_CLEAR_MSG
//             })
//         }else{
//             dispatch({
//                 type: ACCOUNT_CLEAR_ERROR
//             })
//         }

//     }
// }