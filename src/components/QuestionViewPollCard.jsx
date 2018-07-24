import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel, Button,Radio, FormGroup, Grid, Row, Col,DropdownButton,MenuItem } from 'react-bootstrap'
import ResultBar from './ResultBar'
import { Link, withRouter } from 'react-router-dom'

class QuestionViewPollCard extends Component {
    render() {
      const { question, authorsName } = this.props

      return(  
      
    <Panel>
      <Panel.Heading>{authorsName}  asks:</Panel.Heading>
      <Panel.Body>
          <Grid>
          <Col sm={2}>
            <image></image>
          </Col>
          <Col sm={9}>
          <h4>Would you rather</h4>
          <div>...first question first set of characters...</div>
          <Button>View Poll</Button>
          </Col>
       </Grid>
      </Panel.Body>
    </Panel>
      )
    }
  }


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


//pass in require state objects, then the id prop from the outer container
function mapStateToProps ({authedUser, users, questions}, { id }) {

  //tweet could be null if we go to a url with an id that doesn't exist
const question = questions[id]
const authorsName = users[question.author].name
//pass the twwet the authed user so we know who is liking the tweet and the tweet info for display
//formatTweet pass in the tweet, user who made the tweet, current user and parent tweet
return {
  authedUser,
  question: question,
  authorsName : authorsName
}
}


  export default withRouter(connect(mapStateToProps)(QuestionViewPollCard)) 