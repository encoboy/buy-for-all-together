import logoutFn from "@/common/logout.js";
export const baseUrl = "http://8.134.197.246:8848";
const request = (
  url = "",
  data = {},
  hideLoding = true,
  showLoadingTitle = "加载中",
  type = "POST",
  header = {
    "content-type": "application/x-www-form-urlencoded",
  }
) => {
  // 登录后，每个接口都加上token
  if (uni.getStorageSync("accessToken")) {
    data = {
      ...data,
      authorization: uni.getStorageSync("accessToken"),
    };
  }
  return new Promise((resolve, reject) => {
    if (hideLoding) {
      uni.showLoading({
        title: showLoadingTitle,
      });
    }
    uni
      .request({
        method: type,
        url: baseUrl + url,
        data: data,
        header: header,
        dataType: "json",
      })
      .then((response) => {
        let { data, statusCode } = response;
        const errorCodeArr = [4001, 4002, 4003, 4004, 4005]; // 去首页
        if (statusCode == 200) {
          if (data && errorCodeArr.includes(data.code)) {
            uni.showToast({
              title: data.data,
              icon: "error",
            });
            uni.navigateTo({
              url: "/pages/login/index",
            });
            logoutFn({
              isShowToast: false,
            });
            return;
          }
          if (hideLoding) {
            setTimeout(() => {
              uni.hideLoading();
            }, 1000);
          }
          resolve(data);
        }
      })
      .catch((error) => {
        setTimeout(() => {
          uni.hideLoading();
        }, 1000);
        reject(error);
      });
  });
};
export default request;
