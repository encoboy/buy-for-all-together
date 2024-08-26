// 进入页面让页面不滚动
const showStopPageScro = () => {
  let box = function (e) {
    passive: false;
  };
  document.body.style.overflow = "hidden";
  document.addEventListener("touchmove", box, false);
};
const hidenRemoveStopEvent = () => {
  // 禁止页面滚动
  let box = function (e) {
    passive: false;
  };
  document.body.style.overflow = "";
  document.removeEventListener("touchmove", box, false);
};

export { showStopPageScro, hidenRemoveStopEvent };
