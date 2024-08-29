// 这里书写所有的请求

import http from ".";

// 登录接口
export const login = data => http.post(`user/login`, data)

// 用户退出接口
export const logout = token => http.post(`user/logout`, token)

// 地图数据 用户分布信息
export const employMap = () => http.get(`user/employ-map`)

// 查询所有员工
export const userEmployee = () => http.get(`user/employee`)

// 提交申请
export const officeCreate = data => http.post(`apply/office/createOrUpd`, data)

// 申请管理  --办公申请 --数据查询
export const officeList = data => http.get(`apply/office/list`,data)
