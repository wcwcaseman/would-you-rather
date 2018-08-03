import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel, Grid, Col } from 'react-bootstrap'


class QuestionScoreCard extends Component {
    render() {

      const {answeredQuestions, createdQuestions, name, avatar, score} = this.props;

      return(  
      
    <Panel>
      <Panel.Heading></Panel.Heading>
      <Panel.Body>
          <Grid>
          <Col sm={2}>
          <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
          </Col>
          <Col sm={6}>
          <h3>{name}</h3>
          <div>Answered questions <span>{answeredQuestions}</span></div>
          <div>Created questions <span>{createdQuestions}</span></div>
          </Col>
          <Col sm={2}>
            <Panel>
                <Panel.Heading>
                    Score
                </Panel.Heading>
                <Panel.Body>
                    {score}
                </Panel.Body>
            </Panel>
          </Col>
       </Grid>

      </Panel.Body>
    </Panel>
      )
    }
  }

   //takes in questions state and returns question ids sorted by timestamp?
function mapStateToProps ({ users } , {user}) {
  return {
    answeredQuestions: user.answeredQuestions,
    createdQuestions: user.createdQuestions,
    name : user.name,
    avatar : user.avatarURL,
    score : user.score

  }
}

export default connect(mapStateToProps)(QuestionScoreCard)