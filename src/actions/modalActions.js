import { OPEN_LOADING_MODAL, CLOSE_MODAL } from '../util/constants';

export const openLoadingModal = () => async (dispatch) => {
    dispatch({
        type: OPEN_LOADING_MODAL,
        payload: {
            size: 'mini',
            open: true,
            closeOnEscape: true,
            closeOnDimmerClick: false
        }
    });
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};