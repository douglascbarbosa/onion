import React from 'react'
import ActionButtonGroup from '../../../components/common/ActionButtonGroup'
import Msg from '../../../components/i18n/Msg'
import Select2 from 'react-select2-wrapper'
import CurrencyInput from 'react-currency-input';

export default class Card extends React.Component {
  render() {
    return (
         <div className="box box-primary">

            <ActionButtonGroup>
              <a className="btn btn-app"><i className="fa fa-mail-reply"></i> <Msg phrase="Cancel" /></a>
              <a className="btn btn-app"><i className="fa fa-save"></i> <Msg phrase="Save" /> </a>
            </ActionButtonGroup>

            <div className="box-header with-border">
              <h3 className="box-title"><Msg phrase="New Account" /></h3> 
            </div>

            <form role="form">

              <div className="box-body">

               
                <div className="row">

                  <div className="col-lg-6">

                    <div className="form-group">
                      <label > <Msg phrase="Name" /></label>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>

                  </div>  

                  <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                              <label > <Msg phrase="Closing day" /></label>
                              <Select2 
                                style={{width: '100%'}} 
                                className="select2"
                                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]}
                                options={
                                  {placeholder: 'Select the period'}
                                }
                              />
                            </div>  
                        </div>
                        <div className="col-lg-6">

                            <div className="form-group">
                              <label > <Msg phrase="Payment day" /></label>
                              <Select2 
                                style={{width: '100%'}} 
                                className="select2"
                                data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]}
                                options={
                                  {placeholder: 'Select the period'}
                                }
                              />
                             </div> 
                        </div>

                    </div>

                  </div>
                  <div className="col-lg-6">

                    <div className="form-group">
                      <label > <Msg phrase="Associated account" /></label>
                      <Select2 
                        style={{width: '100%'}} 
                        className="select2"
                        data={[
                          {text: 'Car', id: 1},
                          {text: 'Clothing', id: 2}
                          ]}
                        options={
                          {placeholder: 'Select the period'}
                        }
                      />
                     </div> 

                  </div>  
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label ><Msg phrase="Limit" /></label>
                      <CurrencyInput prefix="R$" decimalSeparator="," thousandSeparator="." type="text" className="form-control" placeholder="Amount" />
                    </div>
                  </div>



                </div>

              </div>

              <div className="box-footer">
                <button className="btn btn-default" style={{marginRight: 5 }}><i className="fa fa-mail-reply"></i> <Msg phrase="Cancel" /></button>
                <button type="submit" className="btn btn-primary"><i className="fa fa-save"></i> <Msg phrase="Save" /></button>
              </div>
            </form>
        </div>

    )
  }
}

