import React, { Component } from 'react';
import {Navbar , NavItem, Nav} from 'react-bootstrap'
import '../App.css';
import SignIn from './SignIn';
import QuestionSubmitCard from './QuestionSubmitCard'
import { Panel, Grid, Row, Col,DropdownButton,MenuItem } from 'react-bootstrap'
import QuestionResultsCard from './QuestionResultsCard'
import NewQuestion from './NewQuestion'
import QuestionViewPollCard from './QuestionViewPollCard'
import QuestionScoreCard from './QuestionScoreCard'
import QuestionsList from './QuestionsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/NewQuestion">
                New Question
              </NavItem>
              <NavItem eventKey={2} href="/LeaderBoard">
                Leader Board
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1}>
                Hello, Person
              </NavItem>
              <NavItem eventKey={2} href="/Login">
                Logout
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <SignIn/>
          <QuestionSubmitCard/>
          <QuestionResultsCard/>
          <NewQuestion/>
          <QuestionViewPollCard/>
          <QuestionScoreCard/>
          <QuestionsList/>
        </Grid>


      </div>
    );
  }
}

export default App;
