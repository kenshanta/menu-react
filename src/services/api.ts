import axios, { AxiosInstance } from 'axios';
// import { responseHandler } from '../utils/api/handle-response';
// import { errorHandler } from '../utils/api/handle-error';
// import { uiState } from '../stores';


const Axioms: AxiosInstance = axios.create({
  baseURL: 'http://localhost:1337/products',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
  withCredentials: false,
});


// Add a request interceptor
Axioms.interceptors.request.use(
  function (config) {
    // uiState.setIsLoading(true);
    // Do something before request is sent
    const d = new Date();
    config.headers.common['user-timestamp'] = d.getTime();
    return config;
  },
  function (error) {
    // Do something with request error
    // uiState.setIsLoading(false);
    console.log(error.response.status, '---');
    return Promise.reject(error);
  }
);

// Add a response interceptor
// Axioms.interceptors.response.use(responseHandler, errorHandler);

export default Axioms;
