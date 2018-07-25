import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

//const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

class SignIn extends Component {
  render() {
    return (
      
        <Panel >
          <Panel.Heading>
            <h4>Welcome to the Would You Rather App!</h4>
            <div>Please sign in to continue</div>
          </Panel.Heading>
          <Panel.Body>
          <div>sign in </div>
{/*             <DropdownButton
              bsStyle={title.toLowerCase()}
              title={title}
              key={i}
              id={`dropdown-basic-${i}`}>

              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3" active >Active Item</MenuItem>
            </DropdownButton> */}
          </Panel.Body>
        </Panel>
     
    )
  }
}

export default SignIn