import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, DropdownButton, MenuItem, Button, Row } from 'react-bootstrap'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'


class SignIn extends Component {

  state = {
    userSelected: '',
    userSelectedDisplay: ''
  }

  handleSelectionChange = (e) => {
    const userSelected = e.id
    const userSelectedDisplay = e.name

    this.setState(() => ({
      userSelected
    }))
    this.setState(() => ({
      userSelectedDisplay
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { userSelected } = this.state

    dispatch(setAuthedUser(userSelected))
    this.props.history.push(`/`)
  }


  render() {

    const {userSelectList} = this.props;

    return (
      
        <Panel >
          <Panel.Heading>
            <h4>Welcome to the Would You Rather App!</h4>
            <div>Please sign in to continue</div>
          </Panel.Heading>
          <Panel.Body>
          <div>sign in </div>
          <form onSubmit={this.handleSubmit}>
          <DropdownButton id="userDropdown" title={this.state.userSelectedDisplay} onSelect={this.handleSelectionChange} >
                {userSelectList.map((user) => (
                  <MenuItem key={user.id} eventKey={user}>{user.name}</MenuItem>
                ))}
          </DropdownButton>  
          <Row>
          <Button type="submit" disabled={!this.state.userSelected} >Submit</Button>
          </Row>
          </form>
          </Panel.Body>
        </Panel>
     
    )
  }
}

function mapStateToProps ({ authedUser, users}) {
    
  let userSelectList = [];
  if(Object.keys(users).length !== 0){
    userSelectList = Object.values(users);
  }

return {
  authedUser,
  users: users,
  userSelectList : userSelectList
}
}

export default withRouter(connect(mapStateToProps)(SignIn));