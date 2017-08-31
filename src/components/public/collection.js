import React,{Component} from 'react';
import {Icon,message} from 'antd';
import '../../styles/public.less';
import 'whatwg-fetch';

class PublicCollection extends Component {

  addToCollection(){
    if(!sessionStorage.nickUserName || !sessionStorage.userID){
      message.warning('请先登录再进行收藏');
    }else{
      let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=${sessionStorage.userID}&uniquekey=${this.props.uniquekey}`;
      fetch(actionUrl)
        .then((response)=>(response.text()))
        .then((flag)=>{
          if(flag){
            message.success('收藏成功！');
          }
        })
    }
  }

  render(){
    return (
      <section className="add-to-collection" onClick={this.addToCollection.bind(this)}>
        <Icon type="star-o" style={{fontSize:'20px'}} />
      </section>
    );
  }
}

export default PublicCollection;
