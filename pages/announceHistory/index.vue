<template>
  <view v-for="(item, index) in listdata" :key="index" class="data-box">
    <view><text class="title">商品名称:</text>{{ item.goodName }}</view>
    <view><text class="title">中奖用户:</text>{{ item.userName }}</view>
    <view><text class="title">幸运号:</text>{{ item.luckyCode }}</view>
  </view>
</template>

<script>
import { getGoodOneMsgList } from "@/api/api.js";

export default {
  data() {
    return {
      listdata: [],
    };
  },
  methods: {
    getlist(param) {
      getGoodOneMsgList("/home/getGoodOneMsgList", {
        goodId: param.goodId,
      })
        .then((res) => {
          const { code, flag, data } = res;
          if (code === 2000 && flag) {
            this.listdata = data.hostoryList;
          }
        })
        .catch((error) => console.log(error));
    },
  },
  onLoad(param) {
    this.getlist(param);
  },
};
</script>

<style lang="scss" scoped>
@import "@/uni.scss";
.data-box {
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 30rpx 20rpx;
  border-radius: 10rpx;
  padding: 20rpx 15rpx;
  line-height: 50rpx;
  > text {
    font-size: 32rpx;
    font-family: $global-font-family;
    font-weight: 400;
    color: #4b4b4b;
  }
  .title {
    font-weight: 600;
  }
}
</style>
