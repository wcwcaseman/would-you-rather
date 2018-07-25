import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel, Button,Radio, FormGroup, Grid, Col } from 'react-bootstrap'

class QuestionSubmitCard extends Component {
    render() {

      const { authorsName, authorsAvatar } = this.props

      return(  
      
    <Panel>
      <Panel.Heading>Person asks:</Panel.Heading>
      <Panel.Body>
          <Grid>
          <Col sm={2}>
            <img
            src={authorsAvatar}
            alt={`Avatar of ${authorsName}`}
            className='avatar'
          />
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

  function mapStateToProps ({questions, authedUser, users}, { question }, props) {
    
    let author = {};

    if(question === undefined && Object.keys(questions).length !== 0){
      const { question_id } = props.match.params;
      question = questions[question_id];
    }

  
  //data can be undefined when navigating by url
  if(Object.keys(users).length !== 0 && question !== undefined){
    author = users[question.author]
  }
  
  return {
    authedUser,
    authorsName : author.name,
    authorsAvatar : author.avatarURL,
    question : question
  
  }
  }


  export default connect(mapStateToProps)(QuestionSubmitCard);