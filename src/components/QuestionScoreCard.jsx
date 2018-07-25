import React, { Component } from 'react';
import { Panel, Grid, Col } from 'react-bootstrap'
//import ResultBar from './ResultBar'

class QuestionScoreCard extends Component {
    render() {
      return(  
      
    <Panel>
      <Panel.Heading>Person asks:</Panel.Heading>
      <Panel.Body>
          <Grid>
          <Col sm={2}>
            <image></image>
          </Col>
          <Col sm={6}>
          <h3>User Name</h3>
          <div>Answered questions <span>7</span></div>
          <div>Created questions <span>3</span></div>
          </Col>
          <Col sm={2}>
            <Panel>
                <Panel.Heading>
                    Score
                </Panel.Heading>
                <Panel.Body>
                    10
                </Panel.Body>
            </Panel>
          </Col>
       </Grid>
      </Panel.Body>
    </Panel>
      )
    }
  }

  export default QuestionScoreCard;