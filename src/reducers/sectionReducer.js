import { GET_SECTIONS, GET_ROOMS_WITHOUT_SECTION, SAVE_SELECTED_INDEX, ASSIGN_SPACE, REMOVE_SPACE } from "../util/constants";

const INITIAL_STATE = {
    list: [],
    roomsWithoutSection: [],
    assignedSpace: '',
    selectedIndex: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SECTIONS:
            return { ...state, list: action.payload };
        case GET_ROOMS_WITHOUT_SECTION:
            return { ...state, roomsWithoutSection: action.payload };
        case ASSIGN_SPACE:
            return { ...state, assignedSpace: action.payload };
        case REMOVE_SPACE:
            return { ...state, removedSpace: action.payload };
        case SAVE_SELECTED_INDEX:
            return { ...state, selectedIndex: action.payload };
        default:
            return state;
    }
};