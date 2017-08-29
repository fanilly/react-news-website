import React, { Component } from 'react';
import { Row, Col } from 'antd';

class MBFooter extends Component {
  render(){
    return (
      <footer className="index-mb-footer">
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="copyright-txt">
            &copy;CopyRight&nbsp;2017 ReactNews, All Rights Reserved
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    );
  }
}

export default MBFooter;
