// h5 浏览器禁止双击放大 https://blog.csdn.net/weixin_45463061/article/details/126913291
const noScale = () => {
  // document.addEventListener("touchstart", function (event) {
  //   if (event.touches.length > 1) {
  //     event.preventDefault();
  //   }
  // });
  // let lastTouchEnd = 0;
  // document.addEventListener(
  //   "touchend",
  //   function (event) {
  //     let now = new Date().getTime();
  //     if (now - lastTouchEnd <= 300) {
  //       event.preventDefault();
  //     }
  //     lastTouchEnd = now;
  //   },
  //   false
  // );
  // document.addEventListener("gesturestart", function (event) {
  //   event.preventDefault();
  // });
};

export default noScale;
