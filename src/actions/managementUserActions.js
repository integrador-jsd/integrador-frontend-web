import { getAll } from '../services/user';
import { changeUserType } from '../services/user';
import { GET_ALL_USERS, CHANGE_USER_TYPE } from '../util/constants';

export const getAllUsers = (idToken) => async (dispatch) => {
    const response = await getAll(idToken);
    const users = response['data'];
    dispatch({ type: GET_ALL_USERS, payload: users });
}

export const changeType = (user, logisticUnit, newUserType, idToken) => async (dispatch, getState) => {
    const response = await changeUserType(user, logisticUnit, newUserType, idToken);
    dispatch({ type: CHANGE_USER_TYPE, payload: response['data']['message'] });
    dispatch(getAllUsers(idToken));
}