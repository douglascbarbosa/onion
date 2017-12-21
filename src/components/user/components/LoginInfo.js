import React from 'react'

export default class LoginInfo extends React.Component {
  render() {
    return (
      <div className="user-panel">
        <div className="pull-left image">
          <img src="../../assets/img/avatar04.png" className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p>Douglas Carlos</p>
        </div>
      </div>

    )
  }
}

