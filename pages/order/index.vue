<template>
  <view class="order-box">
    <view class="title">
      <text>订单明细</text>
    </view>
    <view class="order-mingxi">
      <view class="tips">
        <text>注：请确认如下订单明细</text>
      </view>
      <view class="detail" v-for="item in selectGoodList" :key="item.goodId">
        <text>{{ item.goodName.slice(0, 25) }}...</text>
        <text>
          <text class="req-number">{{ item.num }}</text>
          人次
        </text>
      </view>
    </view>
    <view class="total">
      <text>商品合计：</text>
      <text class="money">{{ totalMoney }}金币</text>
    </view>
    <view class="btn-box">
      <button type="warn" @click="settlement">提交订单</button>
    </view>
  </view>
</template>

<script>
import { getGoodToShoppCarList, getSettlement } from "@/api/api.js";

export default {
  data() {
    return {
      goodList: [],
      selectGoodIdList: [],
      selectGoodList: [],
      totalMoney: 0,
      token: uni.getStorageSync("accessToken"),
    };
  },
  methods: {
    getGoodCarList: function (e) {
      getGoodToShoppCarList("/shoppCar/getGoodToShoppCarList", {
        currentPage: 1,
        pageSize: 100,
        authorization: this.token,
      })
        .then((res) => {
          const { code, data, total, flag } = res;
          if (code === 2000 && flag) {
            this.goodList = data.list;
            for (let i = 0; i < this.goodList.length; i++) {
              if (
                this.selectGoodIdList
                  .split(",")
                  .includes(`${this.goodList[i].goodId}`)
              ) {
                this.selectGoodList.push(this.goodList[i]);
              }
            }
            this.selectGoodList.map((item) => {
              this.totalMoney += item.num * item.unitsPrice;
            });
          }
        })
        .catch((error) => console.log(error));
    },
    settlement() {
      getSettlement("/shoppCar/getSettlement", {
        goodId: this.selectGoodIdList,
        authorization: this.token,
      })
        .then((res) => {
          const { code, flag, data } = res;
          if (code === 2000 && flag) {
            // 应该是点击提交订单的时候再清除掉 购物车选择的商品数据
            uni.setStorageSync("selectGoodList", []);
            this.selectGoodList = [];
            this.totalMoney = 0;
            uni.showToast({
              title: "提交成功",
              icon: "success",
            });
            uni.navigateTo({
              url: "/pages/finishorderlist/index",
            });
          } else {
            if (code === 5003 || data === "账号余额不足") {
              uni.navigateTo({
                url: "/pages/topup/index",
              });
            }
            uni.showToast({
              title: `${data}`,
              icon: "none",
            });
          }
        })
        .catch((error) => console.log(error));
    },
  },
  onLoad(param) {
    this.token = uni.getStorageSync("accessToken");
    this.selectGoodIdList = param.selectGoodList;
    this.getGoodCarList();
  },
};
</script>

<style lang="scss">
.order-box {
  width: 100%;

  .title {
    background-color: white;
    padding: 20rpx 12rpx;

    > text {
      font-size: 30rpx;
      font-weight: 600;
    }
  }

  .order-mingxi {
    background-color: antiquewhite;

    .tips {
      padding: 15rpx 30rpx;
      border-bottom: 1px solid lightgray;

      > text {
        font-size: 20rpx;
        color: #423e37;
      }
    }

    .detail {
      padding: 25rpx 40rpx;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid lightgray;

      > text {
        font-size: 25rpx;
        color: gray;
      }

      .req-number {
        color: red;
      }
    }
  }

  .total {
    background-color: white;
    padding: 25rpx 15rpx;
    display: flex;
    justify-content: space-between;
    margin-top: 30rpx;

    .money {
      color: red;
    }
  }

  .btn-box {
    width: 95%;
    margin: 0 auto;
    margin-top: 80rpx;
  }
}
</style>
