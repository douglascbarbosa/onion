import React from 'react'
import Select2 from 'react-select2-wrapper'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ActionButtonGroup from '../../../components/common/ActionButtonGroup'

export default class Transaction extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
        <div className="box box-primary">

            <ActionButtonGroup>
              <a className="btn btn-app"><i className="fa fa-mail-reply"></i> Cancel</a>
              <a className="btn btn-app"><i className="fa fa-save"></i> Save</a>
            </ActionButtonGroup>

            <div className="box-header with-border">
              <h3 className="box-title">New Transaction</h3> 
            </div>

            <form role="form">

              <div className="box-body">

               
                <div className="row">

                  <div className="col-lg-6">

                    <div className="form-group">
                      <label >Description</label>
                      <input type="text" className="form-control" placeholder="Description" />
                    </div>


                  </div>  

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Type</label>
                      <Select2 
                        style={{width: '100%'}} 
                        className="select2"
                        data={[
                          {text: 'Expense', id: 1},
                          {text: 'Income', id: 2}
                          ]}
                        options={
                          {placeholder: 'type'}
                        }
                      />
                    </div>

                  </div>

                  <div className="col-lg-6">

                    <div className="form-group">
                      <label >Amount</label>
                      <input type="text" className="form-control" placeholder="Amount" />
                    </div>

                  </div>

                  <div className="col-lg-6">
                    
                    <div className="form-group">
                      <label>Date:</label>
                      <div className="input-group">
                        <div className="input-group-addon">
                          <i className="fa fa-calendar"></i>
                        </div>
                        <DatePicker className="form-control pull-right"
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                         />
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-6">

                    <div className="form-group">
                      <label>Category</label>
                      <Select2 
                        style={{width: '100%'}} 
                        className="select2"
                        data={[
                          {text: 'Car', id: 1},
                          {text: 'Clothing', id: 2}
                          ]}
                        options={
                          {placeholder: 'Category'}
                        }
                      />
                    </div>

                  </div>

                  <div className="col-lg-6">

                    <div className="form-group">
                      <label>Account</label>
                      <Select2 
                        style={{width: '100%'}} 
                        className="select2"
                        data={[
                          {text: 'Car', id: 1},
                          {text: 'Clothing', id: 2}
                          ]}
                        options={
                          {placeholder: 'Category'}
                        }
                      />
                    </div>
                  
                  </div>

                  <div className="col-lg-6">

                    <div className="form-group">
                      <label>Credit card</label>
                      <Select2 
                        style={{width: '100%'}} 
                        className="select2"
                        data={[
                          {text: 'Visa', id: 1},
                          {text: 'Hipercard', id: 2}
                          ]}
                        options={
                          {placeholder: 'Select a credit card'}
                        }
                      />
                    </div>

                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label >Repeat</label>
                          <input type="text" className="form-control" placeholder="Repeat" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Period</label>
                          <Select2 
                            style={{width: '100%'}} 
                            className="select2"
                            data={[
                                {text: 'Monthly', id: 1},
                                {text: 'Daily', id: 2},
                                {text: 'Weekly', id: 3},
                                {text: 'Yearly', id: 4}
                              ]}
                            options={
                              {placeholder: 'Select the period'}
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Paid
                      </label>
                    </div>

                  </div>

                </div>

              </div>

              <div className="box-footer">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
        </div>

    )
  }
}

