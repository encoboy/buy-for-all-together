const logoutFn = ({ isShowToast = true }) => {
  uni.removeStorageSync("accessToken");
  uni.removeStorageSync("selectGoodList");
  uni.removeStorage({
    key: "mytoken",
    success() {
      console.log("清除成功");
      if (isShowToast) {
        uni.showToast({
          title: "成功退出登录",
          icon: "none",
        });
      }
      uni.navigateTo({
        url: "/pages/login/index",
      });
    },
  });
};
export default logoutFn;
