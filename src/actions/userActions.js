import { verifyToken } from '../services/login';
import { openModal, closeModal } from '../actions/modalActions';
import { SIGN_IN_GOOGLE, SIGN_OUT_GOOGLE, VERIFY_AUTH, GET_TURNS } from '../util/constants';
import { getAssitantTurns } from '../services/user';

export const signInGoogle = (username, idToken) => async (dispatch) => {
    dispatch(openModal({ size: 'mini', open: true }));
    const response = await verifyToken(idToken);
    const userType = response['data']['data']['userType'];
    const email = response['data']['data']['email'];
    setLocalStorageItems([{ name: 'isAuth', data: true }, { name: 'username', data: username }, { name: 'email', data: email }, { name: 'idToken', data: idToken }, { name: 'userType', data: userType }]);
    dispatch(closeModal());
    dispatch({
        type: SIGN_IN_GOOGLE,
        payload: {
            username: username,
            email: email,
            idToken: idToken,
            userType: userType
        }
    });
}

export const signOutGoogle = () => {
    localStorage.clear();
    return {
        type: SIGN_OUT_GOOGLE
    };
};

export const verifyAuth = () => {
    const localStorageItems = getLocalStorageItems(['isAuth', 'username', 'email', 'idToken', 'userType']);
    return {
        type: VERIFY_AUTH,
        payload: {
            isAuth: Boolean(localStorageItems[0]),
            username: localStorageItems[1],
            email: localStorageItems[2],
            idToken: localStorageItems[3],
            userType: Number(localStorageItems[4])
        }
    }
}

export const getTurns = (username, idToken) => async (dispatch) => {
    const response = await getAssitantTurns(username, idToken);
    const turns = response.data;
    dispatch({
        type: GET_TURNS,
        payload: turns
    });
}

const getLocalStorageItems = (itemNames) => {
    const items = itemNames.map(item => {
        return localStorage.getItem(item);
    });
    return items;
}

const setLocalStorageItems = (items) => {
    items.forEach(item => {
        return localStorage.setItem(item.name, item.data);
    });
}