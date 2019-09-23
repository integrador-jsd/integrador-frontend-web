import { GET_SECTIONS } from "../util/constants";

const INITIAL_STATE = {
    list: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SECTIONS:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};