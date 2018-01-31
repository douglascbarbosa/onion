import database, {currentUser} from '../../firebase/firebase';

export const ACCOUNT_NEW = 'ACCOUNT_NEW';

export const new_account = (values) =>{
    return (dispatch) => {
        // database.ref(`/users/${currentUser.uid}/Accounts`)
        // .push({name : values.name, initialValue : values.initialValue })
        // .then()
    }
}