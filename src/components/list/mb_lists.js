import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import ReactPullLoad,{ STATS } from 'react-pullload'
import 'whatwg-fetch';
import '../../styles/mobile.less';
//15617732758
//中原区桐柏路于洛河路交叉口科技大厦9楼咨询中心

class MBLists extends Component {

  constructor() {
    super();
    this.state = {
      data: ''
    }
  }

  componentWillMount() {
    this.getNewsList(this.props.count);
  }

  getNewsList(count){
    let self = this;
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${count}`;
    fetch(actionUrl)
      .then((response) => (response.json()))
      .then((json) => {
        self.setState({ data: json });
      });
  }

  render() {
    const {data} = this.state;
    const dataList = data.length ?
      data.map((item,index)=>(
        <section key={index} className="mobile-lists-item">
          <Link to={`/details/${item.uniquekey}`} className="mobile-lists-img">
            <img src={item.thumbnail_pic_s} alt=""/>
          </Link>
          <section>
            <h3>
              <Link to={`/details/${item.uniquekey}`}>{item.title}</Link>
            </h3>
            <Tag>{item.realtype}</Tag>
            <span className="author-name">{item.author_name}</span>
            <span>{item.date}</span>
          </section>
        </section>
      )):<section className="login-icon"></section>;
    return (
      <section className="mobile-lists">
        {dataList}
      </section>
    );
  }

}

export default MBLists;
