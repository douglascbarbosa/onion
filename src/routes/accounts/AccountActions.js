import database from '../../firebase/firebase';
import history from '../../routes/History';

export const ACCOUNT_NEW        = 'ACCOUNT_NEW';
export const ACCOUNT_UPDATE     = 'ACCOUNT_UPDATE';
export const ACCOUNT_FETCH_ALL  = 'ACCOUNT_FETCH_ALL';
export const ACCOUNT_FETCH      = 'ACCOUNT_FETCH';
export const ACCOUNT_NOT_FOUND  = 'ACCOUNT_NOT_FOUND';
export const ACCOUNT_LIST_ERROR = 'ACCOUNT_LIST_ERROR';
export const ACCOUNT_FORM_ERROR = 'ACCOUNT_FORM_ERROR';

export const new_account = (values) =>{

    return (dispatch, getState) => {
        const account = {
            name : values.name,
            initialValue : parseFloat(values.initialValue.replace('.', '').replace(',','.')).toFixed(2)
        }

        return database.ref(`/users/${getState().user.uid}/Accounts`)
            .push(account)
            .then(ref => {
                dispatch({
                    type: ACCOUNT_NEW,
                    account : {
                        id : ref.key,
                        ...account
                    }
                });

                //After add a new account, redirect to the account list page!
                history.push('/accounts');
        })
        .catch(error => {
            dispatch({
                type: ACCOUNT_FORM_ERROR,
                error : error.message
            })
        });
        
    }
}

export const update_account = (id, values) => {

    return (dispatch, getState) => {
        const account = {
            name : values.name,
            initialValue : parseFloat(values.initialValue.replace('.', '').replace(',','.')).toFixed(2)
        }

        return database.ref(`/users/${getState().user.uid}/Accounts/${id}`)
            .update(account)
            .then(ref => {
                console.log(ref);
                dispatch({
                    type: ACCOUNT_UPDATE,
                    account : {
                        id,
                        ...account
                    }
                });

                //After add a new account, redirect to the account list page!
                history.push('/accounts');
        })
        .catch(error => {
            dispatch({
                type: ACCOUNT_FORM_ERROR,
                error : error.message
            })
        });
        
    }    
}


export const fetch_accounts = () => {
    return (dispatch, getState ) => {
        return database.ref(`/users/${getState().user.uid}/Accounts`).once('value').then(snapshot => {
            const accounts = [];    

            snapshot.forEach(childSnapshot => {
                accounts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
          dispatch({
              type: ACCOUNT_FETCH_ALL,
              accounts
          })  
        });
    }
}

export const fetch_account = (id) => {
    return (dispatch, getState ) => {
        return database.ref(`/users/${getState().user.uid}/Accounts/${id}`).once('value').then(snapshot => {
            //Check if the account exist!
            if (snapshot.exists()){
                const account = snapshot.val();

                dispatch({
                    type: ACCOUNT_FETCH,
                    account
                });
                 
            }else{
               
                dispatch({
                    type: ACCOUNT_NOT_FOUND
                });

                //If the account doesn't exist, I'll redirect to the list!
                history.push('/accounts');
                
            }
        })
        .catch(error => {

            dispatch({
                type: ACCOUNT_LIST_ERROR,
                error : error.message
            })

            //If the account doesn't exist, I'll redirect to the list!
            history.push('/accounts');
            
        });
    }
}
