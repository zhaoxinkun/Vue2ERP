// 这里用来管理所有的请求方式

import axios from "@/utils/request"

const http = {
    // get请求
    get: (url, params) => axios.get(url, {params}),
    // post请求
    post: (url, params) => axios.post(url, params)

}

export default http
