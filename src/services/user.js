import { createHeadersWithToken, axiosConfig } from "./config";

const getAll = async (idToken) => {
    const headersConfig = await createHeadersWithToken(idToken);
    return await axiosConfig.get('/api/v1/users', headersConfig);
}

const getAllAvailableUser = async (idToken) => {
    const headersConfig = createHeadersWithToken(idToken);
    return await axiosConfig.get(`/api/v1/users?userType=3`, headersConfig)
};

const getUser = async (user, idToken) => {
    const headersConfig = createHeadersWithToken(idToken);
    return await axiosConfig.get(`/api/v1/users/${user}`, headersConfig)
};

const changeUserType = async (user, logisticUnit, userType, idToken) => {
    const headersConfig = createHeadersWithToken(idToken);
    const requestObjetc = {
        logisticUnit: logisticUnit,
        userType: userType
    }
    return await axiosConfig.put(`/api/v1/users/${user}`, requestObjetc, headersConfig)
};

const getAssistantsPerLogisticUnit = async (logisticUnit, idToken) => {
    const headersConfig = createHeadersWithToken(idToken);
    console.log(`/api/v1/users/${logisticUnit}/assistants`);
    return await axiosConfig.get(`/api/v1/users/${logisticUnit}/assistants`, headersConfig);
}

const getAssitantTurns = async (logisticUnit, idToken) => {
    const headersConfig = createHeadersWithToken(idToken);
    return await axiosConfig.get(`/api/v1/users/${logisticUnit}/turns`, headersConfig);
}

export {
    getAll,
    getAllAvailableUser,
    getUser,
    changeUserType,
    getAssistantsPerLogisticUnit,
    getAssitantTurns
};
