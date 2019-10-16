import { getAll, create } from '../services/section';
import { GET_SECTIONS, CREATE_SECTION, GET_ROOMS_WITHOUT_SECTION, SAVE_SELECTED_INDEX, ASSIGN_SPACE, REMOVE_SPACE } from '../util/constants';
import { getAllWithoutSection, assigned, remove } from '../services/room';

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

export const assignSpace = (idToken, logisticUnit, sectionId, sectionalID, blockID, roomID) => async (dispatch) => {
    const response = await assigned(idToken, logisticUnit, sectionId, sectionalID, blockID, roomID);
    const message = response['data'];
    dispatch({
        type: ASSIGN_SPACE,
        payload: message
    });
}

export const removeSpace = (idToken, logisticUnit, sectionId, roomID) => async (dispatch) => {
    const response = await remove(idToken, logisticUnit, sectionId, roomID);
    const message = response['data'];
    dispatch({
        type: REMOVE_SPACE,
        payload: message
    });
}

export const saveSelectedIndex = (selectedIndex) => {
    return {
        type: SAVE_SELECTED_INDEX,
        payload: selectedIndex
    };
}
