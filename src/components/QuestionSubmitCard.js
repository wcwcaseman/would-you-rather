import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel, Button,Radio, FormGroup, Grid, Col } from 'react-bootstrap'
import { handleAnswerQuestion } from '../actions/questions'
import { withRouter } from 'react-router-dom'

class QuestionSubmitCard extends Component {
    //we use component state instead of the store as it is easier and redux wouldnt give us any benefits(Not using this state anywhere else in app no need to pass it)
    state = {
      optionSelected: ''
    }

    handleOptionChange = (e) => {
      const optionSelected = e.target.value
  
      this.setState(() => ({
        optionSelected
      }))
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
  
      const { optionSelected } = this.state
      const { dispatch, authedUser, questionId } = this.props
      const obj = {id: questionId, name: optionSelected}; 

      const qid = questionId;
      const answer = optionSelected;
      dispatch(handleAnswerQuestion (authedUser, qid, answer))
    }

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
          <form onSubmit={this.handleSubmit} >
            <FormGroup>   
                <Radio name="radioGroup" value="optionOne" onChange={this.handleOptionChange}>
                    {optionOneText}
                </Radio>{' '}
                <Radio name="radioGroup" value="optionTwo" onChange={this.handleOptionChange}>
                    {optionTwoText}
                </Radio>{' '}
            </FormGroup>


          <Button type="submit" disabled={!this.state.optionSelected} >Submit</Button>
          </form>
          </Col>
       </Grid>
      </Panel.Body>
    </Panel>
      )
    }
  }

  function mapStateToProps ({questions, authedUser, users}, { question }) {
    
    let author = {};
    let optionOneText = "";
    let optionTwoText = "";
    let questionid = '';
    //data can be undefined when navigating by url
    if(question !== undefined){
      questionid = question.id;
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
    questionId : questionid,
    optionOneText : optionOneText,
    optionTwoText: optionTwoText 
  }
  }


  export default withRouter(connect(mapStateToProps)(QuestionSubmitCard));