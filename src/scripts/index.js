import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { HashRouter as Router , Route} from 'react-router-dom';
import MediaQuery from 'react-responsive';

import PC from '../components/pc.js';
import Mobile from '../components/mobile.js';
import PCDetails from '../components/details/pc_details.js';
import MBDetails from '../components/details/mb_details.js';
import PCUserCenter from '../components/user/pc_user_center.js';
import MBUserCneter from '../components/user/mb_user_center.js';

class APP extends Component {
  render() {
    return (
      <Router>
        <section>
          <MediaQuery query="(min-device-width: 1224px)">
            <Route exact path="/" component={PC}></Route>
            <Route path="/usercenter" component={PCUserCenter}></Route>
            <Route path="/details/:uniquekey" component={PCDetails}></Route>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <Route exact path="/" component={Mobile}></Route>
            <Route exact path="/usercenter" component={MBUserCneter}></Route>
            <Route path="/details/:uniquekey" component={MBDetails}></Route>
          </MediaQuery>
        </section>
      </Router>
    );
  }
}

ReactDOM.render( <APP /> , document.querySelector('#app'));
