import React from 'react';
import {Link} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { loginUser } from '../../../components/user/UserActions';
import ICheck from '../../../components/forms/inputs/ICheck'
import Msg from '../../../components/i18n/Msg';
import Input from '../../../components/forms/inputs/Input';
import AlertMessage, {ALERT_MSG_ERROR} from '../../../components/common/AlertMessage';


class Login extends React.Component {

  onSubmit(values){
		this.props.loginUser(values);
	}

  render() {

    const { handleSubmit, msgError } = this.props;    
    
    return (

        <div className="login-box">
          <div className="login-logo">
            <a href="#">
              <span className="login-logo-main" >Onion</span>
              <span className="login-logo-sub" >Your personal finance controller</span>

            </a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg"><Msg phrase="Sign in to start your session" /></p>

            <AlertMessage message={msgError} type={ALERT_MSG_ERROR} />

            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

              <Field 
                type="text"
                name="email"  
                component={Input}
                icon="fa-user"
                placeholder="E-mail"
              />

              <Field 
                type="password"
                name="password"  
                component={Input}
                icon="fa-lock"
                placeholder="Password"
              />

              <div className="row">
                <div className="col-xs-8">
                    <Field
                      type="check"
                      name="keep"
                      checkboxClass="icheckbox_square-blue"
                      increaseArea="20%"
                      label=" Remember Me"
                      component={ICheck}
                    />
                </div>
                <div className="col-xs-4">

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={this.props.loading}
                >
                  {this.props.loading ? 'Loading...': 'Sign in'}
                </button>                                                                        
                
                  {/*<button type="submit" className="btn btn-primary btn-block btn-flat"><Msg phrase="Sign In" /></button>*/}
                </div>
              </div>
            </form>

            <a href="#"><Msg phrase="I forgot my password" /></a><br/>
            <Link className="text-center" to='/register'><Msg phrase="Register a new membership" /></Link>

          </div>
        </div>

    )
  }
}

function validate(values){

  const errors={};

  if (!values.email){
    errors.email = "Please enter your email address";
  }
  // else if ( ! Functions.isEmailValid( values.email)){
  //     errors.email = "E-mail inválido";
  // }

  if (!values.password){
      errors.password = "Please enter your password";
  }

  // if errors is empty, the form is fine to submit
  return errors;

}

function mapStateToProps({user}){
  const { loading, error } = user;

  return { loading, msgError : error };

}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(mapStateToProps,{loginUser})(Login)
);

