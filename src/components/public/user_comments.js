import React,{Component} from 'react';
import {Icon,Card} from 'antd';
import {Link} from 'react-router-dom';
import 'whatwg-fetch';
import '../../styles/public.less';
class PublicUserComments extends Component {

  constructor(){
    super();
    this.state = {
      data:''
    }
  }

  componentDidMount(){
    let self = this;;
    let userid = sessionStorage.userID;
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=${userid}`;
    fetch(actionUrl)
      .then((response)=>(response.json()))
      .then((json)=>{
        self.setState({data:json});
      });
  }

  render(){

    const {data} = this.state;
    const dataList = data.length ?
      data.map((item,index)=>(
        <Card
          key={index}
          className="comments-lists"
          title={'于 '+item.datetime+' 评论了文章'+item.uniquekey}
          extra={<Link to={`/details/${item.uniquekey}`}>查看详情</Link>}
          style={{ width: '100%' }}>
          <p>{item.Comments}</p>
        </Card>
      )):'还没有任何评论';

    return(
      <section className='user-comments'>
        <h2><Icon type="sound" style={{fontSize:'16px',paddingRight:'6px'}} />我的评论</h2>
        <section>
          {dataList}
        </section>
      </section>
    );
  }

}
export default PublicUserComments;
