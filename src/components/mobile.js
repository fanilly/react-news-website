import React, { Component } from 'react';
import MBHeader from './header/mb_header.js';
import MBFooter from './footer/mb_footer.js';
import MBMain from './main/mb_main.js';

class Mobile extends Component {
  render() {
    return (
      <div>
        <MBHeader></MBHeader>
        <MBMain></MBMain>
        <MBFooter></MBFooter>
      </div>
    );
  }
}

export default Mobile;
