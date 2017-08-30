import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { HashRouter as Router , Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PC from '../components/pc.js';
import Mobile from '../components/mobile.js';
import PCDetails from '../components/details/pc_details.js';

class APP extends Component {
  render() {
    return (
      <Router>
        <section>
          <MediaQuery query="(min-device-width: 1224px)">
            <Route exact path="/" component={PC}></Route>
            <Route exact path="/details/:uniquekey" component={PCDetails}></Route>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <Route exact path="/" component={Mobile}></Route>
          </MediaQuery>
        </section>
      </Router>
    );
  }
}

ReactDOM.render( <APP /> , document.querySelector('#app'));
