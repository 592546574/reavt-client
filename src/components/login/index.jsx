//用户登陆的路由
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { NavBar, WingBlank, WhiteSpace,List,InputItem,Button} from 'antd-mobile';
import Logo from '../logo';

class Login extends Component {
    static propTypes ={
        user:PropTypes.object.isRequired,
        login:PropTypes.func.isRequired
    }
    state = {
        username:'',
        password:''
    }
    handleChange =(type,value)=>{
        //更新状态
        this.setState({
            [type]:value
        })
    }
    login = async()=>{
        //收集表单数据
        const {password,username}=this.state;
        //调用容器组件传递的更新状态的方法
        this.props.login({password,username})
    }
    toRegister = ()=>{
        //去登录页面, 将地址切换为login
        //会产生浏览历史记录
        // this.props.history.push('/login');
        //不会产生浏览历史记录
        this.props.history.replace('./register')
    }
  render () {

    return (
     <div>
       <NavBar>硅谷直聘</NavBar>
       <Logo/>
         <WingBlank>
             <List>
                <InputItem onChange={val =>this.handleChange('username',val)}>用户名</InputItem>
                 <WhiteSpace/>
                 <InputItem onChange={val => this.handleChange('password',val)} type="password">密码</InputItem>
                 <WhiteSpace/>
                 <Button type="primary" onClick={this.main}>登陆</Button>
                 <Button onClick={this.toRegister}>还没有账户</Button>
             </List>
         </WingBlank>
     </div>
    )
  }
}

export default Login;