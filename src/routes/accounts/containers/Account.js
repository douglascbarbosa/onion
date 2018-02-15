import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import ActionButtonGroup from '../../../components/common/ActionButtonGroup'
import Msg from '../../../components/i18n/Msg'
//import CurrencyInput from 'react-currency-input'
import {CurrencyInput, Input} from '../../../components/forms/inputs'
import { new_account } from '../AccountActions';
import Form from '../../../components/forms/Form';

class Account extends React.Component {

  onSubmit(values){
    this.props.new_account(values);
  }

  render() {
    const { handleSubmit } = this.props;      
    return (

      <Form title="New Account" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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

      </Form>
    )
  }
}

function validate(values){

  const errors={};

  if (!values.name){
    errors.name = "Please enter the account name";
  }

  return errors;
}

function mapStateToProps({user}){
  const { loading, error } = user;

  return { loading, msgError : error };
}

export default reduxForm({
  validate,
  form: 'AccountForm'
})(
  connect(mapStateToProps, {new_account})(Account)
);



