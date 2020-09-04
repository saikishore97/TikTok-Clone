import axios from 'axios';

const instance = axios.create({
    baseURL:"https://tiktok-backend-kssk.herokuapp.com/",
});

export default instance;