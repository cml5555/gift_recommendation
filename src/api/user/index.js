import axios from 'axios'
import {base_url} from "@/api";

export const loginRequest = (data) => {
    return axios.post(base_url + "gift/login/login",data)
}

export const getVerifyCodeRequest = (data) => {
    return axios.post(base_url + "gift/login/send-email", {
        "email": data,
    })
}

export const registerRequest = (data) => {
    return axios.post(base_url + "gift/login/register",data)
}


