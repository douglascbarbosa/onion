import React from 'react'
import ActionButtonGroup from '../../../components/common/ActionButtonGroup'
import Msg from '../../../components/i18n/Msg'

export default class Account extends React.Component {
  render() {
    return (
         <div className="box box-primary">

            <ActionButtonGroup>
              <a className="btn btn-app"><i className="fa fa-mail-reply"></i> <Msg phrase="Cancel" /></a>
              <a className="btn btn-app"><i className="fa fa-save"></i> <Msg phrase="Save" /> </a>
            </ActionButtonGroup>

            <div className="box-header with-border">
              <h3 className="box-title"><Msg phrase="New Category" /></h3> 
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

                    <div className="form-group">
                      <label > <Msg phrase="Description" /></label>
                      <input type="text" className="form-control" placeholder="Description" />
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

