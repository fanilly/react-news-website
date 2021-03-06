import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import '../../styles/pc.less';

import carousel_img_01 from '../../images/1.jpg';
import carousel_img_02 from '../../images/2.jpg';
import carousel_img_03 from '../../images/3.jpg';
import carousel_img_04 from '../../images/4.jpg';
import carousel_img_05 from '../../images/5.jpg';
import charcode from '../../images/charcode.png';

import PCList from '../list/pc_list.js';
import PCImgLists from '../list/pc_img_lists.js';
import PublicList from '../public/list.js';

class PCMain extends Component {

  componentWillMount(){
    document.title = "React news";
  }

  render(){
    return (
      <main>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <section className="main-page-center">
              <div className="main-left-side">
                <Carousel effect="fade" autoplay className="small-banner">
                  <div><img src={carousel_img_01} alt=""/></div>
                  <div><img src={carousel_img_02} alt=""/></div>
                  <div><img src={carousel_img_03} alt=""/></div>
                  <div><img src={carousel_img_04} alt=""/></div>
                  <div><img src={carousel_img_05} alt=""/></div>
                </Carousel>
                <PCImgLists count={8} type="yule" width='165px' />
              </div>
              <div className="main-center">
                <PCList
                  count={20}
                  type="top"
                  width='100%'
                  title='<i class="self-icon-font iconfont icon-toutiao"></i>热门头条' />
                  <PublicList type="guoji" count={3}/>
              </div>
              <div className="main-right-side">
                <img src={charcode} alt=""/>
                <PCImgLists count={3} type="yule" width='240px' />
              </div>
            </section>
          </Col>
          <Col span={2}></Col>
        </Row>
      </main>
    );
  }
}

export default PCMain;
