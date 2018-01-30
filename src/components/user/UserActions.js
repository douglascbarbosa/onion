import database, {firebase} from '../../firebase/firebase'
import history from '../../routes/History';


export const USER_INFO = 'USER_INFO';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

export const loginUser = (values) => {
    return (dispatch) => {
  
        dispatch({ type: LOGIN_USER });
        return firebase.auth().signInWithEmailAndPassword(values.email, values.password)
            .then(user => {
                if (user) {

                    database.ref(`/users/${user.uid}`).once("value")
                        .then((snapshot) => {
                            const usrInfo = snapshot.val();
        
                            loginUserSuccess(dispatch, usrInfo) 

                        })
                }
                    
            })
            .catch(error => {
                console.log('Login erro code', error.code);
                console.log('Login erro message', error);
                loginUserFail(dispatch, error.message);
            })


  
    };
  };
  
export const registerUser = (values) => {
    return (dispatch) => {
        dispatch({ type: REGISTER_USER });

        return firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
        .then(user => {
            
            if (user) {

                let usrInfo = {
                    email: values.email,
                    uid : user.uid,
                    username: values.name,
                }

                database.ref('users/' + user.uid).set(usrInfo);

                loginUserSuccess(dispatch, usrInfo) 
            }
        })
        .catch((error) => {
            console.log('Register erro code', error.code);
            console.log('Register erro message', error.message);
            registerUserFail(dispatch, error.message);
        });

        return true;
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    history.push('/dashboard');

};  

const loginUserFail = (dispatch, error) => {
	dispatch({ type: LOGIN_USER_FAIL, error})	
};

const registerUserFail = (dispatch, error) => {
	dispatch({ type: REGISTER_USER_FAIL, error})	
};
