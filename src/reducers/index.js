import { combineReducers } from 'redux';
import userReducer from './userReducer';
import managementUserReducer from './managementUserReducer';
import sectionReducer from './sectionReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    user: userReducer,
    users: managementUserReducer,
    section: sectionReducer,
    modal: modalReducer
});