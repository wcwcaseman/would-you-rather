import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel, Button, Grid, Col } from 'react-bootstrap'
import ResultBar from './ResultBar'

class QuestionResultsCard extends Component {
    render() {

      const {question, authorsName, authorsAvatar } = this.props

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
          <Col sm={9}>
          <h4>Results:</h4>
          <ResultBar question={question} answerNumber={1}></ResultBar>
          <ResultBar question={question} answerNumber={2} ></ResultBar>
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
    let optionOneText = "";
    let optionTwoText = "";
    //data can be undefined when navigating by url
    if(question === undefined && Object.keys(questions).length !== 0){
      const { question_id } = props.match.params;
      question = questions[question_id];
    }

    if(Object.keys(users).length !== 0 && question !== undefined){
      author = users[question.author]
      optionOneText = question.optionOne.text;
      optionTwoText = question.optionTwo.text;
    }


  
  return {
    authedUser,
    authorsName : author.name,
    authorsAvatar : author.avatarURL,
    question : question,
    optionOneText : optionOneText,
    optionTwoText: optionTwoText 
  }
  }


  export default connect(mapStateToProps)(QuestionResultsCard);