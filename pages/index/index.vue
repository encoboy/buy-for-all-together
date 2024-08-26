<template>
  <view class="box" :style="{ height: boxHeight + 'px' }">
    <view class="notice_box">
      <xzw-notice
        theme="primary"
        :list="list"
        theKey="name"
        :showIcon="true"
        :showMore="false"
      />
    </view>
    <view class="uni-margin-wrap">
      <swiper
        class="swiper"
        circular
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
      >
        <swiper-item>
          <image mode="heightFix" src="../../static/index/gouwu1.png"></image>
        </swiper-item>
        <swiper-item>
          <image mode="heightFix" src="../../static/index/gouwu2.png"></image>
        </swiper-item>
        <swiper-item>
          <image mode="heightFix" src="../../static/index/gouwu3.png"></image>
        </swiper-item>
      </swiper>
    </view>
    <y-tabs
      v-model="activeIndex"
      @click="tabClick"
      @change="tabChange"
      class="y-tabs"
      sticky
      :offsetTop="offsetTop"
    >
      <y-tab
        class="y-tab-virtual"
        v-for="(name, index) in tabname"
        :key="index"
        :title="name"
      >
        <scroll-view
          :style="{ height: navHeight + 'px' }"
          scroll-y="true"
          class="scroll-Y"
          @scrolltolower="lower"
        >
          <view class="list-data-box">
            <view
              v-for="(item, index) in listdata"
              :key="index"
              class="data-box"
              :class="{ borderRight: index % 2 == 0 }"
            >
              <view class="good_code">
                商品编号:<text>{{ item.goodCode }}</text>
              </view>
              <view class="data-box-bottom">
                <image
                  class="data-box-img"
                  :src="item.image"
                  @click="goDetailGood(item.goodId)"
                ></image>
                <view class="right_box">
                  <view
                    class="data-text-box"
                    @click="goDetailGood(item.goodId)"
                  >
                    <text class="data-text">
                      {{
                        item.goodName ? item.goodName.slice(0, 30) + "..." : ""
                      }}
                    </text>
                  </view>
                  <view class="renci_box">
                    <text class="openNumber">
                      总人次:
                      {{ item.openNumber }}
                    </text>

                    <text class="reqNumber">
                      还需人次:
                      {{ item.reqJoinNum }}
                    </text>
                  </view>
                  <view class="data-bottom">
                    <view class="bottom-text">
                      <text>购买进度</text>
                      <text class="bottom-progress">{{ item.buyRate }}</text>
                    </view>
                    <progress
                      :percent="item.buyRate"
                      activeColor="#f98b2b"
                      stroke-width="6"
                    />
                  </view>
                  <view class="daoji_box">
                    <view class="djs_box">
                      <text>倒计时：</text>
                      <time-con :itemTime="item.endTime"></time-con>
                    </view>
                    <view class="button_box">
                      <button
                        v-if="item.buyRate === '100.0%'"
                        size="md"
                        class="bottom-button"
                      >
                        <uni-icons
                          type="help"
                          size="10"
                          color="white"
                        ></uni-icons>
                        等待揭晓
                      </button>
                      <button
                        v-else
                        size="md"
                        class="bottom-button"
                        @click="addCar(item.goodId)"
                        @tap="add($event, item.goodId)"
                      >
                        <uni-icons
                          type="plus"
                          size="10"
                          color="white"
                        ></uni-icons>
                        加购物车
                      </button>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <uni-load-more :status="moreStatu" />
        </scroll-view>
      </y-tab>
    </y-tabs>
    <view id="good_cart"></view>
    <!-- 只需要绑定购物车位置即可 -->
    <flyInCart ref="inCart" :cartBasketRect="cartBasketRect"></flyInCart>
  </view>
</template>

