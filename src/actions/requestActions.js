import { GET_PENDING_REQUESTS } from '../util/constants';
import { getAllPending } from '../services/request';

export const getPendingRequests = (idToken, logisticUnit) => async (dispatch) => {
    const response = await getAllPending(idToken, logisticUnit);
    const pendingRequests = response['data'];
    dispatch({
        type: GET_PENDING_REQUESTS,
        payload: pendingRequests
    });
}