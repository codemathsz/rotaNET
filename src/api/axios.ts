import axios from "axios";

const BASE_URL = 'http://192.168.18.8:3001';

export const axiosInstace = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Content-Type': 'application/json'
    }
})

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

axiosInstace.interceptors.response.use(async (response) => {
    await delay(500);
    return response;
}, (error) => {
    return Promise.reject(error);
});