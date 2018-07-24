import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Tab, Nav, NavItem,Navbar, Panel, Button,Radio, FormGroup, Grid, Row, Col,DropdownButton,MenuItem } from 'react-bootstrap'
import ResultBar from './ResultBar'
import QuestionViewPollCard from './QuestionViewPollCard'


class QuestionsList extends Component{

    render(){
               
    return (
    <div>
      <Panel>
      <Tab.Container id="left-tabs-example" defaultActiveKey="UnansweredQuestions">
        <Row className="clearfix">
          <Col sm={12}>
          <Navbar>
            <Nav bsStyle="pills">
              <NavItem eventKey="UnansweredQuestions">Unanswered Questions</NavItem>
              <NavItem eventKey="AnsweredQuestions">Answered Questions</NavItem>
            </Nav>
            </Navbar>
          </Col>
          <Col sm={12}>

            <Tab.Content animation>            
              <Tab.Pane eventKey="UnansweredQuestions">
              <ul>
                  UnansweredQuestions
                {this.props.questionIds.map((id) => (
                <li key={id}>
                    <QuestionViewPollCard id={id}/>
                 </li>
                ))}
              </ul>


              </Tab.Pane>
              <Tab.Pane eventKey="AnsweredQuestions">
              <ul>
                  AnsweredQuestions
                {this.props.questionIds.map((id) => (
                  <li key={id}>
                      <QuestionViewPollCard id={id}/>
                  </li>
                ))}
              </ul>

              </Tab.Pane>
            </Tab.Content>

          </Col>
        </Row>
      </Tab.Container>
      </Panel>
    </div>
    )
  }
}

//takes in questions state and returns question ids sorted by timestamp?
function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
      AnsweredQuestionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
      UnansweredQuestionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}





export default connect(mapStateToProps)(QuestionsList)