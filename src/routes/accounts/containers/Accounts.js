import React from 'react'
import {connect} from 'react-redux'
//import Datatable from '../../../components/tables/Datatable'
import DatatableList from '../../../components/tables/DatatableList'
import ActionButton from '../../../components/common/ActionButton'
import history from '../../../routes/History'
import {Redirect} from 'react-router-dom'
import Msg from '../../../components/i18n/Msg'
import {fetch_accounts, delete_account, clear_message} from '../AccountActions'
import {Link} from 'react-router-dom'
import AlertMessage, {ALERT_MSG_ERROR, ALERT_MSG_SUCCESS} from '../../../components/common/AlertMessage';
import Functions from '../../../components/utils/Functions';

class Accounts extends React.Component {

  componentWillMount(){
    this.props.fetch_accounts();
  }

  handleNewClick(){
    //Redirect to account!
    history.push('/account'); 
  }


  handleDelete(id){
    this.props.delete_account(id);
  }

  onClearMsg(type){
    if (type === ALERT_MSG_SUCCESS){
      this.props.clear_message('M');
    }else{
      this.props.clear_message('E');
    }
  }

  render() {

    let options = {
      "data": this.props.list,
      "columns": [
          {"data": "name"},
          {"data": "initialValue"}
      ],
      "order": [[0, 'desc']],
      "aoColumnDefs" : [{
        "aTargets": [1],
        "mData" : null,
        "mRender" : function (data, type, full){
          return Functions.floatToMoney(data);
        }
    
      }]
      
    }

    return (
      <div className="row">
        <div className="col-xs-12">
              
          <ActionButton onClick={() => this.handleNewClick()}>
            <i className="fa fa-plus"></i> New 
          </ActionButton>

          <div className="box">
            <div className="box-body">
                <AlertMessage type={ALERT_MSG_ERROR} message={this.props.error} onClearMsg={this.onClearMsg.bind(this, ALERT_MSG_ERROR)} />
                <AlertMessage type={ALERT_MSG_SUCCESS} message={this.props.msg} onClearMsg={this.onClearMsg.bind(this, ALERT_MSG_SUCCESS)} />

                <DatatableList id="accountsList" options={options} formroute="edit/account" deleteevent={this.handleDelete.bind(this)}  >
                    <thead>
                        <tr>
                            <th><Msg phrase="Name" /></th>
                            <th style={{width: 200, textAlign: 'rigth'}} ><Msg phrase="Value" /></th>
                            <th style={{width: 60}}><Msg phrase="Actions" /></th>
                        </tr>
                    </thead>
                </DatatableList>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({account}){
  return {list: account.list, msg : account.msg, error: account.error}
}

export default connect(mapStateToProps, {fetch_accounts, delete_account, clear_message})(Accounts);