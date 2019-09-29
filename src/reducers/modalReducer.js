import { OPEN_LOADING_MODAL, CLOSE_MODAL } from "../util/constants";

const INITIAL_STATE = {
    size: 'mini',
    open: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_LOADING_MODAL:
            return { ...state, size: action.payload['size'], open: action.payload['open'] };
        case CLOSE_MODAL:
            return INITIAL_STATE;
        default:
            return state;
    }
};