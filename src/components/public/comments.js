import React, { Component } from 'react';
import { Form , Input , Button , Icon , Card , message } from 'antd';
import 'whatwg-fetch';

const { TextArea } = Input;
const FormItem = Form.Item;

import '../../styles/public.less'

class PublicComments extends Component {

  constructor(){
    super();
    this.state = {
      data:'',
      uniquekey:''
    }
  }

  componentWillMount(){
    if(this.props.uniquekey){
      this.getcommentedMessage(this.props.uniquekey);
      this.setState({uniquekey:this.props.uniquekey});
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.uniquekey){
      this.getcommentedMessage(nextProps.uniquekey);
    }
  }

  //提交评论
  handleSubmit(e){
    e.preventDefault();
    let self = this;
    let formDatas = this.props.form.getFieldsValue().commentContent;
    if(!sessionStorage.nickUserName || !sessionStorage.userID){
      message.warning('请先登录再发表评论');
    }else if(!formDatas){
      message.warning('评论内容不能为空');
    }else{
      let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=${sessionStorage.userID}&uniquekey=${this.state.uniquekey}&commnet=${formDatas}`;
      fetch(actionUrl)
        .then((response)=>(response.text()))
        .then((flag)=>{
          if(flag){
            message.success('评论成功！');
            self.getcommentedMessage(self.state.uniquekey);
            self.props.form.resetFields();
          }
        })
    }
  }

  //获取历史评论
  getcommentedMessage(uniquekey){
    let self = this;
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${uniquekey}`;
    fetch(actionUrl)
      .then((response)=>(response.json()))
      .then((json)=>{
        let data = json.reverse();
        self.setState({data:data});
      });
  }

  render() {

    const {getFieldDecorator} = this.props.form;
    const {data} = this.state;

    let commentsList = data.length ? data.slice(0,10).map((item,index)=>(
      <Card
        key={index}
        className="comment-list-item"
        noHovering={true}
        title={item.UserName=='undefined' ? '用户名: 匿名' : '用户名: '+item.UserName}
        extra={<span>{'发表于:'+item.datetime}</span>}
        style={{ width: '100%' }}>
        <p>{item.Comments == null ? '评论内容：null' : '评论内容：'+item.Comments}</p>
      </Card>
    )):'暂时还没有评论';

    return (
      <section className="comments">
        <h3 className="title"><Icon type="sound" />评论：</h3>
        <Form onSubmit={this.handleSubmit.bind(this)} className="comment-input">
          <FormItem>
            {getFieldDecorator('commentContent', {
              rules: [{ required: true, message: 'Please write some comments!' }],
            })(
              <TextArea rows={4} autosize={{ minRows: 4, maxRows: 10 }} placeholder=" Please comments" />
            )}
          </FormItem>
          <Button type="primary" htmlType="submit" className="submit-comments">
            comment
          </Button>
        </Form>
        <section className="comment-list">
          {commentsList}
        </section>
      </section>
    );
  }
}

export default Form.create()(PublicComments);
