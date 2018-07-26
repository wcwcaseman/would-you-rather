import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ProgressBar, Panel } from 'react-bootstrap'



class ResultBar extends Component {

    render() {
        const {percentageOfVotes, votes, totalVotes, answer} = this.props
      return(  
        <Panel bsStyle="success">
            <div>Would you rather {answer}?</div>
            <ProgressBar now={percentageOfVotes} label={`${percentageOfVotes}%`} />
            <div>{votes} out of {totalVotes} votes</div>
        </Panel>

      )
    }
  }

  function mapStateToProps ({} ,{ question, answerNumber }) {
    
    let votes = null;
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    let answer = null;

    if(answerNumber == 1){
      votes = question.optionOne.votes.length;   
      answer = question.optionOne.text;
    }else{
      votes = question.optionTwo.votes.length; 
      answer = question.optionTwo.text;
    }
    const percentageOfVotes =  votes/totalVotes * 100;

  return {
    percentageOfVotes : percentageOfVotes,
    votes : votes,
    totalVotes : totalVotes,
    answer : answer
  }
  }


  export default connect(mapStateToProps)(ResultBar);