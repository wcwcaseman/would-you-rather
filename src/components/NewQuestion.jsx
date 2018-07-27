import React, { Component } from 'react';
import { handleAddQuestion } from '../actions/questions'
import { connect } from 'react-redux'
import { Panel, Button, FormControl } from 'react-bootstrap'

class NewQuestion extends Component {

    //we use component state instead of the store as it is easier and redux wouldnt give us any benefits(Not using this state anywhere else in app no need to pass it)
    state = {
      optionOneText: '',
      optionTwoText: '',
    }

    handleOptionOneChange = (e) => {
      const optionOneText = e.target.value
  
      this.setState(() => ({
        optionOneText
      }))
    }

    handleOptionTwoChange = (e) => {
      const optionTwoText = e.target.value
  
      this.setState(() => ({
        optionTwoText
      }))
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
  
      const { optionOneText, optionTwoText } = this.state
      const { dispatch } = this.props
  
      //Add question to Store
      dispatch(handleAddQuestion(optionOneText,optionTwoText))
  
      this.setState(() => ({
        optionOneText: '',
        optionTwoText: ''
      }))
    }


    render() {
      const { optionOneText, optionTwoText } = this.state

      return(  
      
    <Panel>
      <Panel.Heading>Create New Question</Panel.Heading>
      <Panel.Body>
        <div>Complete the question:</div>
        <strong>Would you rather ...</strong>
        <form  onSubmit={this.handleSubmit} >
        <FormControl
            id="formControlsText"
            type="text"
            placeholder="Enter Option One Text Here"
            value={optionOneText}
            onChange={this.handleOptionOneChange}
            />
        <div>OR</div>
        <FormControl
            id="formControlsText"
            type="text"
            placeholder="Enter Option Two Text Here"
            value={optionTwoText}
            onChange={this.handleOptionTwoChange}
            />
        <Button type="submit">Submit</Button>
        </form>
      </Panel.Body>
    </Panel>
      )
    }
  }

  export default connect()(NewQuestion);