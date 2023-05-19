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

let globalToast = null;

export function setGlobalToast(ref) {
    globalToast = ref;
}

export function getGlobalToast() {
    return globalToast;
}

export async function callAPI({ method, url, headers, params, data, responseType, setApiProgress }) {
    const access_token = localStorage.getItem(userKey);
    if (setApiProgress) {
        setApiProgress(true);
    }
    try {
        const res = await axiosObj({
            method,
            url: `${process.env.REACT_APP_API_URL}/${url}`,
            headers: { ...headers, Authorization: `Bearer ${access_token}`, timezone: new Date().getTimezoneOffset() },
            params,
            data,
            responseType: responseType ? responseType : null,
        });

        if (setApiProgress) {
            setApiProgress(false);
        }
        return res;
    } catch (e) {

        if (e?.response?.status !== 403) {
            if (setApiProgress) {
                setApiProgress(false);
            }
            // getGlobalToast().show({ severity: 'error', summary: 'Hata', detail: <p>{e.response?.data?.message}</p>, life: 6000 });
            if (e.response.data.errors?.length) {
                getGlobalToast().show({
                    severity: 'error', summary: 'Hata', detail:
                        <p>
                            {e.response.data.errors.map(val => <>{(val.field === 'password' ? '' : val?.field.charAt(0).toUpperCase() + val?.field.slice(1).toLowerCase()) + " " + val.defaultMessage}<br /></>)}
                        </p>,
                    life: 6000
                });
            } else if (e?.response?.data?.error) {
                getGlobalToast().show({ severity: 'error', summary: 'Hata', detail: <p>{<>{e.response.data.message}<br /></>}</p>, life: 6000 });
            }
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
