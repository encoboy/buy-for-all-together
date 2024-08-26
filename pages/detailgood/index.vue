<template>
  <view class="uni-margin-wrap">
    <swiper
      class="swiper"
      circular
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
    >
      <swiper-item>
        <view class="img-box">
          <image mode="heightFix" :src="goodDetailData.image"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
  <view class="box">
    <view class="title-box">
      <view class="state">
        {{ goodDetailData.state }}
      </view>
      <text class="title">
        {{ goodDetailData.goodName }}
      </text>
    </view>
    <view class="tips">
      <text>商品获得者将享有发货前无理由委托平台转让的保障</text>
    </view>
    <view class="process-box">
      <view class="left">
        <progress :percent="20" activeColor="#f98b2b" stroke-width="6" />
        <view class="renci-box">
          <text>满{{ goodDetailData.openNumber }}人次开奖</text>
          <text>
            剩余
            <text class="req-number">{{ goodDetailData.reqNumber }}</text>
            人次
          </text>
        </view>
      </view>
      <view class="right" @click="goTopup">
        <text>快速</text>
        <text>充值</text>
      </view>
    </view>
    <view class="buy-box">
      <view class="title">
        <text>购买方式</text>
      </view>
      <view class="con_box">
        <view class="left-box">
          <text>
            商品总价值
            <text class="req-number">{{ goodDetailData.reqNumber }}</text>
            金币
          </text>
          <text>
            单次价格
            <text class="jiage">{{ goodDetailData.unitsPrice }}.00</text>
            金币
          </text>
        </view>
      </view>
    </view>
  </view>
  <view class="history-box" @click="goHistory(goodDetailData.goodId)">
    <view class="left">
      <image src="../../static/detail/jiexiao.png" mode=""></image>
      <text>往期揭晓</text>
    </view>
    <view class="right">
      <uni-icons type="forward" size="20"></uni-icons>
    </view>
  </view>
  <view class="bottom-box">
    <view class="car_box" @click="goShoppCar">
      <image src="../../static/detail/car.png" mode=""></image>
      <text>购物车</text>
      <view class="car_total">{{ carTotalNum }}</view>
    </view>
    <view class="btn_box">
      <button class="btn1" @click="addCar(goodDetailData.goodId)">
        加入购物车
      </button>
    </view>
  </view>
</template>

<script>
import {
  getGoodOneMsgList,
  addGoodToShoppCar,
  getGoodToShoppCarList,
} from "@/api/api.js";

export default {
  data() {
    return {
      goodDetailData: {},
      indicatorDots: true,
      autoplay: true,
      token: uni.getStorageSync("accessToken"),
      carTotalNum: 0,
    };
  },
  methods: {
    goHistory(goodId) {
      uni.navigateTo({
        url: `/pages/announceHistory/index?goodId=${goodId}`,
      });
    },
    goTopup() {
      uni.navigateTo({
        url: "/pages/topup/index",
      });
    },
    goShoppCar() {
      uni.switchTab({
        url: "/pages/renmai/index",
      });
    },
    addCar: function (goodId) {
      // 加入购物车，没有登录直接跳转到登录页面
      if (this.token) {
        addGoodToShoppCar("/shoppCar/addGoodToShoppCar", {
          goodId,
          num: 1,
          authorization: this.token,
          type: 1,
        })
          .then((res) => {
            const { code, flag } = res;
            if (code === 2000 && flag) {
              this.geCarNum();
              uni.showToast({
                title: "成功加入购物车！",
                icon: "none",
              });
            }
          })
          .catch((error) => console.log(error));
      } else {
        uni.navigateTo({
          url: "/pages/login/index",
        });
      }
    },
    geCarNum() {
      getGoodToShoppCarList(
        "/shoppCar/getGoodToShoppCarList",
        {
          currentPage: 1,
          pageSize: 1,
          authorization: uni.getStorageSync("accessToken"),
        },
        false
      )
        .then((res) => {
          const { code, data, flag } = res;
          if (code === 2000 && flag) {
            this.carTotalNum = data.total;
          }
        })
        .catch((error) => console.log(error));
    },
    getOneMsg(param) {
      getGoodOneMsgList("/home/getGoodOneMsgList", {
        goodId: param.goodId,
      })
        .then((res) => {
          const { code, flag, data } = res;
          if (code === 2000 && flag) {
            this.goodDetailData = data;
          }
        })
        .catch((error) => console.log(error));
    },
  },
  onLoad(param) {
    this.geCarNum();
    this.getOneMsg(param);
  },
};
</script>

