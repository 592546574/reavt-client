//包含多个用于生成新的state的reducer函数的模块
import {combineReducers} from 'redux';

import {AUTH_SUCCESS,AUTH_ERROR,UPDATE_USER_INFO,RESET_USER_INFO} from "./action-types";


//初始化状态的值
const initUserState ={
   username : '',
    type:'',
    _id:'',
    errMsg:'',
    redirectTo:'',
    header:'',
    post:'',
    company:'',
    salary:'',
    info:''
};
function user(previousState = initUserState,action){
    switch (action.type) {
        case AUTH_SUCCESS:
            // console.log(action.data.type);
            //重定向
            return {...action.data, redirectTo: getRedirectPath(action.data.type,action.data.header)}
        case AUTH_ERROR:
            return {...initUserState,...action.data}
        case UPDATE_USER_INFO:
            return {...action.data,redirectTo:getRedirectPath(action.data.type,action.data.header)}
        case RESET_USER_INFO:
            return{...initUserState,...action.data}
        default:
            return previousState;

    }
}

function getRedirectPath(type,header) {
    let path = '';
    if (type === 'dashen'){
        console.log(type)
        path = 'dashen';
    } else {
        path = 'laoban';
    }
    if (!header){
        path += 'info';

    }
    console.log(path)
    return path;
}
//初始化状态的值
// const initYyyState = 0;
// function yyy(previousState = initYyyState,action){
//     switch (action.type) {
//         default:
//             return previousState
//     }
// }

//默认暴露合并后的reducers函数
export default combineReducers({
    user
})