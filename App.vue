<template>
  <view></view>
</template>
<script>
import { getShoppGoodCarNum } from "@/common/shoppGoodCarNum.js";
import noScale from "./common/noScale";
export default {
  data() {
    return {};
  },
  onLaunch: function () {
    getShoppGoodCarNum();
    noScale();
  },
  onShow: function () {
    const swichTabUrlArr = [
      "pages/index/index",
      "pages/latestdisclosure/index",
      "pages/my/index",
    ];
    let routes = getCurrentPages();
    const lastRoute = Array.isArray(routes)
      ? routes[routes?.length - 1]?.route
      : false;
    if (lastRoute && swichTabUrlArr.includes(lastRoute)) {
      getShoppGoodCarNum();
    }
  },
  onLoad: function () {
    // #ifdef H5
    document.body.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
    // #endif
  },
  onHide: function () {},
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "@/uni_modules/uni-scss/index.scss";
@import "@/uni.scss";
/* #ifndef APP-NVUE */
@import "@/static/iconfont.css";

// 设置整个项目的背景色
page {
  background-color: #f5f5f5;
}

/* #endif */
.example-info {
  font-size: 28rpx;
  color: #333;
  padding: 20rpx;
}

/* #ifdef H5  */
// 隐藏所有页面头部的title
// .uni-page-head {
// 	display: none;
// }
// progress 进度条统一圆角
.uni-progress-bar {
  border-radius: 120rpx;
  .uni-progress-inner-bar {
    border-radius: 120rpx;
  }
}

/* #endif */
</style>
