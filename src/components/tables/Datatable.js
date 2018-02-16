import React from 'react'

export default class Datatable extends React.Component {

  componentDidMount() {
    this.datatable();
  }

  componentDidUpdate(){
    // console.log(this._dataTable.data());
    this._dataTable.draw();
  }

  datatable() {

    //Create the datatable element!
    const element = window.$(this.refs.table);

    //Take the Datatable options!
    let {options} = {...this.props} || {};

    //Creating the Datatable element object!
    this._dataTable = element.DataTable(options);

  }

  render() {
    let {children, options, detailsFormat, paginationLength, ...props} = this.props;
    return (
      <table {...props} ref="table">
        {children}
      </table>
    )
  }
}