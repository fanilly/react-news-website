import React, { Component } from 'react';
import { Tabs } from 'antd';
import MBLists from '../list/mb_lists.js';

const TabPane = Tabs.TabPane;

class MBMain extends Component {
  render(){
    return (
      <section>
        <Tabs defaultActiveKey="1" size="small" animated={false}>
          <TabPane tab="头条" key="1">
            <MBLists count={16} type="top" />
          </TabPane>
          <TabPane tab="娱乐" key="2">
            <MBLists count={16} type="yule" />
          </TabPane>
          <TabPane tab="国际" key="3">
            <MBLists count={16} type="guoji" />
          </TabPane>
          <TabPane tab="体育" key="4">
            <MBLists count={16} type="tiyu" />
          </TabPane>
          <TabPane tab="军事" key="5">
            <MBLists count={16} type="junshi" />
          </TabPane>
          <TabPane tab="科技" key="6">
            <MBLists count={16} type="keji" />
          </TabPane>
          <TabPane tab="社会" key="7">
            <MBLists count={16} type="shehui" />
          </TabPane>
        </Tabs>
      </section>
    );
  }
}

export default MBMain;
