import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PC from '../components/pc.js';
import Mobile from '../components/mobile.js';

class APP extends Component {
  render() {
    return (
      <Router>
        <section>
          <MediaQuery query="(min-device-width: 1224px)">
            <PC></PC>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <Mobile></Mobile>
          </MediaQuery>
        </section>
      </Router>
    );
  }
}

ReactDOM.render( <APP / > , document.querySelector('#app'));
