<template>
  <view>
    <form @submit="formSubmit">
      <view class="list-box">
        <text>收货人</text>
        <input
          class="uni-input"
          name="addrName"
          placeholder="请填写收货人"
          v-model="formdata.addrName"
        />
      </view>
      <view class="list-box">
        <text>手机号码</text>
        <input
          class="uni-input"
          name="addrPhone"
          v-model="formdata.addrPhone"
          placeholder="请填写手机号码"
        />
      </view>
      <view class="list-box">
        <text>详细地址</text>
        <textarea
          v-model="formdata.address"
          name="address"
          auto-height
          placeholder-style="color:lightgray"
          placeholder="请填写完整的详细地址"
        />
      </view>
      <view class="list-box">
        <text>是否设为默认地址</text>
        <view>
          <switch :checked="formdata.state" name="state" />
        </view>
      </view>

      <view class="uni-btn-v">
        <button type="warn" form-type="submit">保存地址</button>
      </view>
    </form>
  </view>
</template>

<script>
import graceChecker from "../../common/graceCheck.js";
import {
  addUserAddress,
  getUserAddressOne,
  updateUserAddress,
} from "@/api/api.js";

export default {
  data() {
    return {
      formdata: {
        addrName: "",
        addrPhone: "",
        address: "",
        state: false,
      },
      addrId: null,
      token: null,
    };
  },
  methods: {
    formSubmit: function (e) {
      //定义表单规则
      let rule = [
        {
          name: "addrName",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写收货人名称",
        },
        {
          name: "addrPhone",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填收货人电话",
        },
        {
          name: "address",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写收货地址",
        },
      ];
      //进行表单检查
      let formData = e.detail.value;
      let checkRes = graceChecker.check(formData, rule);
      if (checkRes) {
        if (this.addrId) {
          updateUserAddress("/userCenter/updateUserAddress", {
            ...formData,
            state: formData.state ? 1 : 0,
            addrId: this.addrId,
            authorization: this.token,
          })
            .then((res) => {
              const { code, flag } = res;
              if (code === 2000 && flag) {
                uni.showToast({
                  title: "修改成功！",
                  icon: "success",
                });
                uni.navigateTo({
                  url: "/pages/addresslist/index",
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          addUserAddress("/userCenter/addUserAddress", {
            ...formData,
            state: formData.state ? 1 : 0,
            authorization: this.token,
          })
            .then((res) => {
              const { code, flag } = res;
              if (code === 2000 && flag) {
                uni.showToast({
                  title: "添加成功！",
                  icon: "success",
                });
                uni.navigateTo({
                  url: "/pages/addresslist/index",
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        uni.showToast({
          title: graceChecker.error,
          icon: "none",
        });
      }
    },
    getAddressDetial(addrId) {
      getUserAddressOne("/userCenter/getUserAddressOne", {
        addrId,
        authorization: this.token,
      })
        .then((res) => {
          console.log("res==>", res);
          const { code, flag, data } = res;
          if (code === 2000 && flag) {
            this.formdata = data;
          }
        })
        .catch((error) => console.log(error));
    },
  },
  onLoad(params) {
    this.addrId = params.addrId;
    this.token = uni.getStorageSync("accessToken");
    if (this.addrId) {
      this.getAddressDetial(this.addrId);
    }
  },
};
</script>

<style lang="scss" scoped>
.list-box {
  display: flex;
  padding: 30rpx 20rpx;
  background-color: white;

  > text {
    flex: 1;
  }

  > input {
    flex: 3;
    align-self: flex-end;
    text-align: end;
  }
  > textarea {
    align-self: flex-end;
    text-align: end;
  }
}

.uni-btn-v {
  position: fixed;
  bottom: 150rpx;
  width: 100%;
  > button {
    width: 90%;
  }
}
</style>
