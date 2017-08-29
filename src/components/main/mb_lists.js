import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import 'whatwg-fetch';
import '../../styles/mobile.less';

class MBLists extends Component {

  constructor() {
    super();
    this.state = {
      data: ''
    }
  }

  componentWillMount() {
    let self = this;
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`;
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
          <Link to={'/'} className="mobile-lists-img">
            <img src={item.thumbnail_pic_s} alt=""/>
          </Link>
          <section>
            <h3>
              <Link to={'/'}>{item.title}</Link>
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
