import React, { Component } from 'react';
import 'whatwg-fetch';

import MBHeader from '../header/mb_header.js';
import MBFooter from '../footer/mb_footer.js';

class MBDetails extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    }
  }
  getNewsUniquekey(uniquekey){
    let self = this;
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`;
    fetch(actionUrl)
      .then((response)=>(response.json()))
      .then((json)=>{
        self.setState({data:json});
      });
  }
  componentWillMount() {
    this.getNewsUniquekey(this.props.match.params.uniquekey);
  }
  componentWillReceiveProps(nextProps){
    this.getNewsUniquekey(nextProps.match.params.uniquekey);
  }
  render() {
    return (
      <section>
        <MBHeader />
        <section dangerouslySetInnerHTML={{__html:this.state.data.pagecontent}}></section>
        <MBFooter />
      </section>
    );
  }
}
export default MBDetails;
