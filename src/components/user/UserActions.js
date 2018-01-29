
export const USER_INFO = 'USER_INFO';
export const LOGIN_USER = 'LOGIN_USER';


export const loginUser = (values) => {
    return (dispatch) => {
  
        dispatch({ type: LOGIN_USER });
        console.log(values);
        return true;
  
    };
  };
  