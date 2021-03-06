import React from 'react'
import {connect} from 'react-redux'
import DatatableList from '../../../components/tables/DatatableList'
import ActionButton from '../../../components/common/ActionButton'
import history from '../../../routes/History'
import {Redirect} from 'react-router-dom'
import Msg from '../../../components/i18n/Msg'
import {fetch_cards, delete_card, clear_message} from '../CardActions'
import {Link} from 'react-router-dom'
import AlertMessage, {ALERT_MSG_ERROR, ALERT_MSG_SUCCESS} from '../../../components/common/AlertMessage';
import Functions from '../../../components/utils/Functions';

class Cards extends React.Component {

  componentWillMount(){
    this.props.fetch_cards();
  }

  handleNewClick(){
    //Redirect to account!
    history.push('/card'); 
  }


  handleDelete(id){
    this.props.delete_card(id);
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
          {"data": "closing_day"},
          {"data": "payment_day"},
      ],
      "order": [[0, 'desc']]
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

                <DatatableList id="cardList" options={options} formroute="edit/category" deleteevent={this.handleDelete.bind(this)}  >
                    <thead>
                        <tr>
                            <th><Msg phrase="Name" /></th>
                            <th><Msg phrase="Closing day" /></th>
                            <th><Msg phrase="Payment day" /></th>
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

function mapStateToProps({card}){
  return {list: card.list, msg : card.msg, error: card.error}
}

export default connect(mapStateToProps, {fetch_cards, delete_card, clear_message})(Cards);

