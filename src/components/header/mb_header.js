import React, { Component } from 'react';
import {
  Row,
  Col,
  Menu,
  Icon,
  Button,
  Modal,
  Tabs,
  Form,
  Input,
  Checkbox,
  message
} from 'antd';
import 'whatwg-fetch';

const MenuItem = Menu.Item;
const Submenu = Menu.Submenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

import '../../styles/mobile.less';
import logo from '../../images/logo.png';

class MBHeader extends Component {

  constructor() {
    super();
    this.state = {
      hasLogined: false,
      userNickName: '',
      visible: false
    }
  }

  componentWillMount(){
    if(sessionStorage.nickUserName && sessionStorage.userID){
      this.setState({
        hasLogined:true,
        userNickName:sessionStorage.nickUserName
      });
    }
  }

  //提交登录表单的回调
  handleLoginSubmit(e) {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${formData.loginUserName}&password=${formData.loginPassword}`;
    let self = this;
    fetch(actionUrl).then(function(response) {
      return response.json()
    }).then(function(json) {
      if (json) {
        message.success('Reminder: Your login success');
        self.setState({
          hasLogined: true,
          userNickName: json.NickUserName,
          visible: false
        });
        sessionStorage.userID = json.UserName;
        sessionStorage.nickUserName = json.NickUserName;
      } else {
        message.error('Warning: Your username or password error');
      }
    });
  }

  //提交注册表单的回调
  handleRegisterSubmit(e) {
    e.preventDefault();
    const formData = this.props.form.getFieldsValue();
    let actionUrl = `http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=${formData.registerUserName}&r_password=${formData.registerPassword}&r_confirm=${formData.registerConfirmPassword}`;
    fetch(actionUrl).then(function(response) {
      return response.text()
    }).then(function(flag) {
      if (flag) {
        message.success('Reminder: Your register success');
      } else {
        message.error('Warning: Your register failed');
      }
    });
  }

  //点击登录按钮 弹出模态框
  loginIn() {
    this.setState({ visible: true });
  }

  //隐藏模态框
  hideModal() {
    this.setState({ visible: false });
  }

  render() {
    const userShow = this.state.hasLogined ?
      <span to={'/'} className="loginStateIcon">
        <Icon type="solution" />
      </span>:
      <span className="loginStateIcon" onClick={this.loginIn.bind(this)}>
        <Icon type="login" />
      </span>;

    const { getFieldDecorator } = this.props.form;

    return (
      <section className="index-mb-header">
        <header>
          {/*模态框部分*/}
          <Modal visible={this.state.visible} onCancel={this.hideModal.bind(this)} footer="">
            <Tabs defaultActiveKey="1">
              <TabPane tab="login" key="1">
                {/*login in*/}
                <Form onSubmit={this.handleLoginSubmit.bind(this)} className="login-form">
                  <FormItem>
                    {
                      getFieldDecorator('loginUserName', {
                        rules: [
                          {required: true, message: 'Please input your username!' },
                          {max:16,message:'The content you entered is too long'}
                        ]
                      })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />)
                    }
                  </FormItem>
                  <FormItem>
                    {
                      getFieldDecorator('loginPassword', {
                        rules: [{ required: true, message: 'Please input your Password!' }]
                      })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />)
                    }
                  </FormItem>
                  <FormItem>
                    {
                      getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(<Checkbox>Remember me</Checkbox>)
                    }
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane tab="register" key="2">
                {/*register*/}
                <Form onSubmit={this.handleRegisterSubmit.bind(this)} className="login-form">
                  <FormItem>
                    {
                      getFieldDecorator('registerUserName', {
                        rules: [
                          { required: true, message: 'Please input your username!' }
                        ]
                      })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />)
                    }
                  </FormItem>
                  <FormItem>
                    {
                      getFieldDecorator('registerPassword', {
                        rules: [
                          { required: true, message: 'Please input your Password!' }
                        ]
                      })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />)
                    }
                  </FormItem>
                  <FormItem>
                    {
                      getFieldDecorator('registerConfirmPassword', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                      })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Confirm Password" />)
                    }
                  </FormItem>
                  <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      register
                    </Button>
                  </FormItem>
                </Form>
              </TabPane>
            </Tabs>
          </Modal>
          <img src={logo} alt=""/>
          <span>React news</span>
          {userShow}
        </header>
      </section>
    );
  }
}

export default Form.create()(MBHeader);
