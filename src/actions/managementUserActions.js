import { getAssistantsPerLogisticUnit, getAllAvailableUser } from '../services/user';
import { changeUserType } from '../services/user';
import { GET_ALL_USERS, CHANGE_USER_TYPE } from '../util/constants';

export const getAllUsers = (idToken, logisticUnit) => async (dispatch) => {
    let response = await getAssistantsPerLogisticUnit(logisticUnit, idToken);
    const myUsers = response['data'];
    response = await getAllAvailableUser(idToken);
    const availableUsers = response['data'];
    dispatch({ type: GET_ALL_USERS, payload: [...myUsers, ...availableUsers] });
}

export const changeType = (user, logisticUnit, newUserType, idToken) => async (dispatch, getState) => {
    const response = await changeUserType(user, logisticUnit, newUserType, idToken);
    dispatch({ type: CHANGE_USER_TYPE, payload: response['data']['message'] });
    dispatch(getAllUsers(idToken, logisticUnit));
}