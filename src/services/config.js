import axios from 'axios';
import { ROOT_URL } from '../util/constants';

const axiosConfig = axios.create({
    baseURL: ROOT_URL,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
});

const axiosConfigMocky = axios.create({
    baseURL: 'http://www.mocky.io',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
});

const createHeadersWithToken = (idToken) => {
    const headersConfig = {
        headers: {
            'idToken': idToken
        }
    }
    return headersConfig;
};

export {
    axiosConfig,
    axiosConfigMocky,
    createHeadersWithToken
};