
//// BASE DA URL: https://api.themoviedb.org/3/
//// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=d987c45cba451322f3651b20baad8832

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;