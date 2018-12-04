//用户登陆的路由
import React, {Component} from 'react';
import { NavBar, WingBlank, WhiteSpace,List,InputItem,Button} from 'antd-mobile';
import Logo from '../logo';

class Login extends Component {
    state = {
        username:'',
        password:''
    }
    handleChange =(type,val)=>{
        this.setState({
            [type]:val
        })
    }
    login = ()=>{
        //收集表单数据
        const {username,password}=this.state;
        //发送请求
        console.log(username,password)
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
                 <InputItem onChange={val => this.handleChange('password',val)}>密码</InputItem>
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