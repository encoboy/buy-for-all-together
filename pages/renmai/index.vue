<template>
  <view
    v-if="goodList.length > 0"
    class="list-box"
    :style="{ height: listBoxHeight + 'px' }"
  >
    <myScrolly
      scrollDirection="y"
      :moreStatu="moreStatu"
      @lowerFunc="lower"
      :scrollY="scrollY"
      loadColor="#000000"
      :otherEleHeight="55"
    >
      <checkbox-group @change="checkboxChange">
        <label v-for="item in goodList" :key="item.goodName">
          <view class="good-box">
            <view>
              <checkbox
                :value="item.goodId"
                :checked="item.checked"
                style="transform: scale(0.8)"
              />
            </view>
            <view class="img-box">
              <image :src="item.image" mode=""></image>
            </view>
            <view class="right-box">
              <text class="title" @click.stop="goDetailGood(item.goodId)"
                >{{ item.goodName?.slice(0, 30) }}...</text
              >
              <view class="num-box">
                <text>总人数:{{ item.openNumber }}</text>
                <text>|</text>
                <text>还需人数:{{ item.reqNumber }}</text>
              </view>
              <view class="add-box">
                <text>参与人次</text>
                <view class="add-input-box">
                  <view
                    class="jia"
                    @click.stop="
                      (e) => addCarGood(e, item.goodId, item.num, 'jia')
                    "
                  >
                    <uni-icons
                      custom-prefix="iconfont"
                      type="plusempty"
                      size="10"
                    ></uni-icons>
                  </view>

                  <input
                    class="uni-input"
                    @click.stop
                    @blur="
                      (e) =>
                        inputClick(e, item.goodId, item.reqNumber, item.num)
                    "
                    type="number"
                    v-model="item.num"
                  />
                  <view
                    class="jian"
                    @click.stop="
                      (e) => addCarGood(e, item.goodId, item.num, 'jian')
                    "
                  >
                    <view class="iconfont icon-jian"></view>
                  </view>
                </view>
              </view>
              <view class="del_box">
                <view class="danjia">
                  单价
                  <text>{{ item.unitsPrice }}</text>
                  金币
                </view>
                <view
                  class="good-del-box"
                  @click.stop="dialogToggle(item.goodId)"
                >
                  <uni-icons color="white" type="trash" size="16"></uni-icons>
                  <text>删除</text>
                </view>
              </view>
            </view>
          </view>
        </label>
      </checkbox-group>
    </myScrolly>
    <view class="close-account">
      <checkbox-group @change="checkboxAllChange">
        <label>
          <view class="all-check">
            <checkbox
              :value="ALL_SELECT_GOOD"
              :checked="allCheckValue"
              style="transform: scale(0.8)"
            />
            <text>全选</text>
          </view>
        </label>
      </checkbox-group>

      <view class="close-box">
        <view class="left-box">
          <text>共{{ selectGoodList.length }}件商品，</text>
          <text>
            <text class="total-num">{{ totalMoney }}</text>
            个金币
          </text>
        </view>
        <view class="right-box">
          <button @click="goOrder">结算</button>
        </view>
      </view>
    </view>
  </view>
  <view v-else class="img-box-not-good">
    <image src="../../static/renmai/cargood.png" mode=""></image>
    <text>购物车空空如也~</text>
    <view class="button-box">
      <button @click="goHome">继续购物</button>
    </view>
  </view>
  <!-- 提示窗示例 -->
  <view>
    <uni-popup ref="alertDialog" type="dialog">
      <uni-popup-dialog
        type="error"
        cancelText="关闭"
        confirmText="确定"
        title="提示"
        content="确定删除该商品吗？"
        @confirm="dialogConfirm"
      ></uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
