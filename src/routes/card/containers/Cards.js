import React from 'react'
import ActionButton from '../../../components/common/ActionButton'
import history from '../../../routes/History'

export default class Cards extends React.Component {

  handleNewClick(){
    //Redirect to account!
    history.push('/card'); 
  }

  render() {
    return (
    	<div>
    		
          <ActionButton onClick={() => this.handleNewClick()}>
            <i className="fa fa-plus"></i> New 
          </ActionButton>

            <p>	Teste </p>
    		<p>	Teste </p>
    		<p>	Teste </p>
    		<p>	Teste </p>
    		<p>	Teste </p>
    	</div>

    )
  }
}

