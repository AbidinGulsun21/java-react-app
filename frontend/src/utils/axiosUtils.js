import axios from 'axios';
import { parse, stringify } from 'qs'

const userKey = "access_token";
export const GET = "get";
export const POST = "post";
export const PUT = "put";
export const DELETE = "delete";
export const PATCH = "patch";



export const axiosObj = axios.create({
    paramsSerializer: {
        encode: parse,
        serialize: stringify,
    },
})




export async function callAPI({ method, url, headers, params, data, responseType }) {
    const access_token = localStorage.getItem(userKey);
    try {
        const res = await axiosObj({
            method,
            url: `${process.env.REACT_APP_API_URL}/${url}`,
            headers: { ...headers, Authorization: `Bearer ${access_token}`, timezone: new Date().getTimezoneOffset() },
            params,
            data,
            responseType: responseType ? responseType : null,
        });

        return res;
    } catch (e) {
        console.log(e?.response?.data?.errorMessage);
        if (e?.response?.status !== 403) {

        }
        throw e;
    }
}



//const userItem = localStorage.getItem(userKey);

//export const axiosData = { user: userItem ? JSON.parse(userItem) : null };

// axiosObj.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     if (error?.response?.status === 403) {
//         if (localStorage.getItem(userKey)) {
//             localStorage.removeItem(userKey);
//             axiosData.user = null;
//             history.push('/auth/login');
//         }
//     }
//     return Promise.reject(error);
// });
