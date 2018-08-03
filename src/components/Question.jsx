import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionSubmitCard from './QuestionSubmitCard'
import QuestionResultsCard from './QuestionResultsCard'

class Question extends Component {
    render() {

      var questionDisplay;
      if (this.props.HasQuestionBeenAnswered) {
        questionDisplay = <QuestionResultsCard question={this.props.question}/>
      }else{
        questionDisplay = <QuestionSubmitCard question={this.props.question}/>
      }

      return(  
        <div>       
          {questionDisplay}
        </div>

      )
    }
  }


//takes in questions state and returns question ids sorted by timestamp?
function mapStateToProps ({ questions, users, authedUser },  props ) {

  const { question_id } = props.match.params;
  const question = questions[question_id];
  const authedUserInfo = users[authedUser];
  let hasQuestionBeenAnswered = false;

  if(question_id != null && authedUser != null)
  {  
    hasQuestionBeenAnswered = authedUserInfo.answers.hasOwnProperty(question_id);
  }

  return {
    HasQuestionBeenAnswered: hasQuestionBeenAnswered,
    question: question
  }
}

  export default connect(mapStateToProps)(Question);
