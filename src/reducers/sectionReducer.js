import { GET_SECTIONS, GET_ROOMS_WITHOUT_SECTION } from "../util/constants";

const INITIAL_STATE = {
    list: [],
    roomsWithoutSection: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SECTIONS:
            return { ...state, list: action.payload };
        case GET_ROOMS_WITHOUT_SECTION:
            return { ...state, roomsWithoutSection: action.payload };
        default:
            return state;
    }
};