import {connect} from 'react-redux';
//组件引入
import DashenInfo from '../components/dashen-info'

import {update} from '../redux/actions';

export default connect(
    state =>({user:state.user}),
{update}
)(DashenInfo)
