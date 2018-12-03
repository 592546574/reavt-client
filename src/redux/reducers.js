//包含多个用于生成新的state的reducer函数的模块
import {combineReducers} from 'redux';

//初始化状态的值
const initXxxState = 0;
function xxx(previousState = initXxxState,action){
    switch (action.type) {
        default:
            return previousState;
    }
}

//初始化状态的值
const initYyyState = 0;
function yyy(previousState = initYyyState,action){
    switch (action.type) {
        default:
            return previousState
    }
}

//默认暴露合并后的reducers函数
export default combineReducers({
    xxx,
    yyy
})