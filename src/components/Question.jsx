import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { ProgressBar, Panel, Button,Radio, FormGroup, Grid, Row, Col,DropdownButton,MenuItem } from 'react-bootstrap'
import QuestionSubmitCard from './QuestionSubmitCard'
import QuestionResultsCard from './QuestionResultsCard'

class Question extends Component {

    render() {
      return(  
        <div>
            <QuestionSubmitCard/>
            <QuestionResultsCard/>
        </div>

      )
    }
  }

  export default connect()(Question);
