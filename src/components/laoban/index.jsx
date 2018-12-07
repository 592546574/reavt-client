import React, {Component} from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types'
class Laoban extends Component {
    static propTypes = {
        userList:PropTypes.array.isRequired,
        getUserList:PropTypes.func.isRequired
    }
    componentDidMount(){
        //防止请求相同数据
        if (!this.props.userList.length){
            this.props.getUserList('dashen')
        }
    }
  render () {
        //过滤获取信息不全的列表
      const userList = this.props.userList.filter(item => item.header)
    return (
     <div>
         <WingBlank size="lg">
             <WhiteSpace size="lg" />
             {
                 userList.map((item,index) => {
                     return(
                         <div key={index}>
                             <Card>
                                 <Card.Header
                                     thumb={require(`../../assets/images/头像${+item.header + 1}.png`)}
                                     extra={<span>{item.username}</span>}
                                 />
                                 <Card.Body>
                                     <div>职位:{item.post}</div>
                                     <div>描述:{item.info}</div>
                                 </Card.Body>
                             </Card>
                             <WhiteSpace size="lg" />
                         </div>
                     )
                 })
             }
         </WingBlank>
     </div>
    )
  }
}

export default Laoban;