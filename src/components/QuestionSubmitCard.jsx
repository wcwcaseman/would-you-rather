import React, { Component } from 'react';
import { Panel, Button,Radio, FormGroup, Grid, Row, Col,DropdownButton,MenuItem } from 'react-bootstrap'

class QuestionSubmitCard extends Component {
    render() {
      return(  
      
    <Panel>
      <Panel.Heading>Person asks:</Panel.Heading>
      <Panel.Body>
          <Grid>
          <Col sm={2}>
            <image></image>
          </Col>
          <Col sm={10}>
          <h4>Would You Rather ...</h4>
{/*           <input type="radio" name="Answers" id="Answer1" value="Answer1"></input>
          <input type="radio" name="Answers" id="Answer2" value="Answer2"></input> */}
            <FormGroup>   
                <Radio name="radioGroup">
                    Answer One
                </Radio>{' '}
                <Radio name="radioGroup">
                    Answer two
                </Radio>{' '}
            </FormGroup>

          <Button>Submit</Button>
          </Col>
       </Grid>
      </Panel.Body>
    </Panel>
      )
    }
  }

  export default QuestionSubmitCard;