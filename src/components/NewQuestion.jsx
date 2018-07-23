import React, { Component } from 'react';
import { Panel, Button, Radio, FormControl, Grid, Row, Col,DropdownButton,MenuItem } from 'react-bootstrap'

class NewQuestion extends Component {
    render() {
      return(  
      
    <Panel>
      <Panel.Heading>Create New Question</Panel.Heading>
      <Panel.Body>
        <div>Complete the question:</div>
        <strong>Would you rather ...</strong>
        <form>
        <FormControl
            id="formControlsText"
            type="text"
            placeholder="Enter Option One Text Here"
            />
        <div>OR</div>
        <FormControl
            id="formControlsText"
            type="text"
            placeholder="Enter Option Two Text Here"
            />
        <Button>Submit</Button>
        </form>
      </Panel.Body>
    </Panel>
      )
    }
  }

  export default NewQuestion;