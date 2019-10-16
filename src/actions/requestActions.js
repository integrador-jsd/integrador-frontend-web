import { GET_PENDING_REQUESTS, CHANGE_REQUEST_STATE } from '../util/constants';
import { getAllPending, changeState } from '../services/request';

export const getPendingRequests = (idToken, logisticUnit) => async (dispatch) => {
    const response = await getAllPending(idToken, logisticUnit);
    const pendingRequests = response['data'];
    dispatch({
        type: GET_PENDING_REQUESTS,
        payload: pendingRequests
    });
}

export const changeRequestState = (idToken, requestId, stateId) => async (dispatch) => {
    const response = await changeState(idToken, requestId, stateId);
    const message = response['data'];
    dispatch({
        type: CHANGE_REQUEST_STATE,
        payload: message
    });
}