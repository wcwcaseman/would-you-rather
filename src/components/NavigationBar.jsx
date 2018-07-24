import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar , NavItem, Nav} from 'react-bootstrap'

export default function NavigationBar () {
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


  )
}