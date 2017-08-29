import React, { Component } from 'react';
import PCHeader from './header/pc_header.js';
import PCFooter from './footer/pc_footer.js';
import PCMain from './main/pc_main.js';

class PC extends Component {
  render() {
    return (
      <div>
        <PCHeader></PCHeader>
        <PCMain></PCMain>
        <PCFooter></PCFooter>
      </div>
    );
  }
}

export default PC;
