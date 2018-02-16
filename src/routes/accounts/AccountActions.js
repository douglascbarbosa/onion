import database from '../../firebase/firebase';
import history from '../../routes/History';

export const ACCOUNT_NEW = 'ACCOUNT_NEW';
export const ACCOUNT_FETCH = 'ACCOUNT_FETCH';

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
    }
}

export const fetch_account = () => {
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
              type: ACCOUNT_FETCH,
              accounts
          })  
        });
    }
} 