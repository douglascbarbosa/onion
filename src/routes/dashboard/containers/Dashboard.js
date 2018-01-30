import React from 'react'
import {Link} from 'react-router-dom'
import AlertMessage, {ALERT_MSG_ERROR} from '../../../components/common/AlertMessage'

export default class Dashboard extends React.Component {
  render() {
    return (
    	<div>
				<AlertMessage message="Testing the alert message" type={ALERT_MSG_ERROR} />
    	</div>

    )
  }
}

