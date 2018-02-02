import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import ActionButtonGroup from '../../../components/common/ActionButtonGroup'
import Msg from '../../../components/i18n/Msg'
//import CurrencyInput from 'react-currency-input'
import {CurrencyInput, Input} from '../../../components/forms/inputs'
import { new_account } from '../AccountActions';

class Account extends React.Component {
  render() {
    return (
               
      <div className="row">

        <div className="col-lg-6">

          <Field 
            type="text"
            name="name"  
            component={Input}
            label="Account name"
          />

        </div>  

        <div className="col-lg-6">

          <Field 
            type="text"
            name="initialValue"
            component={CurrencyInput}
            label="Initial value"
        
          />

        </div>

      </div>

    )
  }
}

function validate(values){
  const errors={};

  if (!values.name){
    errors.name = "Please enter your name";
  }


  if (!values.email){
    errors.email = "Please enter your email address";
  }
  // else if ( ! Functions.isEmailValid( values.email)){
  //     errors.email = "E-mail inválido";
  // }

  if (!values.password){
      errors.password = "Please enter your password";
  }else if (values.password.length < 6){
    errors.password = "Password should be at least 6 characters";
  }

  // if errors is empty, the form is fine to submit
  return errors;

}

export default connect(null, {new_account})(Account);


