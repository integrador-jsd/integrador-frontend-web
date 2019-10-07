import { getAll, create } from '../services/section';
import { GET_SECTIONS, CREATE_SECTION, GET_ROOMS_WITHOUT_SECTION } from '../util/constants';
import { getAllWithoutSection } from '../services/room';

export const getSections = (idToken, logisticUnit) => async (dispatch) => {
    const response = await getAll(idToken, logisticUnit);
    const sections = response['data'];
    dispatch({
        type: GET_SECTIONS,
        payload: sections
    });
}  

export const getRoomsWithoutSection = (idToken, logisticUnit) => async (dispatch) => {
    const response = await getAllWithoutSection(idToken, logisticUnit);
    const rooms = response['data'];
    dispatch({
        type: GET_ROOMS_WITHOUT_SECTION,
        payload: rooms
    });
}

export const createSection = (idToken, logisticUnit, sectionName) => async (dispatch) => {
    const response = await create(idToken, logisticUnit, sectionName);
    const message = response['data'];
    dispatch({
        type: CREATE_SECTION,
        payload: message
    });
}
