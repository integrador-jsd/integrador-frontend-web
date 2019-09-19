import { GET_SECTIONS } from "../util/constants";

const INITIAL_STATE = {
    sections: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SECTIONS:
            return { ...state, sections: action.payload };
        default:
            return state;
    }
};