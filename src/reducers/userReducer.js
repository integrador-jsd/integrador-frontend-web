const INITIAL_STATE = {
    isAuth: false,
    username: '',
    email: '',
    idToken: '',
    userType: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN_GOOGLE':
            return { ...state, isAuth: true, username: action.payload.username, email: action.payload.email, idToken: action.payload.idToken, userType: action.payload.userType };
        case 'SIGN_OUT_GOOGLE':
            return INITIAL_STATE;
        case 'VERIFY_AUTH':
            return { ...state, isAuth: action.payload.isAuth, username: action.payload.username, email: action.payload.email, idToken: action.payload.idToken, userType: action.payload.userType };
        default:
            return state;
    }
};