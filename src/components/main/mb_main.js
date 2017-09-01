import React, { Component } from 'react';
import { Tabs } from 'antd';
import MBLists from '../list/mb_lists.js';

const TabPane = Tabs.TabPane;

class MBMain extends Component {

  componentWillMount(){
    document.title = "React news";
  }

  render(){
    return (
      <section>
        <Tabs defaultActiveKey="top" size="small" animated={false}>
          <TabPane tab="头条" key="top">
            <MBLists count={16} type="top" />
          </TabPane>
          <TabPane tab="娱乐" key="yule">
            <MBLists count={16} type="yule" />
          </TabPane>
          <TabPane tab="国际" key="guoji">
            <MBLists count={16} type="guoji" />
          </TabPane>
          <TabPane tab="体育" key="tiyu">
            <MBLists count={16} type="tiyu" />
          </TabPane>
          <TabPane tab="军事" key="junshi">
            <MBLists count={16} type="junshi" />
          </TabPane>
          <TabPane tab="科技" key="keji">
            <MBLists count={16} type="keji" />
          </TabPane>
          <TabPane tab="社会" key="shehui">
            <MBLists count={16} type="shehui" />
          </TabPane>
        </Tabs>
      </section>
    );
  }
}

export default MBMain;
