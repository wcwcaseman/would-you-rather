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
      <NavItem>
        <NavLink to='/NewQuestion' exact >
        New Question
        </NavLink>
      </NavItem>
        <NavItem>
          <NavLink to='/LeaderBoard' exact >
          Leader Board
          </NavLink>
        </NavItem>
    </Nav>

    <Nav pullRight>
        <NavItem>
        Hello, {authedUser}
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

function mapStateToProps ({authedUser}) {
    
  return {
    authedUser : authedUser,

  }
  }


export default withRouter(connect(mapStateToProps)(NavigationBar));