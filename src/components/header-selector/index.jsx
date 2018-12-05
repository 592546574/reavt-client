import React, {Component} from 'react';
import {Grid,List} from 'antd-mobile';
//声明接收父组件穿过来的只
import PropTypes from 'prop-types'
class HeaderSelector extends Component {
  static propTypes = {
    setHeader:PropTypes.func.isRequired
  }
  state = {
    header:''
  }
    setHeader = (el,index) =>{
      this.setState({
          //更新自身的状态
          header:el.icon
      })
        //更新父组件传过来的状态
        this.props.setHeader(index);
    }
  render () {
    const {header} = this.state;
    console.log(header)
    const data = Array.from(new Array(20)).map((_val, i) => ({
      icon: require(`./images/头像${i + 1}.png`),
      text: `头像${i + 1}`,
  }));
    return (
            <List  renderHeader={() => {
              return <div>请选择头像 <img src={header} /></div>
            }}>
                <Grid data={data}  columnNum={5} activeStyle={false} onClick={this.setHeader} />
            </List>
    )
  }
}

export default HeaderSelector;