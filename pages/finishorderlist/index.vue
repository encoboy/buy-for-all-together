<template>
  <myScrolly
    scrollDirection="y"
    :moreStatu="moreStatu"
    @lowerFunc="lower"
    :scrollY="scrollY"
    loadColor="black"
  >
    <view v-for="(item, index) in listdata" :key="index" class="data-box">
      <view class="title_line_box">
        <view class="img_box">
          <image :src="item.image" mode=""></image>
        </view>
        <view class="title_right">
          <view>商品编号：{{ item.goodCode }}</view>
          <text
            >{{ item.goodName ? item.goodName.slice(0, 25) + "..." : "" }}
          </text>
        </view>
      </view>
      <view class="content_box">
        <view class="line_progress">
          <view>
            <text>购买进度：</text>
            <text>{{ item.buyRate }}%</text>
          </view>
          <progress
            :percent="item.buyRate"
            activeColor="#f98b2b"
            stroke-width="6"
          />
        </view>

        <view class="line">
          <view class="left">
            <text class="line_title">订单编号：</text>
            <text class="line_code">
              {{ item.orderCode ? item.orderCode.split(",")[0] : "" }}
            </text>
          </view>
          <view class="right" @click="goList(item.goodCode, 'orderCode')">
            <text>查看更多</text>
            <uni-icons type="forward" size="20"></uni-icons>
          </view>
        </view>
        <view class="line">
          <view class="left">
            <text class="line_title">下单时间：</text>
            <text class="line_code">
              {{ item.orderTime ? item.orderTime.split(",")[0] : "" }}
            </text>
          </view>
          <view class="right" @click="goList(item.goodCode, 'orderTime')">
            <text>查看更多</text>
            <uni-icons type="forward" size="20"></uni-icons>
          </view>
        </view>
        <view class="line">
          <view class="left">
            <text class="line_title">用户幸运号：</text>
            <text class="line_code">
              {{ item.orderCode ? item.orderCode.split(",")[0] : "" }}
            </text>
          </view>
          <view class="right" @click="goList(item.goodCode, 'userLuckyCode')">
            <text>查看更多</text>
            <uni-icons type="forward" size="20"></uni-icons>
          </view>
        </view>
        <view class="line">
          <view class="left">
            <text class="line_title">揭晓时间：</text>
          </view>
          <view class="right">
            <text>{{ item.openTime }}</text>
          </view>
        </view>
      </view>
      <view class="bottom_line">
        <view class="left">
          <text>幸运号：</text>
          <text>{{ item.luckyCode ? item.luckyCode : "待揭晓" }}</text>
        </view>
        <view :class="item.luckyFlag == '中奖' ? 'right_open' : 'right_not'">
          <text>{{ item.luckyFlag }}</text>
        </view>
      </view>
    </view>
  </myScrolly>
</template>

<script>
import { getUserOrderList } from "@/api/api.js";
import myScrolly from "@/components/myScrolly.vue";
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
      listdata: [],
      listdataTotal: null,
      pageSize: 10,
      moreStatu: "more",
      scrollY: "scroll-Y",
    };
  },
  methods: {
    goList(goodCode, type) {
      uni.navigateTo({
        url: `/pages/codeList/index?goodCode=${goodCode}&type=${type}`,
      });
    },
    lower: function (e) {
      const listdataLength = this.listdata.length;
      if (listdataLength < this.listdataTotal) {
        this.pageSize += 10;
        this.getlist();
      }
    },
    getlist() {
      this.moreStatu = "loading";
      getUserOrderList(
        "/userCenter/getUserOrderList",
        {
          currentPage: 1,
          pageSize: this.pageSize,
        },
        this.pageSize === 10 ? true : false
      )
        .then((res) => {
          const { code, flag, data } = res;
          if (code === 2000 && flag) {
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
  },
  onLoad() {
    this.getlist();
  },
  onShow() {
    showStopPageScro();
  },
  onHide() {
    hidenRemoveStopEvent();
  },
};
</script>

<style lang="scss" scoped>
@import "@/uni.scss";
.data-box {
  padding: 20rpx 30rpx;
  background-color: white;
  margin: 15rpx 20rpx;
  border-radius: 10rpx;

  .title_line_box {
    display: flex;
    border-bottom: 1px solid lightgray;
    align-items: center;
    margin-bottom: 20rpx;
    padding-bottom: 10rpx;
    .img_box {
      > image {
        width: 117rpx;
        height: 117rpx;
      }
    }
    .title_right {
      margin-left: 30rpx;
      > view {
        font-size: 32rpx;
        font-family: $global-font-family;
        font-weight: bold;
        color: #0a0a0a;
      }
      > text {
        font-size: 25rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #8d8d8d;
      }
    }
  }
  .content_box {
    border-bottom: 1rpx dashed lightgray;
    padding-bottom: 15rpx;
    .line_progress {
      margin-bottom: 20rpx;
      > view {
        display: flex;
        justify-content: space-between;
        font-size: 25rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #000000;
        margin-bottom: 15rpx;
      }
    }
    .line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 30rpx 0;
      .left {
        font-size: 25rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #000000;
      }
      .right {
        font-size: 25rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #848484;
        display: flex;
        align-items: center;
      }
    }
  }
  .bottom_line {
    display: flex;
    justify-content: space-between;
    margin-top: 20rpx;
    .left {
      font-size: 25rpx;
      font-family: $global-font-family;
      font-weight: 400;
      color: #000000;
    }
    .right_open {
      width: 131rpx;
      height: 42rpx;
      background: #cbffce;
      border-radius: 0rpx 0rpx 0rpx 0rpx;
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      > text {
        font-size: 25rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #468e1d;
        line-height: 0rpx;
      }
    }
    .right_not {
      width: 131rpx;
      height: 42rpx;
      background: #e6e6e6;
      border-radius: 0rpx 0rpx 0rpx 0rpx;
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      > text {
        font-size: 25rpx;
        font-family: $global-font-family;
        font-weight: 400;
        color: #606060;
        line-height: 0rpx;
      }
    }
  }
}
</style>
