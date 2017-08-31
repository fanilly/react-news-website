import React, { Component } from 'react';
import { Tabs , Icon } from 'antd';
import MBHeader from '../header/mb_header.js';
import MBFooter from '../footer/mb_footer.js';
import PublicUserCollection from '../public/user_collection.js';
import PublicUserComments from '../public/user_comments.js';
import '../../styles/mobile.less';

const TabPane = Tabs.TabPane;

class MBUserCneter extends Component {
  render(){
    return (
      <section>
        <MBHeader/>
        <Tabs defaultActiveKey="collection" size="small" animated={false}>
          <TabPane tab={<span><Icon type="star-o" />我的收藏</span>} key="collection"  className="mb-user-center">
            <PublicUserCollection/>
          </TabPane>
          <TabPane tab={<span><Icon type="sound" />我的评论</span>} key="comments"  className="mb-user-center">
            <PublicUserComments/>
          </TabPane>
        </Tabs>
        <MBFooter/>
      </section>
    );
  }
}

export default MBUserCneter;
