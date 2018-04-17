import database, {getUserPath} from '../../firebase/firebase';
import history from '../../routes/History';

export const CARD_NEW         = 'CARD_NEW';
export const CARD_UPDATE      = 'CARD_UPDATE';
export const CARD_DELETE      = 'CARD_DELETE';
export const CARD_FETCH_ALL   = 'CARD_FETCH_ALL';
export const CARD_FETCH       = 'CARD_FETCH';
export const CARD_NOT_FOUND   = 'CARD_NOT_FOUND';
export const CARD_LIST_ERROR  = 'CARD_LIST_ERROR';
export const CARD_FORM_ERROR  = 'CARD_FORM_ERROR';
export const CARD_FORM_CLEAR  = 'CARD_FORM_CLEAR';
export const CARD_LAODING     = 'CARD_LAODING';
export const CARD_CLEAR_MSG   = 'ACCOUNT_MSG';
export const CARD_CLEAR_ERROR = 'ACCOUNT_ERROR';

const card_path = `${getUserPath()}/cards`;

export const new_card = (values) =>{

    return (dispatch, getState) => {

        dispatch({type: CARD_LAODING});

        const card = {
            name : values.name,
            closing_day : value.closing_day,
            payment_day : value.payment_day,
            account_id : value.account_id,
            limit : parseFloat(values.limit.replace('.', '').replace(',','.')).toFixed(2)
        }

        return database.ref(card_path)
            .push(card)
            .then(ref => {
                dispatch({
                    type: CARD_NEW,
                    card : {
                        id : ref.key,
                        ...card
                    }
                });

                //After add a new card, redirect to the account list page!
                history.push('/cards');
        })
        .catch(error => {
            dispatch({
                type: CARD_FORM_ERROR,
                error : error.message
            })
        });
        
    }
}

export const update_card = (id, values) => {

    return (dispatch, getState) => {

        dispatch({type: CARD_LAODING});
        
        const card = {
            name : values.name,
            closing_day : value.closing_day,
            payment_day : value.payment_day,
            account_id : value.account_id,
            limit : parseFloat(values.limit.replace('.', '').replace(',','.')).toFixed(2)
        }

        return database.ref(`${card_path}/${id}`)
            .update(card)
            .then(ref => {
                dispatch({
                    type: CARD_UPDATE,
                    account : {
                        id,
                        ...card
                    }
                });

                //After update the card, redirect to the account list page!
                history.push('/cards');
        })
        .catch(error => {
            dispatch({
                type: CARD_FORM_ERROR,
                error : error.message
            })
        });
        
    }    
}

export const delete_card = (id) => {

    return (dispatch, getState) => {

        return database.ref(`${card_path}/${id}`)
            .remove()
            .then(() => {

                dispatch({
                    type: CARD_DELETE,
                    id
                });
                
        })
        .catch(error => {
            dispatch({
                type: CARD_LIST_ERROR,
                error : error.message
            })
        });
        
    }    

}


export const fetch_cards = () => {
    return (dispatch, getState ) => {
        return database.ref(card_path).once('value').then(snapshot => {
            const accounts = [];    

            snapshot.forEach(childSnapshot => {
                accounts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
          dispatch({
              type: CARD_FETCH_ALL,
              accounts
          })  
        });
    }
}

export const fetch_card = (id) => {
    return (dispatch, getState ) => {
        return database.ref(`${card_path}/${id}`).once('value').then(snapshot => {
            //Check if the account exist!
            if (snapshot.exists()){
                const card = snapshot.val();

                dispatch({
                    type: CARD_FETCH,
                    card
                });
                 
            }else{
                dispatch({
                    type: CARD_NOT_FOUND
                });

                //If the card doesn't exist, I'll redirect to the list!
                history.push('/cards');
                
            }
        })
        .catch(error => {

            dispatch({
                type: CARD_LIST_ERROR,
                error : error.message
            })

            //If the card doesn't exist, I'll redirect to the list!
            history.push('/cards');
            
        });
    }
}

export const clear_form_card = () => {
    return (dispatch) => {
        dispatch({type: CARD_FORM_CLEAR})
    }

}

export const clear_message = (type) => {
    return dispatch => {
        console.log('limpando erro', type);

        if (type === 'M'){
            dispatch({
                type: CARD_CLEAR_MSG
            })
        }else{
            dispatch({
                type: CARD_CLEAR_ERROR
            })
        }

    }
}