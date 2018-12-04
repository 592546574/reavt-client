//定义所有请求函数
import ajax from './ajax';
//接口前缀
const prefix = '';
//定义注册的请求
export const reqRegister = data =>ajax(`${prefix}/register`,data,`POST`)