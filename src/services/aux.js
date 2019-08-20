import { axiosConfig } from "./axios-config";

const getUser = async (name) => {
    return await axiosConfig.put('/', {})
};

export {
    getUser
};