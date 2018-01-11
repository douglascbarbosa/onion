import React from 'react'
import Datatable from '../../../components/tables/Datatable'



export default class Accounts extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
            </div>
            <div className="box-body">
            <Datatable className="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Description</th>
                  <th>Value</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Trident</td>
                  <td>Internet
                    Explorer 4.0
                  </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <th>Rendering engine</th>
                  <th>Browser</th>
                </tr>
                </tfoot>
                </Datatable>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

