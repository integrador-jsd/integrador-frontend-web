const INITIAL_STATE = {
    isAuth: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN_GOOGLE':
            return { ...state, isAuth: true };
        case 'SIGN_OUT_GOOGLE':
            return { ...state, isAuth: false };
        default:
            return state;
    }
};