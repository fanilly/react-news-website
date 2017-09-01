import React, { Component } from 'react';
import { Row, Col, BackTop, Icon } from 'antd';
import 'whatwg-fetch';
import '../../styles/pc.less';

import PCImgLists from '../list/pc_img_lists.js';
import PCHeader from '../header/pc_header.js';
import PCFooter from '../footer/pc_footer.js';
import PublicComments from '../public/comments.js';
import PublicCollection from '../public/collection.js';

class PCDetails extends Component {

  constructor() {
    super();
    this.state = {
      data: '',
      uniquekey:''
    }
  }

  getNewsUniquekey(uniquekey) {
    let self = this;
    this.setState({
      uniquekey:uniquekey
    })
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`;
    fetch(actionUrl)
      .then((response) => (response.json()))
      .then((json) => {
        self.setState({ data: json })
        document.title = json.title + '-React news';
      });
  }

  componentDidMount() {
    this.getNewsUniquekey(this.props.match.params.uniquekey);
  }

  componentWillReceiveProps(nextProps) {
    this.getNewsUniquekey(nextProps.match.params.uniquekey);
  }

  createDetailsContent() {
    return { __html: this.state.data.pagecontent }
  }

  render(){
    return(
      <section>
        <PCHeader />
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <section className="pc-details">
              <section className="pc-details-content">
                <div dangerouslySetInnerHTML={this.createDetailsContent()}></div>
                <PublicComments uniquekey={this.state.uniquekey} />
              </section>
              <section className="pc-details-rside">
                <h3 className="details-hot-title"><Icon type="heart-o" />猜你喜欢</h3>
                <PCImgLists count={22} type="yule" width='200px' />
              </section>
            </section>
          </Col>
          <Col span={2}>
            <BackTop>
              <div className="ant-back-top-inner">UP</div>
            </BackTop>
            <PublicCollection uniquekey={this.state.uniquekey}/>
          </Col>
        </Row>
        <PCFooter />
      </section>
    );
  }

}

export default PCDetails;