<style lang="scss" scoped>
@import "@/uni.scss";
.uni-margin-wrap {
  width: 100%;

  .swiper {
    height: 350rpx;

    .img-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    image {
      height: 350rpx;
    }
  }
}

.box {
  padding: 0 24rpx;
  .title-box {
    margin-top: 40rpx;

    .state {
      display: inline-block;
      background-color: #fdcad7;
      width: 120rpx;
      border-radius: 5rpx;
      text-align: center;
      margin-right: 16rpx;
      font-size: 25rpx;
      font-family: $global-font-family;
      font-weight: 400;
      color: #b80505;
      border-radius: 6rpx;
    }

    .title {
      font-size: 32rpx;
      font-family: $global-font-family;
      font-weight: 400;
      color: #0a0a0a;
      line-height: 49rpx;
    }
  }

  .tips {
    font-size: 24rpx;
    color: #e97175;
    margin: 10rpx 0;
  }
  .process-box {
    display: flex;
    margin-top: 40rpx;
    align-items: center;

    .left {
      flex: 8;
      margin-right: 20rpx;

      .renci-box {
        margin-top: 20rpx;
        display: flex;
        justify-content: space-between;
        > text {
          font-size: 21rpx;
          font-family: $global-font-family;
          font-weight: 400;
          color: #4b4b4b;
        }

        .req-number {
          color: #fc3234;
        }
      }
    }

    .right {
      width: 175rpx;
      height: 60rpx;
      background-color: #db3336;
      border-radius: 10rpx;
      text-align: center;
      line-height: 60rpx;
      > text {
        font-size: 25rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #ffffff;
        line-height: 0rpx;
      }
    }
  }
  .buy-box {
    margin-top: 30px;
    background-color: white;
    padding-bottom: 15rpx;

    .title {
      background-color: #fa0037;
      display: inline-block;
      color: white;
      padding: 10rpx 12rpx;
      font-size: 28rpx;
      border-bottom-right-radius: 30rpx;
    }

    .con_box {
      padding: 0 16rpx 0 30rpx;
      display: flex;
      justify-content: space-between;
      font-size: 25rpx;
      font-family: $global-font-family;
      font-weight: 400;
      color: #000000;
      line-height: 0rpx;

      .left-box {
        margin: 40rpx 50rpx;
        > text {
          margin-right: 50rpx;
        }

        .req-number,
        .jiage {
          color: #fb3335;
        }
      }
    }
  }
}
.history-box {
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25rpx 0;
  margin-top: 40rpx;

  .left {
    display: flex;
    align-items: center;
    margin-left: 40rpx;
    font-size: 32rpx;
    font-family: $global-font-family;
    font-weight: 400;
    color: #000000;
    line-height: 0rpx;
    > image {
      width: 39rpx;
      height: 46rpx;
      margin-right: 20rpx;
    }
  }

  .right {
    margin-right: 30rpx;
  }
}
.bottom-box {
  width: 100%;
  padding: 30rpx 0rpx;
  background-color: white;
  position: fixed;
  bottom: 0rpx;
  display: flex;
  justify-content: space-between;
  .car_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40rpx;
    position: relative;
    > image {
      height: 42rpx;
      width: 40rpx;
      margin-bottom: 15rpx;
    }
    > text {
      font-size: 21rpx;
      font-family: $global-font-family;
      font-weight: 400;
      color: #000000;
      line-height: 0rpx;
    }
    .car_total {
      width: 30rpx;
      height: 30rpx;
      background: #c50606;
      opacity: 1;
      position: absolute;
      border-radius: 12rpx;
      font-size: 12rpx;
      color: white;
      right: -10rpx;
      top: -10rpx;
      text-align: center;
      line-height: 30rpx;
    }
  }

  .btn_box {
    display: flex;
    margin-right: 40rpx;
    .btn1 {
      width: 175rpx;
      height: 60rpx;
      background: #e44b45;
      border-radius: 7rpx 7rpx 7rpx 7rpx;
      opacity: 1;
      font-size: 25rpx;
      font-family: $global-font-family;
      font-weight: 400;
      color: #ffffff;
      line-height: 60rpx;
    }
  }
}
</style>
