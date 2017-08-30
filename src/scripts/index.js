import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { HashRouter as Router , Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PC from '../components/pc.js';
import Mobile from '../components/mobile.js';
import PCDetails from '../components/details/pc_details.js';
import MBDetails from '../components/details/mb_details.js';

class APP extends Component {
  render() {
    return (
      <Router>
        <section>
          <MediaQuery query="(min-device-width: 1224px)">
            <Route exact path="/" component={PC}></Route>
            <Route path="/details/:uniquekey" component={PCDetails}></Route>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <Route exact path="/" component={Mobile}></Route>
            <Route path="/details/:uniquekey" component={MBDetails}></Route>
          </MediaQuery>
        </section>
      </Router>
    );
  }
}

ReactDOM.render( <APP /> , document.querySelector('#app'));
