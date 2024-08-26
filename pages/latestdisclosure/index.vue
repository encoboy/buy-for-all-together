<template>
  <myScrolly
    scrollDirection="y"
    :moreStatu="moreStatu"
    @lowerFunc="lower"
    :scrollY="scrollY"
    loadColor="white"
  >
    <view v-for="(item, index) in listdata" :key="index" class="data-box">
      <view class="title_box">
        <view>商品编号:{{ item.goodCode }}</view>
        <view @click="goLuckCode(item.luckyCode)">查看幸运号计算结果</view>
      </view>
      <view class="content_box">
        <view class="img_box">
          <image :src="item.image" mode=""></image>
        </view>
        <view class="right_box">
          <text class="title_name">获奖者:{{ item.userName }}</text>

          <text class="title_lucky">
            用户ID:{{ item.userId }}
            <text class="fuhao">（唯一不变标识）</text>
          </text>

          <text class="title_lucky">幸运号码:{{ item.luckyCode }}</text>
        </view>
      </view>
      <view class="title_line_box">
        <text>揭晓时间：{{ item.openTime }}</text>
      </view>
    </view>
  </myScrolly>
</template>

<script>
import { getLatestDisclosureList } from "@/api/api.js";
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
    goLuckCode: function (luckyCode) {
      uni.navigateTo({
        url: `/pages/computeLuckyCode/index?luckyCode=${luckyCode}`,
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
      getLatestDisclosureList("/latest/getLatestDisclosureList", {
        currentPage: 1,
        pageSize: this.pageSize,
      })
        .then((res) => {
          const { code, flag, data } = res;
          if (code === 2000 && flag) {
            uni.stopPullDownRefresh();
            this.listdata = data.list;
            this.listdataTotal = data.total;
            if (data.list.length === data.total) {
              this.moreStatu = "noMore";
            } else {
              this.moreStatu = "more";
            }
          }
        })
        .catch((error) => console.log(error));
    },
  },
  onPullDownRefresh() {
    this.getlist();
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
.scroll-Y {
  background-color: #8d000f;
  .title_box {
    display: flex;
    justify-content: space-between;
    font-family: $global-font-family;
    font-weight: 400;
    :nth-child(1) {
      font-size: 25rpx;
    }
    :nth-child(2) {
      padding: 8rpx 5rpx;
      font-size: 21rpx;
      background-color: #2f6ee2;
      color: white;
      border-radius: 8rpx;
    }
  }

  .data-box {
    padding: 30rpx 24rpx;
    background-color: #fdf4e0;
    margin: 20rpx 30rpx;
    border-radius: 10rpx;
  }
  .title_line_box {
    font-family: $global-font-family;
    font-size: 21rpx;
    font-weight: 400;
    width: 100%;
    color: #707378;
    margin-top: 20rpx;
  }

  .content_box {
    border-bottom: 1rpx solid #c7090e;
    display: flex;
    padding: 20rpx;

    .img_box {
      > image {
        width: 200rpx;
        height: 200rpx;
      }
      margin-right: 24rpx;
    }

    .right_box {
      font-size: 28rpx;
      flex: 1;
      font-family: $global-font-family;
      font-size: 32rpx;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title_name {
        color: #0a0a0a;
      }

      .title_lucky {
        color: #c7090e;
        .fuhao {
          font-size: 18rpx;
        }
      }
    }
  }
}
</style>
