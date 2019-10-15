import { GET_SECTIONS, GET_ROOMS_WITHOUT_SECTION, SAVE_SELECTED_INDEX } from "../util/constants";

const INITIAL_STATE = {
    list: [],
    roomsWithoutSection: [],
    selectedIndex: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SECTIONS:
            return { ...state, list: action.payload };
        case GET_ROOMS_WITHOUT_SECTION:
            return { ...state, roomsWithoutSection: action.payload };
        case SAVE_SELECTED_INDEX:
            return { ...state, selectedIndex: action.payload };
        default:
            return state;
    }
};