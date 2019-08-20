import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://www.mocky.io/v2/5d5b92ef320000600062891e',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
});

export {
    axiosConfig
};