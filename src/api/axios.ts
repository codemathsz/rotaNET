import axios from "axios";

/* 
    if api network error, change localhost to your local ip address
    const BASE_URL = 'http://192.168.x.x:3001';
*/
const BASE_URL = 'http://localhost:3001';

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