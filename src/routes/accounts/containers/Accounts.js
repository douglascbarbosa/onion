import React from 'react'
import {connect} from 'react-redux'
import Datatable from '../../../components/tables/Datatable'
import ActionButton from '../../../components/common/ActionButton'
import history from '../../../routes/History'
import {Redirect} from 'react-router-dom'
import Msg from '../../../components/i18n/Msg'
import {fetch_account} from '../AccountActions'
import {Link} from 'react-router-dom'

function redirectTeste(id){
  alert(id);
}

class Accounts extends React.Component {

  componentWillMount(){
    this.props.fetch_account();
  }

  handleNewClick(){
    //Redirect to account!
    history.push('/account'); 
  }

  handleEditClick( id ){
    history.push('/account'); 
  }

  render() {
//    console.log(this.props.list.length);
//    if (this.props.list.length > 0){
    let options = {
      "data": this.props.list,
      "columns": [
          {"data": "name"},
          {"data": "initialValue"}
      ],
      "order": [[1, 'desc']],
      "aoColumnDefs" : [
        {
          "aTargets": [2],
          "mData" : null,
          "mRender" : function (data, type, full){
            return '<a href="#" onclick="redirectTeste(\''+ full.id +'\');">Edit</a>';
          }
        }
      ]
    }

    return (
      <div className="row">
        <div className="col-xs-12">
              
          <ActionButton onClick={() => this.handleNewClick()}>
            <i className="fa fa-plus"></i> New 
          </ActionButton>

          <div className="box">
            <div className="box-body">
                <Datatable options={options} className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th><Msg phrase="Name" /></th>
                            <th>Value</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </Datatable>
            </div>
          </div>
        </div>
      </div>
    )
  // }else{
  //   return null
  // }
  }
}

function mapStateToProps({account}){
  return {...account}
}

export default connect(mapStateToProps, {fetch_account})(Accounts);