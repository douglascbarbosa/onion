import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import ActionButtonGroup from '../../../components/common/ActionButtonGroup'
import Msg from '../../../components/i18n/Msg'
//import CurrencyInput from 'react-currency-input'
import {CurrencyInput, Input} from '../../../components/forms/inputs'
import { new_account, update_account, fetch_account, clear_form_account } from '../AccountActions';
import Form from '../../../components/forms/Form';
import AlertMessage, {ALERT_MSG_ERROR} from '../../../components/common/AlertMessage';

class Account extends React.Component {

  componentWillUnmount(){
    this.props.clear_form_account();
  }

  componentWillMount(){

    if (this.props.match.params.id){
      this.props.fetch_account(this.props.match.params.id)
    }

  }

  onSubmit(values){

    if (this.props.match.params.id){
      this.props.update_account(this.props.match.params.id, values)
    }else{
      this.props.new_account(values)
    }  

  }

  render() {

    const { handleSubmit } = this.props;      

    return (

      <div>

        <AlertMessage type={ALERT_MSG_ERROR} message={this.props.error} />

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

      </div>
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

function mapStateToProps({account}){
  return { error : account.error, enableReinitialize: true, initialValues: account.account || {initialValue: '0,00'} };
}

Account = reduxForm({
  validate,
  form: 'account-form'
})(Account)

Account = connect(mapStateToProps, {new_account, update_account, fetch_account, clear_form_account})(Account);

export default Account;