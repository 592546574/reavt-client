import React, {Component} from 'react';
import { List,Result,Button,WhiteSpace,Modal} from 'antd-mobile';
import Cookie from 'js-cookie'
const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;
class Personal extends Component {
    logout =() =>{
            alert('退出登陆', '确定要退出登陆吗', [
                { text: '取消', onPress: () => {}},
                { text: '确认', onPress: () => {
                  //清除cookie
                        Cookie.remove('userid');
                        //清除redux管理数据
                        //跳转到登陆页面
                        this.props.history.replace('/login')
                    }}
            ])
    }
  render () {
    return (
        <div>
            <Result
                img={ <img src={require(`../../assets/images/头像1.png`)} alt=""/>}
                title="lalalala"
            />

            <List renderHeader={() => '相关信息'}>
                <Item
                    multipleLine
                    onClick={() => {}}
                >
                    <Brief>职位:aaa</Brief>
                    <Brief>简介:aaa</Brief>
                </Item>
            </List>
            <WhiteSpace />
            <Button
                type="warning"
                onClick={this.logout}
            >
                退出登陆
            </Button>

        </div>
    )
  }
}

export default Personal;