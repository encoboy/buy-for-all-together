<template>
  <view class="box-width">
    <view class="my-box">
      <view class="seting-box" @click="goMyInfo">
        <uni-icons type="gear" size="25" color="white"></uni-icons>
        <text>设置</text>
      </view>
      <view class="head-box">
        <image
          :src="userInfo.image ? userInfo.image : '../../static/my/avatar.png'"
        ></image>
        <view class="info">
          <text>{{ userInfo.userName }}</text>
          <text>账号ID：{{ userInfo.userId }}</text>
        </view>
      </view>
    </view>
    <view class="jinbi-box">
      <view class="box">
        <image src="../../static/my/jifen2.png" mode=""></image>
        <view class="text-title">
          <text>金币</text>
          <text>{{ jinbiAccount }}</text>
        </view>
      </view>
      <view class="box">
        <image src="../../static/my/jinbi2.png" mode=""></image>
        <view class="text-title2">
          <text>积分</text>
          <text>0.00</text>
        </view>
      </view>
    </view>
    <view class="list-seting-box">
      <view class="list-box" v-for="item in listArray" @click="item.callback">
        <view class="right">
          <image :src="item.src"></image>
          <text>{{ item.name }}</text>
        </view>
        <view class="left">
          <uni-icons type="forward" size="20"></uni-icons>
        </view>
        <!-- <text>{{$t('app.name')}}</text> -->
      </view>
    </view>
  </view>
</template>

<script>
import { getUserMsg, getUserAccountOne } from "@/api/api.js";
import logoutFn from "@/common/logout.js";
import {
  showStopPageScro,
  hidenRemoveStopEvent,
} from "@/common/disablePageScro.js";
export default {
  data() {
    return {
      isLogin: uni.getStorageSync("accessToken"),
      userInfo: {},
      jinbiAccount: 0,
      listArray: [
        {
          name: "我要充值",
          src: "../../static/my/chongzhi.png",
          callback: () => {
            this.goListPage("/pages/topup/index");
          },
        },
        {
          name: "收货地址",
          src: "../../static/my/address.png",
          callback: () => {
            this.goListPage("/pages/addresslist/index");
          },
        },
        {
          name: "订单列表",
          src: "../../static/my/order2.png",
          callback: () => {
            this.goListPage("/pages/finishorderlist/index");
          },
        },
        {
          name: "中奖记录",
          src: "../../static/my/jilu.png",
          callback: () => {
            this.goListPage("/pages/winrecord/index");
          },
        },
        {
          name: "全民一元购规则",
          src: "../../static/my/rule.png",
          callback: () => {
            this.goListPage("/pages/rule/rule");
          },
        },
        {
          name: "退出登录",
          src: "../../static/my/close.png",
          callback: () => {
            this.goListPage("logout");
          },
        },
      ],
    };
  },
  methods: {
    getAccount() {
      getUserAccountOne("/userCenter/getUserAccountOne")
        .then((res) => {
          const { code, flag, data } = res;
          if (code === 2000 && flag) {
            uni.stopPullDownRefresh();
            this.jinbiAccount = data.account;
          }
        })
        .catch((error) => console.log(error));
    },
    getUserInfo() {
      getUserMsg("/userCenter/getUserMsg")
        .then((res) => {
          const { flag, data } = res;
          if (flag) {
            uni.stopPullDownRefresh();
            this.userInfo = data;
          }
        })
        .catch((error) => console.log(error));
    },
    goListPage(url) {
      if (url === "logout") {
        logoutFn({ isShowToast: true });
        return;
      }
      uni.navigateTo({
        url,
      });
    },
    goMyInfo() {
      uni.navigateTo({
        url: "/pages/myinfo/index",
      });
    },
  },
  onPullDownRefresh() {
    this.getUserInfo();
    this.getAccount();
  },
  onHide() {
    hidenRemoveStopEvent();
  },
  onShow() {
    showStopPageScro();
    this.token = uni.getStorageSync("accessToken");
    this.getUserInfo();
    this.getAccount();
    uni.getStorage({
      key: "mytoken",
      success: function (res) {},
      fail: function () {
        if (!this.token) {
          uni.navigateTo({
            url: "/pages/login/index",
          });
        }
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/uni.scss";
.box-width {
  width: 100vw;
  .my-box {
    width: 100%;
    height: 321rpx;
    background: linear-gradient(180deg, #57a3f8 0%, #7acefc 100%);
    border-radius: 0rpx 0rpx 0rpx 0rpx;
    opacity: 1;
    .seting-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 20rpx;
      justify-content: center;
      align-items: flex-end;
      > text {
        color: white;
        font-size: 20rpx;
        margin-right: 30rpx;
      }
    }

    .head-box {
      width: 100%;
      display: flex;
      align-items: center;
      margin: -10rpx 0 0 50rpx;

      .info {
        margin-left: 30rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100rpx;
        > text {
          width: 173rpx;
          height: 39rpx;
          font-size: 28rpx;
          font-family: $global-font-family;
          font-weight: 400;
          color: #ffffff;
        }
      }

      > image {
        height: 150rpx;
        width: 150rpx;
        border-radius: 75rpx;
      }

      > text {
        color: white;
        margin-top: 15px;
      }
    }
  }

  .list-seting-box {
    .list-box {
      width: 100%;
      height: 98rpx;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1rpx solid lightgray;
      .right {
        display: flex;
        align-items: center;
        > image {
          height: 38rpx;
          width: 36rpx;
          margin-left: 30rpx;
        }
        > text {
          margin-left: 30rpx;
          font-size: 32rpx;
          font-family: $global-font-family;
          font-weight: 400;
          color: #000000;
        }
      }
      .left {
        margin-right: 30rpx;
      }
    }
  }

  .jinbi-box {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    background-color: white;
    margin-bottom: 15px;
    width: 90%;
    height: 145rpx;
    box-shadow: 0rpx 5rpx 11rpx 2rpx rgba(0, 0, 0, 0.16);
    border-radius: 16rpx 16rpx 16rpx 16rpx;
    opacity: 1;
    margin-top: -50rpx;

    .box {
      display: flex;
      justify-content: center;
      align-items: center;

      > image {
        width: 120rpx;
        height: 120rpx;
      }

      .text-title,
      .text-title2 {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 32rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #000000;
        :nth-child(2) {
          color: #cc922d;
        }
      }
      .text-title2 {
        color: lightgray;
        :nth-child(2) {
          color: lightgray;
        }
      }
    }
  }
}
</style>
