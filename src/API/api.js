import axios from 'axios';

export const getService = (options) => {
    try {
        return axios(options);
    } catch (e) {
        return e.response;
    }
}