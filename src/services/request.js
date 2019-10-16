import { createHeadersWithToken, axiosConfig } from "./config";

const getAllPending = async (idToken, logisticUnit) => {
    const headersConfig = await createHeadersWithToken(idToken);
    return await axiosConfig.get(`/api/v1/requests/user/${logisticUnit}?pending=true`, headersConfig);
}

const get = async (idToken, logisticUnit, sectionId) => {
    const headersConfig = await createHeadersWithToken(idToken);
    return await axiosConfig.get(`/api/v1/users/${logisticUnit}/sections/${sectionId}`, headersConfig);
}

const create = async (idToken, logisticUnit, sectionName) => {
    const headersConfig = await createHeadersWithToken(idToken);
    const requestObject = {
        logisticUnit: logisticUnit,
        name: sectionName
    }
    return await axiosConfig.post(`/api/v1/users/${logisticUnit}/sections`, requestObject, headersConfig);
}

const changeState = async (idToken, requestId, stateId) => {
    const headersConfig = await createHeadersWithToken(idToken);
    const requestObject = {
        stateID: stateId
    }
    return await axiosConfig.put(`/api/v1/requests/${requestId}`, requestObject, headersConfig);
}

export {
    getAllPending,
    get,
    create,
    changeState
};
