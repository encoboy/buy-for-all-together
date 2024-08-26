<template>
  <view class="img_title">
    <image src="../../static/rule/bg.png" />
  </view>
  <view class="box_con">
    <view class="box">
      <view class="title"> <image src="../../static/rule/wanfa.png" /> </view>
      <text class="text_box1">
        每件商品参考市场价平分成相应“等份”，每份1元，1份对应1个参与码。
        同一件商品可以购买多次或一次购买多份。
      </text>
      <text class="text_box2">
        当一件商品所有“等份”全部售出后计算出“幸运参与码”，
        拥有“幸运参与码”者即可获得此商品。
      </text>
    </view>
    <view class="box">
      <view class="title"> <image src="../../static/rule/jisuan.png" /> </view>
      <text class="text_box1">
        取该商品最后购买时间前网站所有商品100条购买时间记录(限时揭晓商品取截止
        时间前网站所有商品100条购买时间记录)。
      </text>
      <text class="text_box3">
        时间按时、分、毫秒依次排列组成一组数值。将这100组数值之和除以商品总需参与人次取余数，余数加上10000001即为
      </text>
      <text class="text_box2">“幸运参与码”。</text>
    </view>
    <view class="bottom_text">
      <text>当一件商品达到总参与人数，抽出一名商品获奖者</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
@import "@/uni.scss";
.img_title {
  width: 100%;
  height: 422rpx;
  background-color: #f2294b;
  > image {
    height: 422rpx;
    width: 100%;
  }
}
.box_con {
  background-color: #feecd0;
  height: 90vh;
  padding-top: 20rpx;
  .box {
    margin: 0 20rpx;
    padding: 0 30rpx;
    .title {
      margin: 20rpx 0;
      > image {
        height: 84rpx;
      }
    }
    .text_box1 {
      font-size: 25rpx;
      font-family: $global-font-family;
      color: #85302c;
      line-height: 63rpx;
    }
    .text_box2 {
      font-size: 25rpx;
      font-family: $global-font-family;
      font-weight: bold;
      color: #ff0700;
      line-height: 63rpx;
    }
    .text_box3 {
      font-size: 25rpx;
      font-family: $global-font-family;
      color: #ff0700;
      line-height: 63rpx;
    }
  }
  .bottom_text {
    background-color: #feecd0;
    margin: 30rpx auto 20rpx;
    border: 1rpx solid #d82341;
    height: 150rpx;
    width: 500rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 60rpx;
    > text {
      font-size: 32rpx;
      font-family: $global-font-family;
      font-weight: bold;
      color: #ff0700;
    }
  }
}
</style>
