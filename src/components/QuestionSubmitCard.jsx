import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel, Button,Radio, FormGroup, Grid, Col } from 'react-bootstrap'

class QuestionSubmitCard extends Component {
    render() {

      const {optionOneText,optionTwoText, authorsName, authorsAvatar } = this.props

      return(  
      
    <Panel>
      <Panel.Heading>{authorsName} asks:</Panel.Heading>
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
                    {optionOneText}
                </Radio>{' '}
                <Radio name="radioGroup">
                    {optionTwoText}
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


  export default connect(mapStateToProps)(QuestionSubmitCard);