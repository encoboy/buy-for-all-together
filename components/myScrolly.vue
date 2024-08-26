<template>
  <scroll-view
    :scroll-y="scrollDirection"
    :class="scrollY"
    @scrolltolower="lower"
    :style="{ height: navHeight + 'px' }"
  >
    <slot></slot>
    <uni-load-more :color="loadColor" :status="moreStatu" />
  </scroll-view>
</template>

<script>
export default {
  props: {
    scrollDirection: String,
    moreStatu: String,
    scrollY: {
      type: String,
      default: "scroll-Y",
    },
    loadColor: String,
    otherEleHeight: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      pH: 0, //窗口高度
      navHeight: 0, //元素的所需高度
    };
  },
  methods: {
    lower() {
      this.$emit("lowerFunc");
    },
  },
  mounted() {
    let that = this;
    uni.getSystemInfo({
      //调用uni-app接口获取屏幕高度
      success(res) {
        //成功回调函数
        that.pH = res.windowHeight; //windoHeight为窗口高度，主要使用的是这个
        let titleH = uni.createSelectorQuery().select(`.${that.scrollY}`); //想要获取高度的元素名（class/id）
        titleH
          .boundingClientRect((data) => {
            let pH = that.pH;
            that.navHeight = pH - data.top - that.otherEleHeight; //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
          })
          .exec();
      },
    });
  },
};
</script>

<style></style>
