import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel, Button,Radio, FormGroup, Grid, Col } from 'react-bootstrap'
import { handleAnswerQuestion } from '../actions/questions'

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
      //Add question to Store
      //dispatch(handleAnswerQuestion (authedUser, questionId, optionSelected))
  
/*       this.setState(() => ({
        optionSelected: '',
      })) */
    }



/*     tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: '/images/TylerM.png',
      answers: {
        "vthrdm985a262al8qx3do": 'optionOne',
        "xj352vofupe1dqz9emx13r": 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    }, */


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
          <form onSubmit={this.handleSubmit} >
            <FormGroup>   
                <Radio name="radioGroup" value="optionOne" onChange={this.handleOptionChange}>
                    {optionOneText}
                </Radio>{' '}
                <Radio name="radioGroup" value="optionTwo" onChange={this.handleOptionChange}>
                    {optionTwoText}
                </Radio>{' '}
            </FormGroup>


          <Button type="submit">Submit</Button>
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

    //percentageOfVotes, votes, totalVotes, answer

    
 /*  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: '',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },


  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
 */



  
  return {
    authedUser,
    authorsName : author.name,
    authorsAvatar : author.avatarURL,
    questionId : questionid,
    optionOneText : optionOneText,
    optionTwoText: optionTwoText 
  }
  }


  export default connect(mapStateToProps)(QuestionSubmitCard);