import {
  getGoodToShoppCarList,
  addGoodToShoppCar,
  deleteGoodToShoppCar,
} from "@/api/api.js";
import myScrolly from "@/components/myScrolly.vue";
import { throttle } from "@/common/throttle.js";
import {
  showStopPageScro,
  hidenRemoveStopEvent,
} from "@/common/disablePageScro.js";
export default {
  components: {
    myScrolly,
  },
  data() {
    return {
      goodList: [],
      pageSize: 10,
      totalNum: 0,
      selectGoodList: [],
      token: null,
      pH: 0, //窗口高度
      listBoxHeight: 0,
      allCheckValue: false,
      moreStatu: "more",
      scrollY: "scroll-Y",
      ALL_SELECT_GOOD: "1",
    };
  },
  methods: {
    checkboxAllChange: function (e) {
      let list = this.goodList;
      let allGoodIdArr = [];
      if (e.detail.value[0] === this.ALL_SELECT_GOOD) {
        for (var i = 0, lenI = list.length; i < lenI; ++i) {
          const item = list[i];
          allGoodIdArr.push(item.goodId);
          this.$set(item, "checked", true); // 为每个元素item加个checked的属性为true
        }
        uni.setStorageSync("selectGoodList", allGoodIdArr);
        this.selectGoodList = allGoodIdArr;
      } else {
        for (var i = 0, lenI = list.length; i < lenI; ++i) {
          const item = list[i];
          this.$set(item, "checked", false); // 为每个元素item加个checked的属性为false
        }
        uni.setStorageSync("selectGoodList", []);
        this.selectGoodList = [];
      }
    },
    goDetailGood: function (goodId) {
      uni.navigateTo({
        url: `/pages/detailgood/index?goodId=${goodId}`,
      });
    },
    dialogConfirm() {
      deleteGoodToShoppCar("/shoppCar/deleteGoodToShoppCar", {
        goodId: this.goodId,
        authorization: this.token,
      })
        .then((res) => {
          const { code, flag } = res;
          if (code === 2000 && flag) {
            this.$refs.alertDialog.close();
            this.getGoodCarList({});
            uni.showToast({
              title: "删除成功",
              icon: "none",
            });
          }
        })
        .catch((error) => console.log(error));
    },
    dialogToggle(goodId) {
      this.goodId = goodId;
      this.$refs.alertDialog.open();
    },
    checkboxChange: function (e) {
      this.selectGoodList = e.detail.value;
      uni.setStorageSync("selectGoodList", e.detail.value);
      var items = this.goodList,
        values = e.detail.value;
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        const item = items[i];
        if (values.includes(item.goodId)) {
          this.$set(item, "checked", true); // 为每个元素item加个checked的属性为true
        } else {
          this.$set(item, "checked", false);
        }
      }
    },
    goHome(e) {
      uni.switchTab({
        url: "/pages/index/index",
      });
    },
    getGoodCarList: function ({ loading = true }) {
      this.moreStatu = "loading";
      getGoodToShoppCarList(
        "/shoppCar/getGoodToShoppCarList",
        {
          currentPage: 1,
          pageSize: this.pageSize,
          authorization: this.token,
        },
        loading
      )
        .then((res) => {
          const { code, data, flag } = res;
          if (code === 2000 && flag) {
            this.goodList = data.list;
            this.totalNum = data.total;
            uni.stopPullDownRefresh();
            if (data.list.length === data.total) {
              this.moreStatu = "noMore";
            } else {
              this.moreStatu = "more";
            }
            if (data.total == 0) {
              uni.removeTabBarBadge({
                index: 2,
              });
            } else {
              uni.setTabBarBadge({
                index: 2,
                text: `${data.total}`,
              });
            }
            if (uni.getStorageSync("selectGoodList") !== undefined) {
              var items = this.goodList,
                values = uni.getStorageSync("selectGoodList");

              for (var i = 0, lenI = items.length; i < lenI; ++i) {
                const item = items[i];
                if (values.includes(item.goodId)) {
                  this.$set(item, "checked", true);
                } else {
                  this.$set(item, "checked", false);
                }
              }
            }
          }
        })
        .catch((error) => console.log(error));
    },
    lower: function (e) {
      const listdataLength = this.goodList.length;
      if (listdataLength < this.totalNum) {
        this.pageSize += 10;
        this.getGoodCarList({});
      }
    },
    addCarAjax: function (goodId, num) {
      addGoodToShoppCar(
        "/shoppCar/addGoodToShoppCar",
        {
          goodId,
          num,
          authorization: this.token,
          type: 2, // 在购物车页面添加
        },
        false
      )
        .then((res) => {
          const { code, flag, data } = res;
          if (code === 2000 && flag) {
            this.getGoodCarList({ loading: false });
          } else {
            uni.showToast({
              title: data,
              icon: "none",
            });
          }
        })
        .catch((error) => console.log(error));
    },
    addCarGood: throttle(function (e, goodId, num, type) {
      e.prevent;
      let paramNum;
      if (type == "jian") {
        if (num === 1) {
          uni.showToast({
            title: "不能小于0",
            icon: "none",
          });
          return;
        }
        paramNum = num - 1;
      } else {
        paramNum = num + 1;
      }
      this.addCarAjax(goodId, paramNum);
    }, 500),
    inputClick: function (e, goodId, reqNum, num) {
      if (e.detail.value > reqNum) {
        uni.showToast({
          title: "不能输入大于剩余人次,请重新输入！",
          icon: "none",
        });
        this.getGoodCarList({ loading: false });
        return;
      }
      this.addCarAjax(goodId, e.detail.value);
    },
    goOrder: function (e) {
      if (this.selectGoodList.length > 0) {
        uni.navigateTo({
          url: `/pages/order/index?selectGoodList=${this.selectGoodList}`,
        });
      } else {
        uni.showToast({
          title: "请选择要结算的商品",
          icon: "none",
        });
      }
    },
  },
  onPullDownRefresh() {
    this.getGoodCarList({});
  },
  onShow() {
    this.selectGoodList = uni.getStorageSync("selectGoodList");
    this.token = uni.getStorageSync("accessToken");
    showStopPageScro();
    const _this = this;
    uni.getStorage({
      key: "mytoken",
      success: function (res) {
        _this.getGoodCarList({});
      },
      fail: function () {
        if (!this.token) {
          uni.navigateTo({
            url: "/pages/login/index",
          });
        }
      },
    });
  },
  onHide() {
    this.$refs.alertDialog.close();
    hidenRemoveStopEvent();
  },
  onReady() {
    let that = this;
    uni.getSystemInfo({
      //调用uni-app接口获取屏幕高度
      success(res) {
        //成功回调函数
        that.pH = res.windowHeight; //windoHeight为窗口高度，主要使用的是这个
        that.listBoxHeight = that.pH;
      },
    });
  },
  computed: {
    totalMoney() {
      let selectArr = [];
      for (let i = 0; i < this.goodList.length; i++) {
        if (this.selectGoodList.includes(this.goodList[i].goodId)) {
          selectArr.push(this.goodList[i]);
        }
      }
      const listLength = selectArr.length;
      let totalMoneyNum = 0;
      if (listLength === this.goodList.length) {
        this.allCheckValue = true;
      } else {
        this.allCheckValue = false;
      }
      for (let i = 0; i < listLength; i++) {
        totalMoneyNum +=
          Number(selectArr[i].num) * Number(selectArr[i].unitsPrice);
      }
      return totalMoneyNum;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/uni.scss";
::v-deep .uni-checkbox-input {
  border-radius: 50%;
}

body {
  position: relative;
}

.img-box-not-good {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40rpx 0;

  text {
    font-size: 28rpx;
    font-family: $global-font-family;
    font-weight: 400;
    color: #000000;
  }

  .button-box {
    margin-top: 200rpx;
    > button {
      width: 272rpx;
      height: 93rpx;
      background: #e44b46;
      border-radius: 16rpx 16rpx 16rpx 16rpx;
      font-size: 28rpx;
      font-family: $global-font-family;
      font-weight: 400;
      color: #ffffff;
      line-height: 93rpx;
    }
  }
}

.list-box {
  height: 100vh;
  .good-box {
    display: flex;
    background-color: white;
    margin: 20rpx 15rpx;
    align-items: center;
    padding: 20rpx 24rpx 10rpx;
    border-radius: 20rpx;

    .img-box {
      width: 206rpx;
      height: 206rpx;
      background: #ffffff;
      box-shadow: 0rpx 5rpx 11rpx 2rpx rgba(0, 0, 0, 0.16);
      border-radius: 7rpx 7rpx 7rpx 7rpx;
      opacity: 1;
      margin: 0px 10rpx;
      > image {
        width: 200rpx;
        height: 200rpx;
      }
    }

    .right-box {
      flex: 1;
      margin-left: 10px;

      .title {
        font-size: 32rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #0a0a0a;
      }

      .num-box {
        font-size: 25rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #ed885a;
        margin-top: 20rpx;
        :nth-child(2) {
          margin: 0 12rpx;
        }
      }

      .add-box {
        display: flex;
        align-items: center;
        margin: 20rpx 0 16rpx 0;

        > text {
          font-size: 21rpx;
          font-family: $global-font-family;
          font-weight: 400;
          color: #000000;
        }

        .add-input-box {
          display: flex;
          margin-left: 24rpx;

          .jian,
          .jia {
            border: 1rpx solid lightgray;
            width: 50rpx;
            height: 50rpx;
            text-align: center;
            line-height: 50rpx;
          }

          > input {
            border: 1rpx solid lightgray;
            width: 100rpx;
            height: 50rpx;
            color: red;
            text-align: center;
          }
        }
      }
      .del_box {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 30rpx;
        .good-del-box {
          width: 151rpx;
          height: 51rpx;
          background: #e44b46;
          border-radius: 9rpx 9rpx 9rpx 9rpx;
          font-size: 28rpx;
          font-family: $global-font-family;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          line-height: 51rpx;
          > text {
            margin-left: 10rpx;
          }
        }
        .danjia {
          margin-top: 10rpx;
          font-size: 24rpx;

          > text {
            color: red;
            margin: 0 4rpx 0 4rpx;
          }
        }
      }
    }
  }

  .close-account {
    width: 100%;
    height: 110rpx;
    position: absolute;
    bottom: 0rpx;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .all-check {
      width: 200rpx;
      display: flex;
      align-items: center;
      margin-left: 15rpx;
    }
    .close-box {
      width: 100%;
      height: 110rpx;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .left-box {
        margin-right: 40rpx;
        font-size: 25rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #000000;
        .total-num {
          color: #fc0014;
        }
      }
      .right-box {
        margin-right: 20rpx;
        > button {
          width: 161rpx;
          height: 70rpx;
          background: #e44b46;
          border-radius: 14rpx 14rpx 14rpx 14rpx;
          opacity: 1;
          font-size: 25rpx;
          font-family: $global-font-family;
          font-weight: 400;
          color: #ffffff;
          line-height: 70rpx;
        }
      }
    }
  }
}
</style>
