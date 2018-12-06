//应用主界面路由组件
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom';
import {NavBar,Icon} from 'antd-mobile';
import PropTypes from 'prop-types';
import Footer from '../footer'
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Laoban from "../laoban";
import Message from "../message";
import Personal from "../personal";
import './index.less'
class Main extends Component {
    static propTypes = {
        user:PropTypes.object.isRequired,
        getUserInfo:PropTypes.func.isRequired
    }
    //获取当前的路由列表
    navList = [
        {path:'/laoban',title:'大神列表',icon:'laoban',text:'大神'},
        {path:'/dashen',title:'老板列表',icon:'dashen',text:'老板'},
        {path:'/message',title:'消息列表',icon:'message',text:'消息'},
        {path:'/personal',title:'个人中心',icon:'personal',text:'个人'}
    ]


  render () {
      //判断用户是否有登陆行为
      // 1. 判断本地有没有cookie，如果没有，直接去登录页面
      // 2. 如果本地有cookie，redux中没有状态（用户之前登录过，刷新页面），必须将数据请求回来
      // 3. 如果本地有cookie，redux中有状态，直接显示

      // 1. 判断本地有没有cookie，如果没有，直接去登录页面
      const userid =Cookies.get('userid');
      if (!userid){
          return <Redirect to={'/login'}/>
      }
      // 2. 如果本地有cookie，redux中没有状态（用户之前登录过，刷新页面），必须将数据请求回来
      if (!this.props.user._id){
          this.props.getUserInfo();
          //当前状态还未更新不能加载后边的
          //加载的刷新图标Icon
          return <Icon  className="loading" type="loading" size="lg"/>
      }

      //获取当前的路由路径
      const {pathname} =this.props.location;

      //如果用户直接访问
      if (pathname === `/`) {
          return <Redirect to={this.props.user.redirectTo}/>
      }

      //找到与当前路径匹配的对象
      const currNav = this.navList.find(item =>item.path === pathname);
    return (
      <div>
          {currNav ? <NavBar>{currNav.title}</NavBar> : null}
          <Route path="/laobaninfo" component={LaobanInfo}/>
          <Route path="/dasheninfo" component={DashenInfo}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>
          {currNav ? <Footer navList={this.navList}/> : null}
      </div>
    )
  }
}

export default Main;