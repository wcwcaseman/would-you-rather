import React, { Component } from 'react';
import { Panel, Button,Radio, FormGroup, Grid, Row, Col,DropdownButton,MenuItem } from 'react-bootstrap'
import ResultBar from './ResultBar'

class QuestionViewPollCard extends Component {
    render() {
      return(  
      
    <Panel>
      <Panel.Heading>Person asks:</Panel.Heading>
      <Panel.Body>
          <Grid>
          <Col sm={2}>
            <image></image>
          </Col>
          <Col sm={9}>
          <h4>Would you rather</h4>
          <div>...first question first set of characters...</div>
          <Button>View Poll</Button>
          </Col>
       </Grid>
      </Panel.Body>
    </Panel>
      )
    }
  }

  export default QuestionViewPollCard;