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
function mapStateToProps ({ users } , {id}) {

  const userInfo = users[id];
  const answeredQuestions = Object.keys(userInfo.answers).length;
  const createdQuestions = userInfo.questions.length;

  return {
    answeredQuestions: answeredQuestions,
    createdQuestions: createdQuestions,
    name : userInfo.name,
    avatar : userInfo.avatarURL,
    score : answeredQuestions + createdQuestions

  }
}

export default connect(mapStateToProps)(QuestionScoreCard)