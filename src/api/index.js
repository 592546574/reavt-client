//定义所有请求函数
import ajax from './ajax';
//接口前缀
const prefix = '';
//定义注册的请求
export const reqRegister = data =>ajax(`${prefix}/register`,data,`POST`)
//定义登陆的请求
export const reqLogin = data => ajax(`${prefix}/login`,data,`POST`)
//定义更新用户消息的请求
export const reqUpdate = data =>ajax(`${prefix}/update`,data,`POST`)
//定义获取用户消息的请求
export const reqGetUserInfo = () =>ajax(`${prefix}/user`)
