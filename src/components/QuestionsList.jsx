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
        
            UnansweredQuestions
            <QuestionViewPollCard/>
        </Tab.Pane>
        <Tab.Pane eventKey="AnsweredQuestions">
        
            AnsweredQuestions
            <QuestionViewPollCard/>
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

export default connect()(QuestionsList)