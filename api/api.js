import request from "./request.js";

// 登录
export const login = (url, data, loading = true) =>
  request(url, data, loading, "登录中");
// 注册
export const singup = (url, data, loading = true) =>
  request(url, data, loading, "注册中");
// 获奖滚动信息
export const getMoveMsgList = (url, data, loading = true) =>
  request(url, data, loading);
// 商品列表
export const getGoodList = (url, data, loading = true) =>
  request(url, data, loading);
// 加入购物车
export const addGoodToShoppCar = (url, data, loading = true) =>
  request(url, data, loading);
// 购物车列表
export const getGoodToShoppCarList = (url, data, loading = true) =>
  request(url, data, loading);
// 删除购物车商品
export const deleteGoodToShoppCar = (url, data) => request(url, data);
// 商品详情页
export const getGoodOneMsgList = (url, data) => request(url, data);
// 我要充值
export const addUserAccount = (url, data) => request(url, data);
// 新增用户收货地址
export const addUserAddress = (url, data) => request(url, data);
// 收货地址列表
export const getUserAddressList = (url, data) => request(url, data);
// 收货地址详情
export const getUserAddressOne = (url, data) => request(url, data);
// 更新收货地址
export const updateUserAddress = (url, data) => request(url, data);
// 删除收货地址
export const deleteUserAddress = (url, data) => request(url, data);
// 结算
export const getSettlement = (url, data) => request(url, data);
// 用户订单列表
export const getUserOrderList = (url, data, loading = true) =>
  request(url, data, loading);
// 最新揭晓
export const getLatestDisclosureList = (url, data) => request(url, data);
// 用户信息
export const getUserMsg = (url, data) => request(url, data);
// 用户中奖记录
export const getUserPrizeList = (url, data) => request(url, data);
// 获取用户金额(金币)
export const getUserAccountOne = (url, data) => request(url, data);
// 用户修改信息
export const editUser = (url, data) => request(url, data);
