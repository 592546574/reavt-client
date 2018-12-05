//应用主界面路由组件
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import LaobanInfo from '../../containers/laoban-info'
class Main extends Component {
  render () {
    return (
      <div>
          <Route path="/laobaninfo" component={LaobanInfo}/>

      </div>
    )
  }
}

export default Main;