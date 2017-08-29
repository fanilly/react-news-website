import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'whatwg-fetch';
import '../../styles/pc.less';

const DEFAULT_PROPS = {
  width: '100%',
  type: 'top',
  count: 10,
  title: 'default title'
}

class PublicList extends Component {

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
    const dataLists = data.length ?
      data.map((item,index)=>(
        <p key={index}>
          <Link to={'/'}>{item.title}</Link><span>{item.date}</span>
        </p>
      )):'not find';

    return (
      <article className="word-lists">
        <h3>{this.props.title}</h3>
        {dataLists}
      </article>
    );
  }

}

PublicList.defaultProps = DEFAULT_PROPS;
export default PublicList;
