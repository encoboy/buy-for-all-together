<template>
  <CustomHeader :title="title" />
  <view class="head_box">
    <view class="line_box">
      <image src="@/static/computeLuckCode/A.png" />
      <text>=</text>
      <text>截至该商品开奖时间点前全站最后50个参与记录的时间数值之和</text>
    </view>
    <view class="gonshi_box">
      <view class="code"> <text>幸运</text><text>号码</text> </view>
      <text class="text">=</text>
      <view class="chushu_box">
        <view class="chushu">
          <text class="text">数值</text>
          <image src="@/static/computeLuckCode/A.png" />
        </view>
        <view class="line"></view>
        <view class="chushu">
          <text class="text">商品总需人</text>
          <image src="@/static/computeLuckCode/shu.png" />
        </view>
      </view>
      <text class="yushu">（取余数）</text>
      <text class="text">+</text>
      <text class="liehao">10000001</text>
    </view>
  </view>
  <view class="table_title">
    <text>下单时间</text>
    <text>订单号</text>
    <text>用户账号</text>
  </view>
  <myScrolly
    scrollDirection="y"
    :moreStatu="moreStatu"
    @lowerFunc="lower"
    :scrollY="scrollY"
    loadColor="black"
  >
    <view v-for="(item, index) in lastOrderListData.list" :key="index">
      <view
        class="table_line_box"
        :class="[index % 2 ? danClass : shuangClass]"
      >
        <view>{{ item.createTime }}</view>
        <view>{{ item.orderCode }}</view>
        <view>{{ filtersNoPassByName(item.userName) }}</view>
      </view>
    </view>
  </myScrolly>
</template>
<script setup>
import { ref, reactive } from "vue";
import { onLoad, onShow, onHide } from "@dcloudio/uni-app";
import CustomHeader from "@/components/customHeader.vue";
import { getLatestDisclosureList } from "@/api/api.js";
import myScrolly from "@/components/myScrolly.vue";
import {
  showStopPageScro,
  hidenRemoveStopEvent,
} from "@/common/disablePageScro.js";
let title = ref("");
const scrollY = ref("scroll-Y");
const moreStatu = ref("nomore");
const danClass = ref("dan");
const shuangClass = ref("shuang");
let lastOrderListData = reactive({ list: [] });
const getData = (luckyCode) => {
  getLatestDisclosureList("/latest/getLatestDisclosureList", {
    currentPage: 1,
    pageSize: 1000,
  })
    .then((res) => {
      const { code, flag, data } = res;
      if (code === 2000 && flag) {
        const list = data.list;
        const objData = list.find((item) => item.luckyCode == luckyCode);
        const lastOrderList = objData.lastOrderList || [];
        lastOrderListData.list = lastOrderList;
        title.value = objData.goodName.slice(0, 15) + "...";
      }
    })
    .catch((error) => console.log(error));
};
const lower = () => {
  console.log("99");
};
const filtersNoPassByName = (str) => {
  if (null != str && str != undefined) {
    if (str.length == 11) {
      return str.substring(0, 3) + "****" + str.substring(7, str.length); //截取第一个和大于第4个字符
    } else {
      return str;
    }
  } else {
    return "";
  }
};
onLoad((params) => {
  console.log("par", params);
  getData(params.luckyCode);
});
onShow(() => {
  showStopPageScro();
});
onHide(() => {
  hidenRemoveStopEvent();
});
</script>
<style lang="scss" scoped>
@import "@/uni.scss";
.head_box {
  background-color: white;
  padding: 20rpx 30rpx;
  .line_box {
    background-color: #fcf1d9;
    border-radius: 10rpx;
    padding: 15rpx;
    display: flex;
    align-items: center;
    > image {
      height: 40rpx;
      width: 42rpx;
    }
    > text {
      font-size: 12px;
      font-family: $global-font-family;
      font-weight: 400;
      color: #646464;
      margin-left: 20rpx;
    }
  }
  .gonshi_box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20rpx;
    .code {
      width: 65px;
      height: 65px;
      background: #eb5a4b;
      border-radius: 4px 4px 4px 4px;
      font-size: 18px;
      font-family: $global-font-family;
      font-weight: 400;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .chushu_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      .line {
        border: 1rpx solid #646464;
        width: 150rpx;
        margin: 10rpx;
      }
      .chushu {
        display: flex;
        align-items: center;
        > image {
          height: 40rpx;
          width: 42rpx;
          margin-left: 5rpx;
        }
      }
    }
    .yushu {
      writing-mode: vertical-lr;
      font-size: 28rpx;
      font-family: $global-font-family;
      font-weight: 400;
      color: #5a5a5a;
      margin-left: 10rpx;
    }
    .liehao {
      font-size: 14px;
      font-family: $global-font-family;
      font-weight: 400;
      color: #eb5a4b;
      margin-left: 10rpx;
    }
    .text {
      font-size: 12px;
      font-family: $global-font-family;
      font-weight: 400;
      color: #646464;
      margin-left: 20rpx;
    }
  }
}
.table_title {
  width: 100%;
  height: 53rpx;
  background: #208fd2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :nth-child(1) {
    flex: 2;
  }
  :nth-child(2) {
    flex: 1;
  }
  > text {
    font-size: 25rpx;
    font-family: $global-font-family;
    font-weight: 400;
    color: #ffffff;
    margin: 0 15rpx;
  }
}
.table_line_box {
  height: 53rpx;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :nth-child(1) {
    flex: 2;
  }
  :nth-child(2) {
    flex: 1;
  }
  > view {
    font-size: 25rpx;
    font-family: $global-font-family;
    font-weight: 400;
    margin: 0 15rpx;
  }
}
.dan {
  background-color: #ffffff;
}
.shuang {
  background-color: #ebf7ff;
}
</style>
