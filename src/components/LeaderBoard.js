import React, { Component } from 'react';
import { connect } from 'react-redux'
import QuestionScoreCard from './QuestionScoreCard'

class LeaderBoard extends Component {
    render() {

      const {users} = this.props;

      return(  
      
        <div>
            <ul>
              {users.map((user) => (
              <li key={user.id}>
                  <QuestionScoreCard user={user} />
              </li>
              ))}
            </ul>
        </div>

      )
    }
  }


  //takes in questions state and returns question ids sorted by timestamp?
function mapStateToProps ({ users }) {

 // const authedUserInfo = users[authedUser];

  const usersInfo = users ?  Object.values(users).map((user) =>  
  Object.assign({}, user, 
    { 
      answeredQuestions: Object.keys(user.answers).length, 
      createdQuestions: user.questions.length,
      score: Object.keys(user.answers).length + user.questions.length
    })).sort((a,b) => a.score < b.score) : [];

  return {
      users: users ?  usersInfo : []
  }
}

export default connect(mapStateToProps)(LeaderBoard)