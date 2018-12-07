import React, {Component} from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
class Message extends Component {
    goChat = (id) =>{
        this.props.history.push(`/chat/${id}`)

    }
  render () {
    return (
        <List className="my-list">
            <Item
                  thumb={require(`../../assets/images/头像1.png`)}
                  multipleLine
                  arrow="horizontal"
                  onClick={this.goChat.bind(null,123)}
            >
                熬夜不好 <Brief>subtitle</Brief>
            </Item>
        </List>
    )
  }
}

export default Message;