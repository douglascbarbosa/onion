import React from 'react'
import Datatable from '../../../components/tables/Datatable'
import ActionButton from '../../../components/common/ActionButton'
import history from '../../../routes/History'
import {Redirect, Link} from 'react-router-dom'

import {GoogleCharts} from 'google-charts';
import ICheck from '../../../components/forms/common/ICheck'

export default class Transactions extends React.Component {
  
  handleNewClick(){
    //Redirect to account!
    history.push('/transaction'); 
  }

  componentDidMount(){
    GoogleCharts.load(this.drawBalanceChart);  
  }

  drawBalanceChart(){

    var data = GoogleCharts.api.visualization.arrayToDataTable([
          ['Day', 'Income', 'Expenses'],
          ['15',  0,       100],
          ['16',  1800,      200]
        ]);

        var options = {
          title: 'Monthly balance',
          hAxis: {title: 'Day',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new GoogleCharts.api.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options)    

  }

  render() {

    let data = [
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste2', "account_value" : 10},
        {"account_name" : 'Teste', "account_value" : 10000}
    ]

    let options = {
      "data": data,
      "columns": [
          {"data": "account_name"},
          {"data": "account_value"}
      ],
      "order": [[1, 'desc']]
    }


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

                  <p className="text-muted text-center positive-value"><i className="fa fa-arrow-circle-o-up"></i> R$ 1.500,00</p>
                  <p className="text-muted text-center ">Monthly balance</p>

                  <ul className="list-group list-group-unbordered">
                    <li className="list-group-item">
                      <b>Day balance</b> <a className="pull-right positive-value"><i className="fa fa-arrow-circle-o-up"></i> R$ 1.500,00</a>
                    </li>
                    <li className="list-group-item">
                      <b>Income</b> <a className="pull-right positive-value"><i className="fa fa-arrow-circle-o-up"></i> R$ 1.800,00</a>
                    </li>
                    <li className="list-group-item">
                      <b>Expenses</b> <a className="pull-right negative-value"><i className="fa fa-arrow-circle-o-down"></i> R$ 300,00</a>
                    </li>
                  </ul>

                  <div id="chart_div"></div>

                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className="active"><a href="#transactions" data-toggle="tab"><i className="fa fa-exchange"></i> Transactions</a></li>
                  <li><a href="#income" data-toggle="tab"><i className="fa fa-arrow-circle-o-up"></i> Income</a></li>
                  <li><a href="#expense" data-toggle="tab"><i className="fa fa-arrow-circle-o-down"></i> Expenses</a></li>
                </ul>
                <div className="tab-content">
                    <div className="active tab-pane" id="transactions">
                        <ul className="timeline timeline-inverse">
                          <li className="time-label">
                                <span className="bg-red">
                                  16 Jan. 2018
                                </span>
                          </li>
                          <li>
                            <i className="fa fa-arrow-circle-o-up bg-green"></i>
                            <div className="timeline-item">
                              <h3 style={{fontSize: 18}} className="timeline-header">
                                  <ICheck
                                    checkboxClass="icheckbox_square-blue"
                                    increaseArea="2%"
                                    checked={true}
                                  />                              
                                <Link to="/transaction"> Salary </Link> 
                                <small><i className="fa fa-tag"></i> Salary <i className="fa fa-bank"></i> Checking</small> <b className="pull-right positive-value">R$ 1.800,00</b>
                                <br /> 
                                <small><i className="fa fa-clock-o"></i> 16/01/2018 12:05</small> 
                                <small className="pull-right positive-value"><i className="fa fa-check"></i> Received</small> 
                              </h3>
                            </div>
                          </li>

                          <li>
                            <i className="fa fa-arrow-circle-o-down bg-red"></i>
                            <div className="timeline-item">
                              <h3 style={{fontSize: 18}} className="timeline-header">
                                <ICheck
                                  checkboxClass="icheckbox_square-blue"
                                  increaseArea="2%"
                                />                    
                                <Link to="/transaction"> Clothing </Link> <small><i className="fa fa-tag"></i> Clothing <i className="fa fa-bank"></i> Checking</small> <b className="pull-right negative-value">R$ 200,00</b>
                                <br />
                                <small><i className="fa fa-clock-o"></i> 16/01/2018 12:05</small> 
                                <small className="pull-right negative-value"><i className="fa fa-close"></i> Not paid</small> 
                              </h3>
                            </div>
                          </li>

                          <li className="time-label">
                                <span className="bg-green">
                                  15 Jan. 2018
                                </span>
                          </li>

                          <li>
                            <i className="fa fa-arrow-circle-o-down bg-red"></i>
                            <div className="timeline-item">
                              <h3 style={{fontSize: 18}} className="timeline-header">
                                <ICheck
                                  checkboxClass="icheckbox_square-blue"
                                  increaseArea="2%"
                                  checked={true}
                                />                    
                                <Link to="/transaction"> Gás </Link> <small><i className="fa fa-tag"></i> Car <i className="fa fa-bank"></i> Checking</small> <b className="pull-right negative-value">R$ 100,00</b>
                                <br /> 
                                <small><i className="fa fa-clock-o"></i> 16/01/2018 12:05</small> 
                                <small className="pull-right positive-value"><i className="fa fa-check"></i> Paid</small> 
                              </h3>
                            </div>
                          </li>

                        </ul>
                    </div>

                    <div className="tab-pane" id="income">
                      <Datatable options={options} style={{width:'100%'}} className="table table-bordered table-hover">
                          <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Value</th>
                              </tr>
                          </thead>
                      </Datatable>

                    </div>

                    <div className="tab-pane" id="expense">
                      <Datatable options={options} style={{width:'100%'}} className="table table-bordered table-hover">
                          <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Value</th>
                              </tr>
                          </thead>
                      </Datatable>
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

