import React, { Component } from 'react';
import MBHeader from './header/mb_header.js';
import MBFooter from './footer/mb_footer.js';

class Mobile extends Component {
  render() {
    return (
      <div>
        <MBHeader></MBHeader>
        <MBFooter></MBFooter>
      </div>
    );
  }
}

export default Mobile;
