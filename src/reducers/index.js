import { combineReducers } from 'redux';
import userReducer from './userReducer';
import managementUserReducer from './managementUserReducer';

export default combineReducers({
    user: userReducer,
    users: managementUserReducer
});