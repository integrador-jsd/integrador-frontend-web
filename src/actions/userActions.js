import { verifyToken } from '../services/login';

export const signInGoogle = (idToken) => async (dispatch) => {
    const response = await verifyToken(idToken);
    const userType = response['data']['data']['userType'];
    dispatch({ type: 'SIGN_IN_GOOGLE', payload: userType });
}

export const signOutGoogle = () => {
    return {
        type: 'SIGN_OUT_GOOGLE'
    };
};