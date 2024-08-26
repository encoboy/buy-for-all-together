<template>
  <view class="title_box2">
    <view class="left_icon" @click="goback">
      <uni-icons type="back" size="25"></uni-icons>
    </view>
    <view>{{ title }} </view>
    <view></view>
  </view>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {},
  methods: {
    goback() {
      uni.navigateBack({
        delta: 1,
        success: () => {},
        fail: () => {},
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.title_box2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100rpx;
  background-color: white;
  align-items: center;
}
</style>
