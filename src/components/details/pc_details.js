import React,{Component} from 'react';
import {Row,Col} from 'antd';
import 'whatwg-fetch';

import PCHeader from '../header/pc_header.js';
import PCFooter from '../footer/pc_footer.js';

class PCDetails extends Component {

  constructor(){
    super();
    this.state = {
      data:''
    }
  }

  componentDidMount(){
    let self = this;
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.match.params.uniquekey}`;
    fetch(actionUrl)
      .then((response)=>(response.json()))
      .then((json)=>{
        self.setState({data:json})
      });
  }

  createDetailsContent(){
    return{__html:this.state.data.pagecontent}
  }

  render(){
    return(
      <section>
        <PCHeader />
        <Row>
          <Col span={2}></Col>
          <Col span={14}>
            <div dangerouslySetInnerHTML={this.createDetailsContent()}></div>
          </Col>
          <Col span={6}></Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter />
      </section>
    );
  }
}

export default PCDetails;
