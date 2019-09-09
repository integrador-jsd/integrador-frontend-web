import { axiosConfig, createHeadersWithToken } from './config';

const verifyToken = async (idToken) => {
    const headersConfig = createHeadersWithToken(idToken);
    return await axiosConfig.post('/login', {}, headersConfig);
};

export {
    verifyToken
};