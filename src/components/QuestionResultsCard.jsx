import React, { Component } from 'react';
import { Panel, Button, Grid, Col } from 'react-bootstrap'
import ResultBar from './ResultBar'

class QuestionResultsCard extends Component {
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
          <h4>Results:</h4>
          <ResultBar></ResultBar>
          <ResultBar></ResultBar>
          <Button>Submit</Button>
          </Col>
       </Grid>
      </Panel.Body>
    </Panel>
      )
    }
  }

  export default QuestionResultsCard;