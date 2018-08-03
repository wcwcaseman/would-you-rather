import React, { Component } from 'react';
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
