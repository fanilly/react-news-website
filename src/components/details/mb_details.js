import React, { Component } from 'react';
import 'whatwg-fetch';
import '../../styles/mobile.less';

import MBHeader from '../header/mb_header.js';
import MBFooter from '../footer/mb_footer.js';
import PublicComments from '../public/comments.js';
import PublicCollection from '../public/collection.js';

class MBDetails extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      uniquekey:''
    }
  }

  //获取数据
  getNewsUniquekey(uniquekey){
    let self = this;
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`;
    fetch(actionUrl)
      .then((response)=>(response.json()))
      .then((json)=>{
        self.setState({data:json});
      });
  }

  //组件将要加载
  componentWillMount() {
    this.getNewsUniquekey(this.props.match.params.uniquekey);
    this.setState({uniquekey:this.props.match.params.uniquekey});
  }

  componentWillReceiveProps(nextProps){
    this.getNewsUniquekey(nextProps.match.params.uniquekey);
    this.setState({uniquekey:nextProps.match.params.uniquekey});
  }

  render() {
    return (
      <section className="mbile-details-box">
        <MBHeader />
        <section dangerouslySetInnerHTML={{__html:this.state.data.pagecontent}}></section>
        <PublicComments uniquekey={this.state.uniquekey} />
        <PublicCollection  uniquekey={this.state.uniquekey}/>
        <MBFooter />
      </section>
    );
  }
}

export default MBDetails;
