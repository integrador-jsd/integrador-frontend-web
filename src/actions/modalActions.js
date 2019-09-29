import { OPEN_LOADING_MODAL, CLOSE_MODAL } from '../util/constants';

export const openModal = (modalOptions) => async (dispatch) => {
    dispatch({
        type: OPEN_LOADING_MODAL,
        payload: {
            size: modalOptions.size,
            open: modalOptions.open
        }
    });
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};