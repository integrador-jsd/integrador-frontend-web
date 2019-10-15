import { createHeadersWithToken, axiosConfig } from "./config";

const getAll = async (idToken, logisticUnit, sectionID) => {
    const headersConfig = await createHeadersWithToken(idToken);
    return await axiosConfig.get(`/api/v1/users/${logisticUnit}/sections/${sectionID}/rooms`, headersConfig);
}

const getAllWithoutSection = async (idToken, logisticUnit) => {
    const headersConfig = await createHeadersWithToken(idToken);
    return await axiosConfig.get(`/api/v1/users/${logisticUnit}/sections?supervised=false`, headersConfig);
}

// const create = async (idToken, username, sectionName) => {
//     const headersConfig = await createHeadersWithToken(idToken);
//     const requestObject = {
//         logisticUnit: username,
//         name: sectionName
//     }
//     return await axiosConfig.post(`/api/v1/users/DRAI/sections/1/rooms`, requestObject, headersConfig);
// }

export {
    getAll,
    getAllWithoutSection
};
