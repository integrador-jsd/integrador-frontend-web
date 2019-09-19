import { createHeadersWithToken, axiosConfig } from "./config";

const getAll = async (idToken, logisticUnit) => {
    const headersConfig = await createHeadersWithToken(idToken);
    return await axiosConfig.get(`/api/v1/users/${logisticUnit}/sections`, headersConfig);
}

const create = async (idToken, username, sectionName) => {
    const headersConfig = await createHeadersWithToken(idToken);
    const requestObject = {
        logisticUnit: username,
        name: sectionName
    }
    return await axiosConfig.post(`/api/v1/users/${username}/sections`, requestObject, headersConfig);
}

export {
    getAll,
    create
};
