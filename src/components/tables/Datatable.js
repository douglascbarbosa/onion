import React from 'react'

export default class Datatable extends React.Component {

  componentDidMount() {
    this.datatable();
  }

  datatable() {

    //Create the datatable element!
    const element = window.$(this.refs.table);
    const _dataTable = element.DataTable();

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