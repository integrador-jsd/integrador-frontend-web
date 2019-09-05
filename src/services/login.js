import axios from 'axios';

const login = (idToken) => axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'idToken': idToken
    }
}).post('/login', {});

export {
    login
};