import { GET_PENDING_REQUESTS, CHANGE_REQUEST_STATE } from "../util/constants";

const INITIAL_STATE = {
    pendingList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PENDING_REQUESTS:
            return { ...state, pendingList: action.payload };
        case CHANGE_REQUEST_STATE:
            return { ...state, chengedState: action.payload };
        default:
            return state;
    }
};