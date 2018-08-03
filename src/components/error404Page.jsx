import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css';
import SignIn from './SignIn';
import { Grid } from 'react-bootstrap'
import Question from './Question'
import NewQuestion from './NewQuestion'
import QuestionsList from './QuestionsList'
import NavigationBar from './NavigationBar'
import LeaderBoard from './LeaderBoard'
import { handleInitialData } from '../actions/shared'
import { Panel } from 'react-bootstrap'

class App extends Component {

  render() {

    return (
        <div>
        <Panel bsStyle="danger">
            <Panel.Heading>404</Panel.Heading>
            <Panel.Body>The page your looking for can't be found</Panel.Body>
        </Panel>

        </div>

    );
  }
}



export default (App)