<script>
import { getMoveMsgList, getGoodList, addGoodToShoppCar } from "@/api/api.js";
import { getShoppGoodCarNum } from "@/common/shoppGoodCarNum.js";
import timeCon from "@/components/timeCon.vue";
import flyInCart from "@/components/flyInCart.vue";
import {
  showStopPageScro,
  hidenRemoveStopEvent,
} from "@/common/disablePageScro.js";
export default {
  components: {
    timeCon,
    flyInCart,
  },
  data() {
    return {
      activeIndex: 0,
      indicatorDots: true,
      autoplay: true,
      src: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
      list: [],
      tabname: ["人气商品", "最新上架", "即将满员"],
      listdata: [],
      listdataTotal: null,
      pageSize: 10,
      orderId: 1,
      navHeight: 0, //元素的所需高度,
      boxHeight: 0, //窗口高度,
      token: null,
      moreStatu: "more",
      //购物车位置数据
      cartBasketRect: {},
      lastId: null, // 保存购物车id
      offsetTop: 0, //粘性定位布局下与顶部的最小距离
      isScrollY: false, // 是否可滚动
    };
  },
  methods: {
    //e 是位置等参数  id是为了重复使用点击位置点  需要保证id不重复  一般商品id不可能重复吧 (#^.^#)
    add(e, id) {
      // 修复滚动scroll时，圆点不在button出来的bug
      if (this.lastId === null || this.lastId !== id) {
        this.lastId = id;
        this.$refs.inCart.addToCart(e, id);
      } else if (this.lastId == id) {
        this.$refs.inCart.addToCart(e, id + 1000);
        setTimeout(() => {
          this.lastId = null;
        });
      }
    },
    // 滚动列表
    getMoveList() {
      getMoveMsgList("/home/getMoveMsgList", {}, false)
        .then((res) => {
          const { code, data, flag } = res;
          if (code === 2000 && flag) {
            uni.stopPullDownRefresh();
            let listcopy = [];
            if (data.length > 0) {
              data.map((item) => {
                let obj = {
                  id: item.userName,
                  name: `恭喜${item.userName}获得${item.goodName}`,
                };
                listcopy.push(obj);
              });
            }
            this.list = listcopy;
          }
        })
        .catch((error) => console.log(error));
    },
    // 标签点击事件
    tabClick(index, item) {
      console.log("tabClick", index, item);
    },
    // 标签切换事件
    tabChange(index, item) {
      this.orderId = index + 1;
      this.getGood();
    },
    lower: function (e) {
      const listdataLength = this.listdata.length;
      if (listdataLength < this.listdataTotal) {
        this.pageSize += 10;
        this.getGood();
      }
    },
    addCar: function (goodId) {
      // 加入购物车，没有登录直接跳转到登录页面
      if (this.token) {
        addGoodToShoppCar(
          "/shoppCar/addGoodToShoppCar",
          {
            goodId,
            num: 1,
            authorization: this.token,
            type: 1, // 在首页添加商品
          },
          false
        )
          .then((res) => {
            const { code, flag, data } = res;
            if (code === 2000 && flag) {
              uni.showToast({
                title: "成功加入购物车！",
                icon: "none",
              });
              getShoppGoodCarNum();
            } else {
              uni.showToast({
                title: data,
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
    getGood: function () {
      this.moreStatu = "loading";
      getGoodList("/home/getGoodList", {
        currentPage: 1,
        orderId: this.orderId,
        pageSize: this.pageSize,
      })
        .then((res) => {
          const { code, data, flag } = res;
          if (code === 2000 && flag) {
            uni.stopPullDownRefresh();
            const { list, total } = data;
            this.listdata = list;
            this.listdataTotal = total;
            if (list.length === total) {
              this.moreStatu = "noMore";
            } else {
              this.moreStatu = "more";
            }
          }
        })
        .catch((error) => console.log(error));
    },
    goDetailGood: function (goodId) {
      uni.navigateTo({
        url: `/pages/detailgood/index?goodId=${goodId}`,
      });
    },
  },
  created() {
    // H5端需要减去顶部导航栏高度
    // #ifdef H5
    this.offsetTop = 43;
    // #endif
  },
  onPullDownRefresh() {
    this.getMoveList();
    this.getGood();
  },
  onLoad() {
    this.$i18n.locale = "en"; // 切换多语言，需要在函数中进行切换
  },
  onPageScroll(e) {
    //调用是因为 重复使用了点击动画位置 保证不抖动。 不传参调用即清空点击点
    this.$refs.inCart.addToCart();
    if (e.scrollTop == 0) {
      this.isScrollY = false;
    }
  },
  onReachBottom(e) {
    if (!this.isScrollY) {
      this.isScrollY = true;
    }
  },
  onReady() {
    let that = this;
    uni.getSystemInfo({
      //调用uni-app接口获取屏幕高度
      success(res) {
        //成功回调函数
        that.boxHeight = res.windowHeight; //windoHeight为窗口高度，主要使用的是这个
        let titleH = uni.createSelectorQuery().in(that).select(".y-tabs"); //想要获取高度的元素名（class/id）
        titleH
          .boundingClientRect((data) => {
            let boxHeight = that.boxHeight; // 得到的单位是px，计算时要将一些rpx数据转成px
            that.navHeight = boxHeight - 260; //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top） 40 是 yui-tab__pane的高度 单位px
          })
          .exec();
      },
    });

    //获取购物车位置
    const self = this;
    let q = uni.createSelectorQuery();
    setTimeout(function () {
      q.select("#good_cart")
        .boundingClientRect((data) => {
          self.cartBasketRect = data;
        })
        .exec();
    }, 100);
  },
  onHide() {
    hidenRemoveStopEvent();
  },
  onShow() {
    this.token = uni.getStorageSync("accessToken");
    this.getGood();
    this.getMoveList();
    showStopPageScro();
  },
};
</script>

<style lang="scss" scoped>
@import "@/uni.scss";
.box {
  width: 100%;
  position: relative;
  .notice_box {
    width: 100%;
    height: 94.63rpx;
  }
  .uni-margin-wrap {
    width: 100%;
    height: 300rpx;
    .swiper {
      height: 300rpx;
      image {
        height: 300rpx;
        width: 100%;
      }
    }
  }
  .y-tabs {
    border-radius: 100rpx;

    .y-tab-virtual {
      position: relative;
      flex-shrink: 0;
      width: 100%;
    }
    .scroll-Y {
      width: 100%;
      .list-data-box {
        .data-box {
          width: 100%;
          border-bottom: 1rpx solid lightgray;
          background-color: white;
          padding: 20rpx 0;
          .good_code {
            font-family: $global-font-family;
            font-weight: 400;
            color: #0a0a0a;
            font-size: 25rpx;
            width: 100%;
            height: 50rpx;
            line-height: 50rpx;
            background-color: #fcf1d9;
            padding-left: 40rpx;
            > text {
              color: #b80505;
            }
          }
          .data-box-bottom {
            display: flex;
            align-items: center;
            .data-box-img {
              height: 288rpx;
              width: 288rpx;
            }
            .right_box {
              width: 462rpx;
              padding: 20rpx 20rpx 0 20rpx;
              .data-text-box {
                margin-bottom: 30rpx;
                .data-text {
                  font-family: $global-font-family;
                  font-weight: 400;
                  color: #0a0a0a;
                  line-height: 0;
                  font-size: 36rpx;
                }
              }
              .renci_box {
                width: 100%;
                margin-bottom: 30rpx;
                display: flex;
                flex-direction: column;
                font-size: 28rpx;
                font-family: $global-font-family;
                font-weight: 400;
                color: #ed885a;
                .openNumber,
                .reqNumber {
                  margin-right: 10rpx;
                }
                .fenli {
                  margin: 0 20rpx;
                }
              }
              .data-bottom {
                width: 100%;
                .bottom-text {
                  display: flex;
                  justify-content: space-between;
                  font-size: 28rpx;
                  font-family: $global-font-family;
                  font-weight: 400;
                  color: #4b4b4b;
                  margin-bottom: 16rpx;
                }
              }
              .daoji_box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .button_box {
                  margin-top: 20rpx;
                  .bottom-button {
                    background-color: #ed885a;
                    font-size: 14px;
                    font-family: $global-font-family;
                    font-weight: 400;
                    color: #ffffff;
                  }
                }
                .djs_box {
                  margin: 24rpx 0;
                  display: flex;
                  flex-direction: column;
                  > text {
                    font-size: 28rpx;
                    font-family: $global-font-family;
                    font-weight: 400;
                    color: #b80505;
                    margin-bottom: 10rpx;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  #good_cart {
    width: 60rpx;
    height: 100rpx;
    background-color: white;
    opacity: 0;
    position: absolute;
    bottom: -100rpx;
    right: 34%;
  }
}

.borderRight {
  border-right: 1px solid lightgray;
}
</style>
