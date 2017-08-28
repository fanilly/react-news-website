import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import '../../styles/mobile.less';
import logo from '../../images/logo.png';

class MBHeader extends Component {
  render() {
    return (
      <section className="index-mb-header">
        <header>
          <a href="#">
            <img src={logo} alt=""/>
            <span>React news</span>
          </a>
        </header>
      </section>
    );
  }
}

export default MBHeader;
