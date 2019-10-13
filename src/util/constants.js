export const SIGN_IN_GOOGLE = 'SIGN_IN_GOOGLE';
export const SIGN_OUT_GOOGLE = 'SIGN_OUT_GOOGLE';
export const VERIFY_AUTH = 'VERIFY_AUTH';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const CHANGE_USER_TYPE = 'CHANGE_USER_TYPE';

export const GET_SECTIONS = 'GET_SECTIONS';
export const CREATE_SECTION = 'CREATE_SECTION';
export const GET_ROOMS_WITHOUT_SECTION = 'GET_ROOMS_WITHOUT_SECTION';

export const GET_PENDING_REQUESTS = 'GET_PENDING_REQUESTS';

export const OPEN_LOADING_MODAL = 'OPEN_LOADING_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const ADMINISTRATOR = 1;
export const ASSISTANT = 2;
export const USER = 3;
export const SYSTEM_ADMIN = 4;

export const CLASSROOM = 1;
export const AUDITORIUM = 2;
export const LABORATORY = 3;

export const MAIN_CAMPUS = 1;

export const HOST_NAME = window.location.hostname;
export let ROOT_URL;
export let IS_PRODUCTION;

if (HOST_NAME === 'localhost') {
    IS_PRODUCTION = false;
    ROOT_URL = 'https://integrador-jsd-backend-dev.herokuapp.com';
} else {
    IS_PRODUCTION = true;
    ROOT_URL = 'https://integrador-jsd-backend-dev.herokuapp.com';
}
