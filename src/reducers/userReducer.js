const INITIAL_STATE = {
    isAuth: false,
    userType: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN_GOOGLE':
            return { ...state, isAuth: true, userType: action.payload };
        case 'SIGN_OUT_GOOGLE':
            return { ...state, isAuth: false };
        default:
            return state;
    }
};