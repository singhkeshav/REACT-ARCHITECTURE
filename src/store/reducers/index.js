import commonReducers  from './commonReducers';
import userReducers  from './userReducers';
import  { combineReducers} from 'redux';

export default combineReducers({
    common: commonReducers,
    user: userReducers
  })