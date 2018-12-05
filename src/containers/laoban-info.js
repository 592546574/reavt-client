import {connect} from 'react-redux';
//组件引入
import LaobanInfo from '../components/laoban-info'

import {update} from '../redux/actions';
export default connect(
    state =>({user:state.user}),
{update}
)(LaobanInfo)
