import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ProgressBar, Panel } from 'react-bootstrap'

class ResultBar extends Component {

    render() {
        const {percentageOfVotes, votes, totalVotes, answer,authSelected} = this.props
      return(  
        <Panel bsStyle={(authSelected ? 'success' : 'default') }>

        {(authSelected &&
        <Panel.Heading>Your Vote</Panel.Heading>
        )}
            <div>Would you rather {answer}?</div>
            <ProgressBar now={percentageOfVotes} label={`${percentageOfVotes}%`} />
            <div>{votes} out of {totalVotes} votes</div>
        </Panel>

      )
    }
  }

  function mapStateToProps ({} ,{ question, answerNumber,authSelected }) {
    
    let votes = null;
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    let answer = null;

    if(answerNumber === 1){
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
    answer : answer,
    authSelected : authSelected
  }
  }


  export default connect(mapStateToProps)(ResultBar);