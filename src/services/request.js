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

export {
    getAllPending,
    get,
    create
};
