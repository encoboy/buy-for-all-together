<template>
  <customHeader
    :title="
      type == 'orderCode'
        ? '订单编号'
        : type == 'orderTime'
        ? '下单时间'
        : '用户幸运号'
    "
  />
  <viwe class="title_box">
    <view class="line"></view>
    <text>{{
      type == "orderCode"
        ? "订单编号"
        : type == "orderTime"
        ? "下单时间"
        : "用户幸运号"
    }}</text>
  </viwe>
  <myScrolly
    scrollDirection="y"
    :moreStatu="moreStatu"
    @lowerFunc="lower"
    :scrollY="scrollY"
    loadColor="black"
  >
    <view class="line_box" v-for="(item, index) in list" :key="index">
      <view class="line"> {{ item }} </view>
    </view>
  </myScrolly>
</template>
<script>
import customHeader from "@/components/customHeader.vue";
import { getUserOrderList } from "@/api/api.js";
import myScrolly from "@/components/myScrolly.vue";
export default {
  components: {
    customHeader,
    myScrolly,
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    goodCode: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      list: [],
      scrollY: "scroll-Y",
      moreStatu: "nomore",
    };
  },
  methods: {
    getList: function () {
      getUserOrderList("/userCenter/getUserOrderList", {
        currentPage: 1,
        pageSize: 100,
      })
        .then((res) => {
          const { code, flag, data } = res;
          if (code === 2000 && flag) {
            const { list } = data;
            let obj = list.find((item) => item.goodCode === this.goodCode);
            let code = obj[this.type];
            console.log("code", code);
            let codeArr;
            if (code) {
              codeArr = code.split(",");
            }
            this.list = codeArr;
          }
        })
        .catch((error) => console.log(error));
    },
  },
  onLoad() {
    this.getList();
  },
};
</script>
<style lang="scss" scoped>
@import "@/uni.scss";
.title_box {
  height: 80rpx;
  display: flex;
  align-items: center;
  padding: 15rpx 0 15rpx 30rpx;
  .line {
    width: 12rpx;
    height: 37rpx;
    background: #4397d6;
    border-radius: 5rpx 5rpx 5rpx 5rpx;
    opacity: 1;
  }
  > text {
    font-size: 32rpx;
    font-family: $global-font-family;
    font-weight: 400;
    color: #000000;
    margin-left: 20rpx;
  }
}
.line_box {
  border-bottom: 1rpx solid lightgray;
  padding: 20rpx 25rpx;
  background-color: white;
  .line {
    font-size: 32rpx;
    font-family: $global-font-family;
    font-weight: 400;
    color: #919191;
  }
}
</style>
