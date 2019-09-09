import { axiosConfigMocky } from "./config";

const getUser = async (name) => {
    return await axiosConfigMocky.put('/v2/5d5b92ef320000600062891e', {})
};

export {
    getUser
};