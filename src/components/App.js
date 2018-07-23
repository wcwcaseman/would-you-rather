import React, { Component } from 'react';
import {Navbar , NavItem, Nav} from 'react-bootstrap'
import '../App.css';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                New Question
              </NavItem>
              <NavItem eventKey={2} href="#">
                Leader Board
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Hello, Person
              </NavItem>
              <NavItem eventKey={2} href="#">
                Logout
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>







        <SignIn/>


      </div>
    );
  }
}

export default App;
