import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {Navbar , NavItem, Nav} from 'react-bootstrap'

class NavigationBar extends Component {

render() {

const {authedUser} = this.props

  return (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
    <Navbar.Brand>
        <NavLink to='/' exact activeClassName='active'>
                Home
        </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle />
    </Navbar.Header>
    {authedUser != null &&
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
        Hello, {authedUser}
        </NavItem>
        <NavItem eventKey={2} href="/Login">
        Logout
        </NavItem>
    </Nav>

    </Navbar.Collapse>
        }
    </Navbar>


  )
}}

function mapStateToProps ({authedUser}) {
    
  return {
    authedUser : authedUser,

  }
  }


export default connect(mapStateToProps)(NavigationBar);