import axios from 'axios';
import { Alert } from 'react-native';

const BASE_URL_ROUTE = "http://private-5815fe-recommendationsknip.apiary-mock.com"

const API = axios.create({
    baseURL: BASE_URL_ROUTE
})

const responseInterceptorID = API.interceptors.response.use(
    response => handleSuccessResponse(response),
    error => handleErrorResponse(error),
);

const handleSuccessResponse = response => {
    return response;
};

const handleErrorResponse = error => {
    console.log('api.js - handleErrorResponse\n');
    console.log(error);

    // if (error.message === 'Network Error') {
    //     let customError = {
    //         title: 'Network Error',
    //         status: 0,
    //         message: 'Check your internet connection',
    //         completed: false,
    //     };
    //     Alert.alert(customError.title, customError.message);
    //     return Promise.reject(customError);
    // }
    // not error;

    const { status, errors } = error.response.data;
    console.log('Status code:', status);
    console.log('Error:', errors);

    let customError = null;

    switch (status) {
        case 400:
            customError = {
                title: 'Bad request',
                status: 400,
                message: errors,
                completed: false,
            };
            break;
        case 404:
            customError = {
                title: 'Not found',
                status: 404,
                message: 'Resource does not exist',
                completed: false,
            };
            break;
        case 500:
            customError = {
                title: 'Server error',
                status: 500,
                message: errors,
                completed: false,
            };
            Alert.alert(customError.title, customError.message);
        default:
            customError = error;
            break;
    }

    if (error.response.status == 500) {
        customError = {
            title: 'Server error',
            status: 500,
            message: { error: 'Server error' },
            completed: false,
        };
    }
    return Promise.reject(customError);
};

export default API;