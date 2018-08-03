import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Navbar , NavItem, Nav} from 'react-bootstrap'
import { setAuthedUser } from '../actions/authedUser'

class NavigationBar extends Component {

  handleLogOut = (e) => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
    this.props.history.push(`/`)
  }

render() {

const {authedUser, userName} = this.props

  return (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
    <Navbar.Brand>
        <NavLink to='/' exact>
                Home
        </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle />
    </Navbar.Header>
    {authedUser != null &&
    <Navbar.Collapse>

    <Nav>
      <li>
        <NavLink  to='/add' exact >
        New Question
        </NavLink>
      </li>
        <li>
          <NavLink  to='/leaderboard' exact >
          Leader Board
          </NavLink>
        </li>
    </Nav>

    <Nav pullRight>
        <NavItem>
        Hello, {userName}
        </NavItem>
        <NavItem onClick={this.handleLogOut}>
        Logout
        </NavItem>
    </Nav>

    </Navbar.Collapse>
        }
    </Navbar>


  )
}}

function mapStateToProps ({users,authedUser}) {

  let userName = '' ;

  if(users !== null && authedUser !== null){
    userName = users[authedUser].name ;
  }

  return {
    authedUser : authedUser,
    userName : userName

  }
  }


export default withRouter(connect(mapStateToProps)(NavigationBar));