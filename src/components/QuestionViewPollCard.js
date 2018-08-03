import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel, Button, Grid, Col } from 'react-bootstrap'
//import ResultBar from './ResultBar'
import { withRouter } from 'react-router-dom'

class QuestionViewPollCard extends Component {

  toQuestion = (e, id) => {
    e.preventDefault()
    //  Redirect to question
    this.props.history.push(`/questions/${id}`)
  }

    render() {
      const { question, authorsName, authorsAvatar } = this.props

      return(  
      
    <Panel>
      <Panel.Heading>{authorsName}  asks:</Panel.Heading>
      <Panel.Body>
          <Grid>
          <Col sm={2}>
          <img
          src={authorsAvatar}
          alt={`Avatar of ${authorsName}`}
          className='avatar'
        />
          </Col>
          <Col sm={9}>
          <h4>Would you rather</h4>
          <div>...{question.optionOne.text.substring(0,15)}...</div>
          <Button onClick={(e) => this.toQuestion(e, question.id)} >View Poll</Button>
          </Col>
       </Grid>
      </Panel.Body>
    </Panel>
      )
    }
  }

//pass in require state objects, then the id prop from the outer container
function mapStateToProps ({authedUser, users, questions}, { id }) {
const question = questions[id]
const author = users[question.author]

return {
  authedUser,
  authorsName : author.name,
  authorsAvatar : author.avatarURL,
  question : question

}
}

  export default withRouter(connect(mapStateToProps)(QuestionViewPollCard)) 