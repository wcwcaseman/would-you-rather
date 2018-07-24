import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css';
import SignIn from './SignIn';
import QuestionSubmitCard from './QuestionSubmitCard'
import { Panel, Grid, Row, Col,DropdownButton,MenuItem } from 'react-bootstrap'
import Question from './Question'
import NewQuestion from './NewQuestion'
import QuestionViewPollCard from './QuestionViewPollCard'
import QuestionsList from './QuestionsList'
import NavigationBar from './NavigationBar'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Router>
          <Fragment>         
              <NavigationBar />
                  <Grid>
                    <Route path='/' exact component={QuestionsList} />
                    <Route path='/NewQuestion' component={NewQuestion} />
                    <Route path='/Login' component={SignIn} />
                    <Route path='/LeaderBoard' component={LeaderBoard} />
                    <Route path='/questions/:question_id' component={Question} />
                  </Grid>
          </Fragment>
        </Router>
          
      </div>
    );
  }
}

export default App;
