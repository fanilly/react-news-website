import React, { Component } from 'react';
import {Row, Col, Menu, Icon} from 'antd';
import '../../styles/pc.less';
import logo from '../../images/logo.png';

const MenuItem = Menu.Item;
const Submenu = Menu.Submenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends Component {

  constructor(){
    super();
    this.state = {
      current:'top'
    }
  }

  navClick(e){
    this.setState({
      current:e.key
    })
  }

  render() {
    return (
      <header className="index-pc-header">
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/"  className="logo">
              <img src={logo} alt=""/>
              <span>React news</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu onClick={this.navClick.bind(this)} mode="horizontal" selectedKeys={[this.state.current]}>
              <MenuItem key="top">
                <Icon type="appstore" />头条
              </MenuItem>
              <MenuItem key="yule">
                <Icon type="eye-o" />娱乐
              </MenuItem>
              <MenuItem key="guoji">
                <Icon type="eye-o" />国际
              </MenuItem>
              <MenuItem key="guonei">
                <Icon type="eye-o" />国内
              </MenuItem>
              <MenuItem key="tiyu">
                <Icon type="eye-o" />体育
              </MenuItem>
              <MenuItem key="shishang">
                <Icon type="eye-o" />时尚
              </MenuItem>
              <MenuItem key="keji">
                <Icon type="eye-o" />科技
              </MenuItem>
              <MenuItem key="shehui">
                <Icon type="eye-o" />社会
              </MenuItem>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  }
}

export default PCHeader;
