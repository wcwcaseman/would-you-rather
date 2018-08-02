import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css';
import SignIn from './SignIn';
//import QuestionSubmitCard from './QuestionSubmitCard'
import { Grid } from 'react-bootstrap'
import Question from './Question'
import NewQuestion from './NewQuestion'
import QuestionsList from './QuestionsList'
import NavigationBar from './NavigationBar'
import LeaderBoard from './LeaderBoard'
import { handleInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
    //connect() gives us access to dispatch
    //to be able to use dispatch we must add middleware
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (


      <Router>
          <Fragment>         
              <NavigationBar />

              <Grid>        
                  {this.props.loggedIn === true ? <SignIn/> :
                <Fragment>
                    <Route path='/' exact component={QuestionsList} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/LeaderBoard' component={LeaderBoard} />
                    <Route path='/questions/:question_id' component={Question} />
                </Fragment>
                  }
                </Grid>
          </Fragment>
        </Router>
          

    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
