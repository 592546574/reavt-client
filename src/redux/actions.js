/*
  作用：包含多个用来创建action的action creators
  类别：
    1. 同步action creator
      返回值是action对象
    2. 异步action creator
      返回值是函数 dispatch => {xxx}
 */


import {reqRegister,reqLogin,reqUpdate} from "../api";
//引入
import {AUTH_SUCCESS,AUTH_ERROR} from "./action-types";
//定义同步action creator
export const authSuccess = data =>({type:AUTH_SUCCESS,data});
export const authError = data =>({type:AUTH_ERROR,data});
//定义异步action creator
export const register = ({username,password,rePassword,type}) =>{
    //表单验证
    if (!username){
        return authError({errMsg:'用户名不能为空'});
    }else if (!password){
        return authError({errMsg:'密码不能为空，请输入密码'});
    }else if (password !== rePassword) {
        return authError({errMsg:'两次密码输入不一致'});
    }
    return dispatch=>{
        //异步任务发送ajax请求
        reqRegister ({username,password,type})
        .then(({data})=>{
            //请求成功
            if (data.code === 0 ) {
                //注册成功更新成功发布成功的action对象
                dispatch(authSuccess(data.data))
            }else {
                //注册失败，更新状态，发布失败的action对象
                dispatch(authError({errMsg:data.msg}))
            }
        })
            .catch(err=>{
                //请求失败
                dispatch(authError({errMsg:'网络不稳定请刷新重试'}))
            })
    }
}

//登陆功能
export const login = ({username,password}) =>{
    console.log(username, password );
   //表单验证
   if (!username)  {
       return authError({errMsg:'请输入用户名'})
   }else if (!password){
       return authError({errMsg:'请输入密码'});
   }
   return dispatch =>{
       //发送请求
       reqLogin({username,password})
           .then(({data})=>{
               if (data.code === 0){
                   //登陆成功
                   dispatch(authSuccess(data.data));
               } else {
                   //登陆失败
                   dispatch(authError({errMsg:data.msg}))
               }
           })
           .catch(err =>{
               dispatch(authError({errMsg:'网络错误请刷新试试'}));
           })
   }
}

//更新用户消息
export const update = ({header,post,company,salary,info,type}) =>{
    //表单验证
    if (!header){
        return authError({errMsg:'请选择头像'})
    } else if (!post){
        return authError({errMsg:type === 'laoban' ? '请填写招聘职位' : '请填写求职岗位'})
    } else if (type === 'laoban' && !company) {
        return authError({errMsg:'请填写公司名称'})
    }else if (type === 'laoban' && !salary){
        return authError({errMsg:'请填写职位薪资'})
    } else if (!info){
        return authError({errMsg:type === 'laoban' ? '请填写职位要求' : '请填写个人简介'})
    }
    return dispatch =>{
        reqUpdate({header,post,company,salary,info})
            .then(({data}) =>{
                if (data.code === 0){
                    //成功
                    dispatch(authSuccess(data.data))
                } else {
                    dispatch(authError({errMsg:data.msg}))
                }
            })
            .catch(err =>{
                dispatch(authError({errMsg:'网络不稳定,请刷新重试'}))
            })
    }
}