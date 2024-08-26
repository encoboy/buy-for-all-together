<template>
  <view class="box">
    <form @submit="formSubmit">
      <view class="img_box">
        <image :src="img" mode=""></image>
        <view @click="selectImg">更换头像</view>
      </view>

      <view class="input-box">
        <view class="title">用户名：</view>
        <input
          type="text"
          name="userName"
          v-model="userInfo.userName"
          placeholder="请输入用户名"
        />
      </view>
      <view class="input-box">
        <view class="title">新密码：</view>
        <input
          type="text"
          name="password"
          v-model="userInfo.password"
          placeholder="请输入新密码"
        />
      </view>
      <view class="input-box">
        <view class="title">手机号：</view>
        <input
          type="text"
          name="phone"
          v-model="userInfo.phone"
          placeholder="请输入手机号"
        />
      </view>
      <view class="uni-btn-v">
        <button type="warn" form-type="submit">修改信息</button>
      </view>
    </form>
  </view>
</template>

<script>
import graceChecker from "../../common/graceCheck.js";
import { getUserMsg, editUser } from "@/api/api.js";
import { baseUrl } from "@/api/request.js";
export default {
  data() {
    return {
      img: "",
      userInfo: {},
    };
  },
  methods: {
    selectImg() {
      const that = this;
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album"], //从相册选择
        success: function (res) {
          console.log(JSON.stringify(res.tempFilePaths));
          uni.uploadFile({
            url: `${baseUrl}/backManage/uploadfile`,
            filePath: res.tempFilePaths[0],
            name: "file",
            formData: {
              authorization: uni.getStorageSync("accessToken"),
            },
            success: (uploadFileRes) => {
              const { data, flag } = JSON.parse(uploadFileRes.data);
              if (flag) {
                that.img = data;
              }
            },
          });
        },
      });
    },
    formSubmit: function (e) {
      //定义表单规则
      let rule = [
        {
          name: "userName",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写用户名",
        },
        {
          name: "phone",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写手机号",
        },
        {
          name: "password",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写密码",
        },
      ];
      //进行表单检查
      let formData = e.detail.value;
      let checkRes = graceChecker.check(formData, rule);
      if (checkRes) {
        editUser("/user/editUser", { ...formData, image: this.img })
          .then((res) => {
            const { flag } = res;
            uni.showToast({
              title: "修改成功",
              icon: "success",
            });
          })
          .catch((err) => console.log(err));
      } else {
        uni.showToast({
          title: graceChecker.error,
          icon: "none",
        });
      }
    },
    getUserInfo() {
      getUserMsg("/userCenter/getUserMsg")
        .then((res) => {
          const { flag, data } = res;
          if (res.flag) {
            this.userInfo = data;
            this.img = data.image;
          }
        })
        .catch((error) => console.log(error));
    },
  },
  onLoad() {
    this.getUserInfo();
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 20rpx;
  padding-top: 50rpx;
  height: 90vh;

  .img_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50rpx;
    > image {
      height: 150rpx;
      width: 150rpx;
      margin-left: 15rpx;
      border-radius: 80rpx;
    }
    > view {
      color: #3783cd;
      font-size: 32rpx;
      margin-top: 20rpx;
    }
  }

  .input-box {
    display: flex;
    justify-content: space-between;
    border: 1rpx solid lightgray;
    padding: 25rpx 20rpx;
    background-color: white;
    border: 0px;
    > input {
      align-self: flex-end;
      text-align: end;
    }
  }

  .uni-btn-v {
    position: fixed;
    bottom: 150rpx;
    width: 100%;
    > button {
      width: 80%;
      transform: translate(-2%, 0%);
    }
  }
}
</style>
