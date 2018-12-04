//用来定义发送ajax模块
import axios from 'axios';
export default async function(url,data,method = 'GET') {
    //请求参数
    let qs = '';
    //处理请求参数
    if (data){
        const arr = Object.keys(data);
        //遍历qs数组$拼&接字符串
        arr.forEach(key=>{
            qs += `${key}=${data[key]}&`;
        })
        //去掉最后一个多余的&
        qs = qs.substring(0,qs.length - 1)
    }
    //判断请求方式
    //转换大小写
    const  type = method.toUpperCase()
    if (type === 'GET') {
        //发送请求
        //const result = await axios.get(url + `?` + qs);
        //将请求成功的数据发送回去
        //return result.data;
        return axios.get(url + '?' + qs);
    }else if (type === 'POST'){
      // const result = await axios.post(url,qs,{
        return axios.post(url, qs, {
           'content-type': 'application/x-www-form-urlencoded'
        });
       //将请求成功的数据发送回去
        //return result.data;
    }
}