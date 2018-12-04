//包含多个用于生成新的state的reducer函数的模块
import {combineReducers} from 'redux';

import {AUTH_SUCCESS,AUTH_ERROR} from "./action-types";

//初始化状态的值
const initUserState ={
   username : '',
    type:'',
    _id:'',
    errMsg:'',
    redirectTo:''
};
function user(previousState = initUserState,action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...action.data,redirectTo: getRedirectPath(action.data.type,action.data.headers)}
        case AUTH_ERROR:
            return {...initUserState,...action.data}
        default:
            return previousState;
    }
}

function getRedirectPath(type,header) {
    let path = '';
    if (type === 'laoban'){
        path = '/laoban';
    } else {
        path = '/dashen';
    }
    if (!header){
        path += 'info';
    }
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