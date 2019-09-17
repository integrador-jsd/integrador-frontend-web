import { GET_ALL_USERS, CHANGE_USER_TYPE } from '../util/constants';

const INITIAL_STATE = {
    list: [],
    message: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return { ...state, list: action.payload };
        case CHANGE_USER_TYPE:
            return { ...state, message: action.payload };
        default:
            return state;
    }
}