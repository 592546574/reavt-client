import React, {Component} from 'react';
import { List,Result,Button,WhiteSpace} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component {
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
            <Button type="warning">退出登陆</Button>
        </div>
    )
  }
}

export default Personal;