import { GET_PENDING_REQUESTS } from "../util/constants";

const INITIAL_STATE = {
    pendingList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PENDING_REQUESTS:
            return { ...state, pendingList: action.payload };
        default:
            return state;
    }
};