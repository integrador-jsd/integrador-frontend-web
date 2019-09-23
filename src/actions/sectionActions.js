import { getAll, create } from '../services/section';
import { GET_SECTIONS, CREATE_SECTION } from '../util/constants';

export const getSections = (idToken, logisticUnit) => async (dispatch) => {
    const response = await getAll(idToken, logisticUnit);
    const sections = response['data'];
    dispatch({
        type: GET_SECTIONS,
        payload: sections
    });
}

export const createSection = (idToken, logisticUnit, sectionName) => async (dispatch) => {
    const response = await create(idToken, logisticUnit, sectionName);
    const message = response['data'];
    console.log('Response create section: ', message);
    dispatch({
        type: CREATE_SECTION,
        payload: message
    });
}
