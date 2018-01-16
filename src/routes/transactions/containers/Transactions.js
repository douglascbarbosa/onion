import React from 'react'
import Datatable from '../../../components/tables/Datatable'
import ActionButton from '../../../components/common/ActionButton'
import history from '../../../routes/History'
import {Redirect} from 'react-router-dom'

export default class Transactions extends React.Component {
  
  handleNewClick(){
    //Redirect to account!
    history.push('/transaction'); 
  }

  render() {

    return (
      <div className="row">
        <div className="col-xs-12">
              
          <ActionButton onClick={() => this.handleNewClick()}>
            <i className="fa fa-plus"></i> New 
          </ActionButton>


          <div className="row">
            <div className="col-md-3">
    
              <div className="box box-primary">
                <div className="box-body box-profile">

                  <h3 className="profile-username text-center">
                    <a><i className="fa fa-chevron-left"></i></a> 
                    <span style={{marginLeft: 5, marginRight: 5, fontSize: 25}}>January</span>
                    <a><i className="fa fa-chevron-right"></i></a> 
                  </h3>

                  <p className="text-muted text-center positive-value"><i className="fa fa-arrow-circle-o-up"></i> R$ 1.000</p>
                  <p className="text-muted text-center ">Monthly balance</p>

                  <ul className="list-group list-group-unbordered">
                    <li className="list-group-item">
                      <b>Current balance</b> <a className="pull-right positive-value"><i className="fa fa-arrow-circle-o-up"></i> R$ 200,00</a>
                    </li>
                    <li className="list-group-item">
                      <b>Income</b> <a className="pull-right positive-value"><i className="fa fa-arrow-circle-o-up"></i> R$ 200,00</a>
                    </li>
                    <li className="list-group-item">
                      <b>Expenses</b> <a className="pull-right negative-value"><i className="fa fa-arrow-circle-o-down"></i> R$ 200,00</a>
                    </li>
                  </ul>

                  <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className="active"><a href="#activity" data-toggle="tab"><i className="fa fa-exchange"></i> Transactions</a></li>
                  <li><a href="#timeline" data-toggle="tab"><i className="fa fa-arrow-circle-o-up"></i> Income</a></li>
                  <li><a href="#settings" data-toggle="tab"><i className="fa fa-arrow-circle-o-down"></i> Expenses</a></li>
                </ul>
                <div className="tab-content">
                    <div className="active tab-pane" id="activity">
                        <ul className="timeline timeline-inverse">
                          <li className="time-label">
                                <span className="bg-red">
                                  16 Jan. 2018
                                </span>
                          </li>
                          <li>
                            <i className="fa fa-arrow-circle-o-up bg-green"></i>

                            <div className="timeline-item">
                              <h3 style={{fontSize: 25}} className="timeline-header">
                                <a href="#"> Salary </a> <b className="pull-right positive-value">R$ 1.800,00</b>
                                <br /> 
                                <small><i className="fa fa-tag"></i> Salary  <i className="fa fa-clock-o"></i> 16/01/2018 12:05</small> 
                                
                              </h3>
                              
                            </div>

                          </li>


                        </ul>
                    </div>

                    <div class="tab-pane" id="timeline">
                    </div>
                </div>

              </div>


            </div>

          </div>

        </div>
      </div>
    )
  }
}

