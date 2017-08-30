import React, { Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import 'whatwg-fetch';
import '../../styles/pc.less';

class PCImgLists extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    }
  }

  componentWillMount() {
    let self = this;
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`;
    fetch(actionUrl).then(function(response) {
      return response.json()
    }).then(function(json) {
      self.setState({ data: json });
    });
  }

  render() {
    const {data} = this.state;
    const dataList = data.length ?
      data.map((item,index)=>(
        <li key={index}>
          <Card style={{ width: this.props.width }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <Link to={`details/${item.uniquekey}`}>
                <img alt="example" width="100%" src={item.thumbnail_pic_s} />
              </Link>
            </div>
            <div className="custom-card">
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
          </Card>
        </li>
      )):'not find';
    return (
      <ul className="img-lists">
        {dataList}
      </ul>
    );
  }

}

export default PCImgLists;
