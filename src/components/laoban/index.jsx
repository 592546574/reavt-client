import React, {Component} from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
class Laoban extends Component {
  render () {
    return (
     <div>
         <WingBlank size="lg">
             <WhiteSpace size="lg" />
             <Card>
                 <Card.Header
                     thumb={require(`../../assets/images/头像1.png`)}
                     extra={<span>laoban</span>}
                 />
                 <Card.Body>
                     <div>职位:zzz</div>
                     <div>薪资:zzz</div>
                     <div>公司:zzz</div>
                     <div>描述:zzz</div>
                 </Card.Body>
             </Card>
             <WhiteSpace size="lg" />
         </WingBlank>
     </div>
    )
  }
}

export default Laoban;