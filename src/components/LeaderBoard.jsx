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
function mapStateToProps ({ users }) {

 // const authedUserInfo = users[authedUser];
  const userKeys = users ?  Object.keys(users) : [];

  return {
      users: users ?  userKeys : []
  }
}





export default connect(mapStateToProps)(LeaderBoard)