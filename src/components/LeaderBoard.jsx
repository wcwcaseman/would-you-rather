import React, { Component } from 'react';
import { connect } from 'react-redux'

//import { Panel, Button, Radio, FormControl, Grid, Row, Col,DropdownButton,MenuItem } from 'react-bootstrap'
import QuestionScoreCard from './QuestionScoreCard'

class LeaderBoard extends Component {
    render() {

      const {users} = this.props;

      return(  
      
        <div>
            <ul>
                UnansweredQuestions
              {users.map((id) => (
              <li key={id}>
                  <QuestionScoreCard id={id} />
              </li>
              ))}
            </ul>
        </div>

      )
    }
  }


  //takes in questions state and returns question ids sorted by timestamp?
function mapStateToProps ({ questions, users, authedUser }) {

 // const authedUserInfo = users[authedUser];
  const userKeys = users ?  Object.keys(users) : [];

  return {
      users: users ?  userKeys : []
  }
}





export default connect(mapStateToProps)(LeaderBoard)