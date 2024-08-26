<template>
  <form @submit="formSubmit">
    <view class="uni-form-item">
      <view class="title">登录账号</view>
      <input class="uni-input" name="phone" placeholder="账号登录" />
    </view>
    <view class="uni-form-item">
      <view class="title">登录密码</view>
      <input
        class="uni-input"
        name="password"
        password
        placeholder="请输入密码"
      />
    </view>
    <view class="uni-btn-v">
      <button type="warn" plain="true" form-type="submit">登录</button>
    </view>
    <view class="sing-up-box">
      <text @click="goSingup">马上注册</text>
      <text>忘记密码？</text>
    </view>
  </form>
</template>

<script>
import graceChecker from "../../common/graceCheck.js";
import { login } from "@/api/api.js";
export default {
  data() {
    return {
      cannotBack: true,
    };
  },
  methods: {
    formSubmit: function (e) {
      var formdata = e.detail.value;
      //定义表单规则
      let rule = [
        {
          name: "phone",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写账号",
        },
        {
          name: "password",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写密码",
        },
      ];
      let checkRes = graceChecker.check(formdata, rule);
      if (!checkRes) {
        uni.showToast({
          title: graceChecker.error,
          icon: "none",
        });
        return;
      }
      login("/user/login", formdata)
        .then((res) => {
          let { code, data, flag, message } = res;
          if (code == 4022 && !flag) {
            uni.showToast({
              title: data,
              icon: "none",
            });
          } else if (code === 2000 && flag) {
            uni.setStorageSync("accessToken", data.accessToken);
            uni.setStorage({
              key: "mytoken",
              data: {
                accessToken: data.accessToken,
              },
              success() {
                console.log("存储成功");
              },
            });

            uni.showToast({
              title: "登录成功",
              icon: "none",
            });
            uni.switchTab({
              url: "/pages/index/index",
            });
          }
        })
        .catch((error) => {
          console.log("error==", error);
        });
    },
    goSingup: function (e) {
      uni.navigateTo({
        url: "/pages/singup/index",
      });
    },
  },
  onBackPress(e) {
    if (this.cannotBack) {
      uni.switchTab({
        url: "/pages/index/index",
      });
    }
    return this.cannotBack ? true : false;
  },
  onShow() {
    const token = uni.getStorageSync("accessToken");
    if (token) {
      that.cannotBack = false;
      uni.navigateBack();
    }
  },
};
</script>

<style lang="scss" scoped>
.uni-form-item {
  display: flex;
  flex-direction: row;
  margin: 12px;
  border: 1px solid lightgray;
  height: 50px;
  align-items: center;
  padding: 0 12px;
  background-color: white;
}

.title {
  margin-right: 12px;
}

.uni-btn-v {
  margin: 0 12px;
}

.sing-up-box {
  margin: 15px 12px 0;
  display: flex;
  justify-content: space-between;
  color: red;
}
</style>
