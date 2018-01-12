import React from 'react'
import Datatable from '../../../components/tables/Datatable'



export default class Accounts extends React.Component {
  
  render() {

    //@TODO - take information by store!
    let data = [
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste2', "account_value" : 10},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
        {"account_name" : 'Teste', "account_value" : 10000},
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
          <div className="box">
            <div className="box-body">
                <Datatable options={options} className="table table-bordered table-hover">
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
    )
  }
}

