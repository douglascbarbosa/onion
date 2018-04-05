import React from 'react'
import {connect} from 'react-redux'
//import Datatable from '../../../components/tables/Datatable'
import DatatableList from '../../../components/tables/DatatableList'
import ActionButton from '../../../components/common/ActionButton'
import history from '../../../routes/History'
import {Redirect} from 'react-router-dom'
import Msg from '../../../components/i18n/Msg'
import {fetch_accounts} from '../AccountActions'
import {Link} from 'react-router-dom'
import AlertMessage, {ALERT_MSG_ERROR} from '../../../components/common/AlertMessage';

class Accounts extends React.Component {

  componentWillMount(){
    this.props.fetch_accounts();
  }

  handleNewClick(){
    //Redirect to account!
    history.push('/account'); 
  }


  handleDelete(id){
    console.log(id);
  }

  render() {

    let options = {
      "data": this.props.list,
      "columns": [
          {"data": "name"},
          {"data": "initialValue"}
      ],
      "order": [[1, 'desc']],
      
    }

    return (
      <div className="row">
        <div className="col-xs-12">
              
          <ActionButton onClick={() => this.handleNewClick()}>
            <i className="fa fa-plus"></i> New 
          </ActionButton>

          <div className="box">
            <div className="box-body">
                <AlertMessage type={ALERT_MSG_ERROR} message={this.props.listError} />

                <DatatableList id="accountsList" options={options} formroute="edit/account" deleteevent={this.handleDelete.bind(this)} >
                    <thead>
                        <tr>
                            <th><Msg phrase="Name" /></th>
                            <th><Msg phrase="Value" /></th>
                            <th><Msg phrase="Actions" /></th>
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
  return {...account}
}

export default connect(mapStateToProps, {fetch_accounts})(Accounts);