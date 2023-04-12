import axios from 'axios'
import {base_url} from "@/api";
import request from "@/utils/request";

export const getGoodsListRequest = (data) => {
    return request.post(base_url + "gift/goods/list",data)
}