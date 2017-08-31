import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';
import 'whatwg-fetch';
import '../../styles/public.less';

class PublicUserCollection extends Component {
  constructor(){
    super();
    this.state = {
      data:''
    }
  }

  componentDidMount(){
    let self = this;
    let userid = sessionStorage.userID;
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=${userid}`;
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
        <section key={index}>
          <h5>
            <Link to={`/details/${item.uniquekey}`}>{item.Title}</Link>
          </h5>
          <span>收藏于:{new Date(parseInt(item.Id.Timestamp)*1000).toLocaleString().replace(/:\d{1,2}$/,' ')}</span>
        </section>
      )):'还没有任何收藏';

    return(
      <section className="collection-lists">
        <h2><Icon type="star-o" style={{fontSize:'16px',paddingRight:'6px'}} />我的收藏</h2>
        <section>
          {dataList}
        </section>
      </section>
    );
  }
}
export default PublicUserCollection;
