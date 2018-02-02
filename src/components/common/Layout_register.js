import React from 'react'
import Layout from './Layout';
import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'
import ActionButtonGroup from './ActionButtonGroup'
import Msg from '../i18n/Msg'

class Layout_register extends React.Component {

  componentDidMount(){

  }


  onSubmit(values){
    //this.props.registerUser(values);
    console.log('submit');
    //this.props.children.save();

  }

  render() {
    const { handleSubmit, loading, msgError } = this.props;      

    return (
        <Layout>

            <ActionButtonGroup>
              <a className="btn btn-app"><i className="fa fa-mail-reply"></i> <Msg phrase="Cancel" /></a>
              <a className="btn btn-app"><i className="fa fa-save"></i> <Msg phrase="Save" /> </a>
            </ActionButtonGroup>
            
            <div className="box box-primary">

                <div className="box-header with-border">
                    <h3 className="box-title"><Msg phrase="New Account" /></h3> 
                </div>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} role="form">

                    <div className="box-body">

                        {this.props.children}

                    </div>

                    <div className="box-footer">
                        <button className="btn btn-default" style={{marginRight: 5 }}><i className="fa fa-mail-reply"></i> <Msg phrase="Cancel" /></button>
                        <button type="submit" className="btn btn-primary"><i className="fa fa-save"></i> <Msg phrase="Save" /></button>
                    </div>
                </form>
            </div>

        </Layout>
    )
  }
}

function validate(){
    return true;
}

function mapStateToProps({user}){
    const { loading, error } = user;
  
    return { loading, msgError : error };
  }
  
  export default reduxForm({
    validate,
    form: 'AccountForm'
  })(
    connect(mapStateToProps)(Layout_register)
  );
  