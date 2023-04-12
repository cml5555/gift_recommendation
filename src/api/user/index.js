import axios from 'axios'
import {base_url} from "@/api";
import request from "@/utils/request";

export const loginRequest = (data) => {
    return request.post(base_url + "gift/login/login",data)
}

export const getVerifyCodeRequest = (data) => {
    return request.post(base_url + "gift/login/send-email", {
        "email": data,
    })
}

export const registerRequest = (data) => {
    return request.post(base_url + "gift/login/register",data)
}


