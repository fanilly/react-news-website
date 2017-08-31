import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import 'whatwg-fetch';

import {Row,Col,Menu,Icon} from 'antd';
const SubMenu = Menu.SubMenu;

import '../../styles/pc.less';
import PCHeader from '../header/pc_header.js';
import PCFooter from '../footer/pc_footer.js';
import PublicUserCollection from '../public/user_collection.js';
import PublicUserComments from '../public/user_comments.js';

class PCUserCenter extends Component {

  constructor(){
    super();
    this.state = {
      mode: 'inline'
    }
  }

  componentWillMount(){

  }

  render(){
    return(
      <section>
        <PCHeader/>
        <Row>
          <Col span={2}></Col>
          <Col span={5}>
            <Menu
              defaultSelectedKeys={[location.hash.split('\/').pop()]}
              mode={this.state.mode}>
              <Menu.Item key="collection">
                <Link to={'/usercenter/collection'}>
                  <Icon type="star-o" style={{fontSize:'14px'}} />我的收藏
                </Link>
              </Menu.Item>
              <Menu.Item key="comments">
                <Link to={'/usercenter/comments'}>
                  <Icon type="sound" style={{fontSize:'14px'}} />我的评论
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={15} className="collection-comments">
            <Route path="/usercenter/collection" component={PublicUserCollection}></Route>
            <Route path="/usercenter/comments" component={PublicUserComments}></Route>
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter/>
      </section>
    );
  }

}

export default PCUserCenter;
