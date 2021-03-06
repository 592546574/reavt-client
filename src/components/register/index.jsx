//用户注册的路由组件
import React, {Component} from 'react';
//引入按钮组件 WingBlank两翼留白WhiteSpace空白符空白格
import {NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button} from 'antd-mobile';
//引入logo
import Logo from '../logo';

const Item = List.Item;

class Register extends Component {
    state = {
        laoban: true,
        username: '',
        password: '',
        rePassword: ''
    }
    // handleRedio = type =>{
    //   //得到单选框是大神还是老板
    //     if (type === `laoban`){
    //       this.setState({
    //           isBossChecked:true,
    //
    //       })
    //     }else {
    //       this.setState({
    //           isBossChecked:false
    //       })
    //     }
    //
    //
    //}
    handleChange = (type, val) => {
        this.setState({
            [type]: val
        })
    }
    goLogin = ()=>{
        //去登录页面, 将地址切换为login
        //会产生浏览历史记录
        // this.props.history.push('/login');
        //不会产生浏览历史记录
        this.props.history.replace('./login')
    }
    register =()=>{
        //收集表单数据
        const {laoban,username,password,rePassword}=this.state;
        //发送
        console.log(laoban,username,password,rePassword)
    }
render() {
const {laoban} = this.state
return (
    <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
            <List>
                <InputItem onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
                <WhiteSpace/>
                <InputItem onChange={val => this.handleChange('password', val)}>密码：</InputItem>
                <WhiteSpace/>
                <InputItem onChange={val => this.handleChange('rePassword', val)}>确认密码：</InputItem>
                <WhiteSpace/>
                <Item>
                    用户类型：
                    <Radio checked={!laoban} onChange={this.handleChange.bind(null, 'laoban', false)}>大神</Radio>&nbsp;&nbsp;&nbsp;
                    <Radio checked={laoban} onChange={this.handleChange.bind(null, 'laoban', true)}>老板</Radio>
                </Item>
                <WhiteSpace/>
                {/*primary颜色*/}
                <Button type="primary" onClick={this.register}>注册</Button>
                <WhiteSpace/>
                <Button onClick={this.goLogin}>已有账户</Button>
                <WhiteSpace/>
            </List>
        </WingBlank>
    </div>
)
}
}

export default Register;