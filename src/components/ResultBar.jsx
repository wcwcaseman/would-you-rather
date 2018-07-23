import React, { Component } from 'react';
import { ProgressBar, Panel, Button,Radio, FormGroup, Grid, Row, Col,DropdownButton,MenuItem } from 'react-bootstrap'



class ResultBar extends Component {

    render() {
        const now = 60;
      return(  
        <Panel bsStyle="success">
            <div>Would you rather Insert Anser here?</div>
            <ProgressBar now={now} label={`${now}%`} />
            <div>1 out of 3 votes</div>
        </Panel>

      )
    }
  }

  export default ResultBar;