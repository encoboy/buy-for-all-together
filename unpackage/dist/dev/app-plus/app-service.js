if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const icons = {
    "pulldown": "",
    "refreshempty": "",
    "back": "",
    "forward": "",
    "more": "",
    "more-filled": "",
    "scan": "",
    "qq": "",
    "weibo": "",
    "weixin": "",
    "pengyouquan": "",
    "loop": "",
    "refresh": "",
    "refresh-filled": "",
    "arrowthindown": "",
    "arrowthinleft": "",
    "arrowthinright": "",
    "arrowthinup": "",
    "undo-filled": "",
    "undo": "",
    "redo": "",
    "redo-filled": "",
    "bars": "",
    "chatboxes": "",
    "camera": "",
    "chatboxes-filled": "",
    "camera-filled": "",
    "cart-filled": "",
    "cart": "",
    "checkbox-filled": "",
    "checkbox": "",
    "arrowleft": "",
    "arrowdown": "",
    "arrowright": "",
    "smallcircle-filled": "",
    "arrowup": "",
    "circle": "",
    "eye-filled": "",
    "eye-slash-filled": "",
    "eye-slash": "",
    "eye": "",
    "flag-filled": "",
    "flag": "",
    "gear-filled": "",
    "reload": "",
    "gear": "",
    "hand-thumbsdown-filled": "",
    "hand-thumbsdown": "",
    "hand-thumbsup-filled": "",
    "heart-filled": "",
    "hand-thumbsup": "",
    "heart": "",
    "home": "",
    "info": "",
    "home-filled": "",
    "info-filled": "",
    "circle-filled": "",
    "chat-filled": "",
    "chat": "",
    "mail-open-filled": "",
    "email-filled": "",
    "mail-open": "",
    "email": "",
    "checkmarkempty": "",
    "list": "",
    "locked-filled": "",
    "locked": "",
    "map-filled": "",
    "map-pin": "",
    "map-pin-ellipse": "",
    "map": "",
    "minus-filled": "",
    "mic-filled": "",
    "minus": "",
    "micoff": "",
    "mic": "",
    "clear": "",
    "smallcircle": "",
    "close": "",
    "closeempty": "",
    "paperclip": "",
    "paperplane": "",
    "paperplane-filled": "",
    "person-filled": "",
    "contact-filled": "",
    "person": "",
    "contact": "",
    "images-filled": "",
    "phone": "",
    "images": "",
    "image": "",
    "image-filled": "",
    "location-filled": "",
    "location": "",
    "plus-filled": "",
    "plus": "",
    "plusempty": "",
    "help-filled": "",
    "help": "",
    "navigate-filled": "",
    "navigate": "",
    "mic-slash-filled": "",
    "search": "",
    "settings": "",
    "sound": "",
    "sound-filled": "",
    "spinner-cycle": "",
    "download-filled": "",
    "personadd-filled": "",
    "videocam-filled": "",
    "personadd": "",
    "upload": "",
    "upload-filled": "",
    "starhalf": "",
    "star-filled": "",
    "star": "",
    "trash": "",
    "phone-filled": "",
    "compose": "",
    "videocam": "",
    "trash-filled": "",
    "download": "",
    "chatbubble-filled": "",
    "chatbubble": "",
    "cloud-download": "",
    "cloud-upload-filled": "",
    "cloud-upload": "",
    "cloud-download-filled": "",
    "headphones": "",
    "shop": ""
  };
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$m = {
    name: "UniIcons",
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customIcons: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons
      };
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $props.size + "px" }),
        class: vue.normalizeClass(["uni-icons", [$props.customIcons, $props.customIcons ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      vue.toDisplayString($data.icons[$props.type]),
      7
      /* TEXT, CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-f218fb61"], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$l = {
    name: "xzw-notice",
    props: {
      //主题色,default|primary|error|warning|success|info
      theme: {
        type: String,
        default: "default"
      },
      // 是否显示左侧icon
      showIcon: {
        type: [Boolean, String],
        default: true
      },
      // 是否显示更多
      showMore: {
        type: [Boolean, String],
        default: true
      },
      list: {
        type: Array,
        default() {
          return [{ id: 1, title: "公告1" }, { id: 2, title: "公告2" }];
        }
      },
      //公告数组的键名
      theKey: {
        type: String,
        default: "title"
      },
      //方向，column垂直，row水平时取第一条公告
      direction: {
        type: String,
        default: "column"
      }
    },
    data() {
      return {
        text: ""
      };
    },
    methods: {
      getColor(theme) {
        if (theme == "primary") {
          return "#1296db";
        } else if (theme == "error") {
          return "#FA3534";
        } else if (theme == "warning") {
          return "#FF9A43";
        } else if (theme == "success") {
          return "#1BBF6C";
        } else if (theme == "info") {
          return "#909399";
        } else {
          return "#303133";
        }
      },
      getBgColor(theme) {
        if (theme == "primary") {
          return "#ECF5FF";
        } else if (theme == "error") {
          return "#FEF0F0";
        } else if (theme == "warning") {
          return "#FDF6EC";
        } else if (theme == "success") {
          return "#DBF1E1";
        } else if (theme == "info") {
          return "#F4F4F5";
        } else {
          return "#FFFFFF";
        }
      },
      goItem(item) {
        this.$emit("goItem", item);
      },
      goMore() {
        this.$emit("goMore");
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "xzw_notice",
        style: vue.normalizeStyle({ color: $options.getColor($props.theme), backgroundColor: $options.getBgColor($props.theme) })
      },
      [
        $props.showIcon === true || $props.showIcon === "true" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "notice_left",
          type: "sound",
          color: $options.getColor($props.theme),
          size: "22"
        }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true),
        $props.direction == "column" ? (vue.openBlock(), vue.createElementBlock("swiper", {
          key: 1,
          class: "notice_center",
          vertical: "",
          autoplay: true,
          interval: 4e3,
          duration: 500,
          circular: true,
          "disable-touch": ""
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", {
                key: index,
                class: "swiperIn",
                onClick: ($event) => $options.goItem(item)
              }, [
                vue.createElementVNode(
                  "view",
                  { style: { "color": "black" } },
                  vue.toDisplayString(item[$props.theKey]),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "notice_center2"
        }, [
          vue.createElementVNode(
            "view",
            null,
            vue.toDisplayString($props.list[0][$props.theKey]),
            1
            /* TEXT */
          )
        ])),
        $props.showMore ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 3,
          class: "notice_right"
        }, [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goMore && $options.goMore(...args))
          }, "更多")
        ])) : vue.createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-627bc1d4"], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/components/xzw-notice/xzw-notice.vue"]]);
  function isNull(val) {
    if (typeof val == "boolean") {
      return false;
    }
    if (typeof val == "number") {
      return false;
    }
    if (val instanceof Array) {
      if (val.length == 0)
        return true;
    } else if (val instanceof Object) {
      if (JSON.stringify(val) === "{}")
        return true;
    } else {
      if (val == "null" || val == null || val == "undefined" || val == void 0 || val == "")
        return true;
      return false;
    }
    return false;
  }
  function isDef(val) {
    return val !== void 0 && val !== null;
  }
  function isNumeric(val) {
    return /^\d+(\.\d+)?$/.test(val);
  }
  function isObject$2(val) {
    return val !== null && typeof val === "object";
  }
  function noop() {
  }
  function isFunction$1(val) {
    return typeof val === "function";
  }
  function isPromise(val) {
    return isObject$2(val) && isFunction$1(val.then) && isFunction$1(val.catch);
  }
  function addUnit(value) {
    if (!isDef(value)) {
      return void 0;
    }
    value = String(value);
    return isNumeric(value) ? `${value}px` : value;
  }
  function callInterceptor(options) {
    const {
      interceptor,
      args,
      done
    } = options;
    if (interceptor) {
      const returnVal = interceptor(...args);
      if (isPromise(returnVal)) {
        returnVal.then((value) => {
          if (value)
            done();
        }).catch(noop);
      } else if (returnVal) {
        done();
      }
    } else {
      done();
    }
  }
  const rgbaRegex = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/;
  const getColor = function(colorStr) {
    const matches = colorStr.match(rgbaRegex);
    if (matches && matches.length === 5) {
      return [
        matches[1],
        matches[2],
        matches[3],
        matches[4]
      ];
    }
    return [];
  };
  function toClass(classObj, ...classArray) {
    const arr = Object.keys(classObj || {}).filter((key) => classObj[key]);
    arr.push(...classArray);
    return arr.join(" ");
  }
  function getDirection(x, y) {
    if (x > y) {
      return "horizontal";
    }
    if (y > x) {
      return "vertical";
    }
    return "";
  }
  const touchMixin = {
    data() {
      return {
        direction: "",
        startX: "",
        startY: "",
        nextIndex: -1,
        moved: false
        //是否为一次水平滑动
      };
    },
    methods: {
      touchStart(event) {
        if (!this.parent.swipeable) {
          return;
        }
        this.resetTouchStatus();
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
      },
      touchMove(event) {
        if (!this.parent.swipeable) {
          return;
        }
        const touch = event.touches[0];
        this.deltaX = touch.clientX < 0 ? 0 : touch.clientX - this.startX;
        this.deltaY = touch.clientY - this.startY;
        const offsetX = Math.abs(this.deltaX);
        const offsetY = Math.abs(this.deltaY);
        const lock_distance = 10;
        if (!this.direction || offsetX < lock_distance && offsetY < lock_distance) {
          this.direction = getDirection(offsetX, offsetY);
        }
        if (this.direction === "horizontal") {
          const { dataLen, contentWidth, currentIndex, tabs, swipeAnimated } = this.parent;
          const { deltaX } = this;
          if (deltaX > 0 && currentIndex === 0 || deltaX < 0 && currentIndex === dataLen - 1) {
            return;
          }
          this.nextIndex = currentIndex + (deltaX > 0 ? -1 : 1);
          if (tabs[this.nextIndex].disabled) {
            return;
          }
          this.moved = true;
          if (swipeAnimated) {
            const offsetWidth = contentWidth * currentIndex * -1 + deltaX;
            this.parent.changeTrackStyle(true, 0, offsetWidth);
          }
        }
      },
      touchEnd() {
        if (!this.moved) {
          return;
        }
        const { deltaX, nextIndex } = this;
        const { dataLen, swipeThreshold } = this.parent;
        if (Math.abs(deltaX) >= swipeThreshold) {
          this.parent.setCurrentIndex(nextIndex);
        } else {
          this.parent.changeTrackStyle(false);
        }
      },
      resetTouchStatus() {
        this.direction = "";
        this.deltaX = 0;
        this.deltaY = 0;
        this.newIndex = -1;
        this.moved = false;
      }
    }
  };
  const _sfc_main$k = {
    name: "yTab",
    mixins: [touchMixin],
    options: {
      // 微信小程序中 options 选项
      multipleSlots: true,
      //  在组件定义时的选项中启动多slot支持，默认启用
      styleIsolation: "shared",
      //  启动样式隔离。当使用页面自定义组件，希望父组件影响子组件样式时可能需要配置。具体配置选项参见：微信小程序自定义组件的样式
      addGlobalClass: true,
      //  表示页面样式将影响到自定义组件，但自定义组件中指定的样式不会影响页面。这个选项等价于设置 styleIsolation: apply-shared
      virtualHost: true
      //  将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定
    },
    props: {
      title: String,
      // 标题
      disabled: Boolean,
      // 是否禁用标签
      dot: Boolean,
      // 是否在标题右上角显示小红点
      badge: {
        type: [Number, String],
        default: ""
      },
      // 图标右上角徽标的内容
      name: [Number, String],
      // 标签名称，作为匹配的标识符
      titleStyle: Object,
      //	自定义标题样式
      titleClass: String,
      //	自定义标题类名
      iconType: String,
      //图标图案，为uniapp扩展组件（uni-ui）下的uni-icons的type值，customPrefix用法等同
      iconSize: {
        type: Number,
        default: 16
      },
      //图标大小
      customPrefix: String,
      //自定义图标
      imageSrc: String,
      //图片路径
      imageMode: {
        type: String,
        default: "scaleToFill",
        validator(value) {
          return [
            "scaleToFill",
            "aspectFit",
            "aspectFill",
            "widthFix",
            "heightFix",
            "top",
            "bottom",
            "center",
            "left",
            "right",
            "top left",
            "top right",
            "bottom left",
            "bottom right"
          ].includes(value);
        }
      },
      //图片裁剪、缩放的模式，为uniapp内置组件->媒体组件—>image下的mode值
      position: {
        type: String,
        default: "right",
        validator(value) {
          return ["top", "bottom", "left", "right"].includes(value);
        }
      }
      //如果存在图片或图标，标题围绕它们的位置
    },
    data() {
      return {
        index: -1,
        //内容卡片对应的下标
        parent: null,
        //父元素实例
        active: false,
        //是否为激活状态
        rendered: false,
        //是否渲染过
        swipeable: false,
        //是否开启手势滑动切换
        paneStyle: null,
        //内容样式
        scrollspy: false
        //是否为滚动导航模式
      };
    },
    computed: {
      computedName() {
        return !isNull(this.name) ? this.name : this.index;
      }
    },
    watch: {
      $props: {
        deep: true,
        // immediate: true,
        handler(newValue, oldValue) {
          if (this.parent) {
            this.parent.updateTab({
              newValue: { ...newValue },
              oldValue: oldValue && { ...oldValue },
              index: this.index
            });
          }
        }
      }
    },
    created() {
      this.parent = this.getParent();
      if (this.parent) {
        this.parent.children.push(this);
        this.parent.putTab({ newValue: { ...this.$props } });
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      toJSON() {
      },
      // 获取查询节点信息的对象
      getSelectorQuery() {
        let query = null;
        query = uni.createSelectorQuery().in(this);
        return query;
      },
      // 获取元素位置信息
      getRect() {
        return new Promise((resolve, reject) => {
          this.getSelectorQuery().select(".yui-tab__pane").boundingClientRect().exec((rect) => {
            resolve(rect[0] || {});
          });
        });
      },
      // 卸载组件的处理
      unInit() {
        if (this.parent) {
          const index = this.parent.children.findIndex((item) => item === this);
          this.parent.children.splice(index, 1);
          this.parent.tabs.splice(index, 1);
        }
      },
      //获取父元素实例
      getParent(name = "yTabs") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      // 内容class
      paneClass() {
        return `yui-tab__pane${this.index} ${this.active ? "yui-tab__pane--active" : ""} ${this.scrollspy ? "yui-tabs__pane--scrollspy" : ""}`;
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["yui-tab__pane", [$options.paneClass()]]),
        style: vue.normalizeStyle([$data.paneStyle]),
        onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.touchStart && _ctx.touchStart(...args)),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.touchMove && _ctx.touchMove(...args)),
        onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.touchEnd && _ctx.touchEnd(...args))
      },
      [
        ($data.rendered ? true : $data.active) ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "yui-tab__pane--wrap"
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : vue.createCommentVNode("v-if", true)
      ],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    );
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-2d763a4b"], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/uni_modules/y-tabs/components/y-tab/y-tab.vue"]]);
  const model = {
    prop: "modelValue",
    event: "update:modelValue"
  };
  const emits = [
    "update:modelValue",
    "change",
    "click",
    "rendered",
    "scroll"
  ];
  const props = {
    color: {
      type: String,
      default: "#0022AB"
    },
    //标签主题色, 默认值为"#0022AB"
    background: {
      type: String,
      default: "#fff"
    },
    //标签栏背景色,默认值为"#fff"
    lineWidth: [Number, String],
    //底部条宽度，默认单位为px, 默认值为20px(支持数字，支持rpx、vh、vw等单位及calc() 函数)
    lineHeight: [Number, String],
    //底部条高度，默认单位为px,默认值为3px (支持数字，支持rpx、vh、vw等单位及calc() 函数)
    titleActiveColor: String,
    //标题选中态颜色
    titleInactiveColor: String,
    //标题默认态颜色
    // 标签栏样式
    wrapStyle: {
      type: [Object, null],
      default: () => {
      }
    },
    // 动画时间，单位秒
    duration: {
      type: [Number, String],
      default: 0.2
    },
    // v-model绑定属性，绑定当前选中标签的标识符（标签的下标）
    modelValue: {
      type: [Number, String],
      default: 0
    },
    // 样式风格类型，可选值为 text、card、button、line-button
    type: {
      type: String,
      default: "line",
      validator(value) {
        return ["line", "text", "card", "button", "line-button"].includes(value);
      }
    },
    // 是否省略过长的标题文字
    ellipsis: {
      type: Boolean,
      default: true
    },
    // 标签栏滚动时当前标签居中
    scrollToCenter: {
      type: Boolean,
      default: true
    },
    //  标签栏的滚动阈值(仅在ellipsis="false"时有效)，标签数量超过阈值时开始横向滚动(切换时会自动将当前标签居中)
    scrollThreshold: {
      type: [Number, String],
      default: 5
    },
    // 是否开启延迟渲染（首次切换到标签时才触发内容渲染）
    isLazyRender: {
      type: Boolean,
      default: true
    },
    // 是否开启切换标签内容时的转场动画
    animated: {
      type: Boolean,
      default: false
    },
    // 在点击标签标题时，页面是否会滚动回到顶部
    tabClickScrollTop: {
      type: Boolean,
      default: false
    },
    // 切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise
    beforeChange: Function,
    // ---------------------------------- 用于内容区域左右滑动的配置 ----------------------------------------
    // 是否开启手势滑动切换
    swipeable: {
      type: Boolean,
      default: false
    },
    // 是否开启标签内容的拖动动画（该属性依赖于swipeable、is-lazy-render的开启;该属性开启时考虑给包裹内容的容器增加一个min-height，因为开启该属性后，其他未显示出来的标签内容会沿用当前显示的高度，拖动切换后由于高度不一致会有回弹）
    swipeAnimated: {
      type: Boolean,
      default: false
    },
    // 滑动切换的滑动距离阈值，手指滑动页面触发切换的阈值,单位为px，表示横向滑动整个可视区域的多少px时才切换标签内容
    swipeThreshold: {
      type: [Number, String],
      default: 50
    },
    // ---------------------------------- 用于滚动吸顶的配置 ----------------------------------------
    // 是否使用粘性定位布局
    sticky: Boolean,
    // 粘性布局的判断阈值
    stickyThreshold: {
      type: Number,
      default: 0
    },
    // 粘性布局下与顶部的最小距离，默认 px
    offsetTop: {
      type: Number,
      default: 0
    },
    // 粘性布局下标签栏的z-index值
    zIndex: {
      type: Number,
      default: 99
    },
    // 标题栏背景色是否透明渐变
    transparent: {
      type: Boolean,
      default: false
    },
    // 标题栏背景色透明的滚动距离
    transparentOffset: {
      type: Number,
      default: 150
    },
    // 滚动导航: 通过 scrollspy 属性可以开启滚动导航模式，该模式下，内容将会平铺展示并滚动
    scrollspy: Boolean,
    // 滚动导航模式下标签栏的展示方位,可选值：vertical(若scrollspy为true，direction为vertical，则标签栏与内容均垂直滚动，即为侧边栏导航)
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].includes(value);
      }
    },
    // 标签栏高度，单位默认为px(支持数字、rpx、vh、vw等单位及calc() 函数)
    // 在direction="horizontal"下，即为标签栏水平展示时，默认为40px；
    // 在侧边栏导航下，默认该值为侧边栏在屏幕可见区域的高度（如果自行设置该值的话，在H5端则需减去顶部导航栏高度）
    navHeight: [Number, String, null],
    // 标签栏宽度，单位默认为px(支持数字、rpx、vh、vw等单位及calc() 函数)
    // 在direction="horizontal"下，即为标签栏水平展示时，跟随父容器的宽度；
    // 在direction="vertical"下，即为侧边栏导航下，默认为100px；
    navWidth: [Number, String, null],
    // 内容区域是否为页面级滚动：为true时，整体区域跟随页面而滚动，为false时，内容区域是放在scroll-view中实现的局部滚动
    pageScroll: Boolean,
    // 滚动导航模式（局部滚动）下的内容高度(该属性仅在scrollspy为true、且pageScroll为false下生效，用于设置内容滚动为局部滚动时所需要的高度)
    // 默认为内容区域在屏幕视口中的可见高度
    contentHeight: [Number, String, null]
  };
  const _sfc_main$j = {
    name: "yTabs",
    // shared:表示页面 wxss 样式将影响到自定义组件
    options: {
      styleIsolation: "shared"
    },
    model,
    emits,
    props,
    data() {
      return {
        children: [],
        // 存放子组件数组
        tabs: [],
        //存放标题栏数据
        timer: null,
        initTimer: null,
        reseted: false,
        currentIndex: null,
        //当前选中下标
        // 标签栏的scroll-view相关
        scrollId: "",
        //值应为某子元素id（id不能以数字开头）；设置哪个方向可滚动，则在哪个方向滚动到该元素
        scrollLeft: 0,
        //设置横向滚动条位置
        // scrollTop: 0, //设置竖向滚动条位置
        // 内容区域的scroll-view相关
        paneScrollTop: 0,
        //设置竖向滚动条位置
        // 标签栏底部线条动画相关
        lineWidthValue: 20,
        //底部线条宽度值
        lineHeightValue: 20,
        //底部线条高度值
        lineAnimated: false,
        //是否开启标签栏底部线条动画（首次不开启）
        lineAnimatedStyle: {
          transform: "translateX(-100%) translateX(0%)",
          transition: "none"
        },
        //标签栏底部线条动画样式
        isFixed: false,
        //是否吸顶
        halfWrapWidth: 0,
        //一半的标题栏区域宽度
        placeholderHeight: 0,
        //标题栏占位高度
        wrapTop: 0,
        //标签栏区域顶部与屏幕顶部的距离
        wrapBottom: 0,
        //标题栏区域底部与屏幕顶部的距离
        extraWidth: 0,
        //标签栏nav-left、nav-right插槽宽度
        extraHeight: 0,
        //标签栏nav-left、nav-right插槽高度
        contentWidth: 0,
        //内容区域宽度
        contentTop: 0,
        //内容区域与屏幕顶部的距离
        dependOffsetTop: 0,
        //依赖元素与屏幕顶端的最小距离
        // windowHeight: 0, //可使用窗口高度
        trackStyle: null,
        //标签内容滑动轨道样式
        lockedScrollspy: false,
        //锁定滚动导航模式下点击标题栏触发的滚动逻辑
        scrollTop: 0,
        //页面垂直滚动距离
        transparentBgColor: "rgba(255,255,255,0)",
        //标题栏透明背景色
        defaultNavHeight: "100vh"
        //默认导航区域高度
      };
    },
    computed: {
      // 标签栏是否垂直展示
      scrollY() {
        return this.direction === "vertical";
      },
      // 是否为滚动导航
      scrollNav() {
        return this.scrollspy && !this.scrollY;
      },
      // 是否为侧边栏导航
      sidebarNav() {
        return this.scrollspy && this.scrollY;
      },
      // 样式风格是否为line
      isLine() {
        return this.type === "line";
      },
      // 标签页class
      tabsClass() {
        return toClass({ "yui-tabs--vertical": this.scrollY }, `yui-tabs--${this.type}`);
      },
      // 导航栏区域class
      wrapClass() {
        return toClass(
          {
            "yui-tabs__wrap--fixed": this.isFixed,
            "yui-tabs__wrap--transparent": this.transparent,
            "yui-tabs__wrap--vertical": this.scrollY
          },
          `yui-tabs__wrap--${this.type}`
        );
      },
      // 导航栏class
      navClass() {
        return toClass({ "yui-tabs__nav--vertical": this.scrollY }, `yui-tabs__nav--${this.type}`);
      },
      // 内容卡片class
      contentClass() {
        return toClass({
          "yui-tabs__content--animated": this.animated,
          "yui-tabs__content--scrollspy": this.scrollspy,
          "yui-tabs__content--vertical": this.scrollY
        });
      },
      // 底部条class
      lineClass() {
        return toClass({ "yui-tabs__line--vertical": this.scrollY });
      },
      // 导航栏区域样式
      innerWrapStyle() {
        const style = { background: !this.transparent ? this.background : this.transparentBgColor };
        if (this.type === "card")
          style.borderColor = this.color;
        if (this.isFixed) {
          style.top = this.offsetTop + "px";
        }
        style.width = !isNull(this.navWidth) ? addUnit(this.navWidth) : "";
        return style;
      },
      // 内容区域样式
      contentStyle() {
        const style = {};
        if (this.scrollY)
          style.width = !isNull(this.navWidth) ? `calc(100% - ${addUnit(this.navWidth)})` : "";
        return style;
      },
      // 标签栏scroll-view样式
      scrollStyle() {
        let { scrollY, extraWidth, extraHeight, navHeight, offsetTop, dependOffsetTop } = this;
        let height = "";
        if (scrollY) {
          if (isNull(navHeight)) {
            height = `100vh - ${this.isFixed ? this.offsetTop : this.dependOffsetTop}px`;
            height = `calc(${height} - ${extraHeight}px)`;
          } else {
            height = `calc(${navHeight} - ${extraHeight}px)`;
          }
        }
        return {
          width: scrollY ? "" : `calc(100% - ${extraWidth}px)`,
          //标签栏水平时scroll-view需要减去插槽所占区域，垂直时无需设置
          height
        };
      },
      // 标签内容scroll-view样式
      paneScrollStyle() {
        if (!this.scrollspy)
          return {};
        let height = "";
        if (this.scrollNav && !this.pageScroll) {
          height = isNull(this.contentHeight) ? `calc(100vh - ${this.wrapBottom}px)` : addUnit(this.contentHeight);
        }
        if (this.sidebarNav && !this.pageScroll) {
          height = isNull(this.navHeight) ? `calc(100px - ${this.dependOffsetTop}px)` : addUnit(this.navHeight);
        }
        return { height };
      },
      // 底部线条样式
      lineStyle() {
        const { lineWidth, lineHeight, duration } = this;
        const lineStyle = {
          width: addUnit(lineWidth),
          backgroundColor: this.color
        };
        if (isDef(lineHeight)) {
          lineStyle.height = addUnit(lineHeight);
          lineStyle.borderRadius = lineStyle.height;
        }
        return lineStyle;
      },
      // 是否允许横向滚动
      scrollX() {
        return !this.scrollY && !this.ellipsis && this.tabs.length > this.scrollThreshold;
      },
      // 标签数量
      dataLen() {
        return this.tabs.length;
      },
      // 滑动动画时长(ms)
      msDuration() {
        return this.animated ? this.duration * 1e3 : 0;
      },
      // 用于判断滚动的内容区域与屏幕顶部比较时所需的滚动偏移量
      scrollOffset() {
        if (this.scrollNav)
          return !this.pageScroll ? this.offsetTop + this.placeholderHeight : this.placeholderHeight;
        if (this.sidebarNav)
          return !this.pageScroll ? this.contentTop : 0;
        return 0;
      },
      // 当前激活标签的name值
      currentName() {
        const activeTab = this.children[this.currentIndex];
        if (activeTab) {
          return activeTab.computedName;
        }
      }
    },
    watch: {
      // 监听父组件的props，设置给子组件
      $props: {
        deep: true,
        immediate: true,
        handler(newValue) {
          this.children.forEach((child) => {
            child.scrollspy = this.scrollspy;
            child.rendered = !newValue.isLazyRender || newValue.scrollspy;
          });
        }
      },
      // 监听子组件数组长度变化，赋index值
      "children.length"() {
        this.children.forEach((child, index) => {
          child.index = index;
          child.scrollspy = this.scrollspy;
          child.rendered = !this.isLazyRender || this.scrollspy;
        });
      },
      // 监听选中下标变化
      currentIndex(newIdx, oldIdx) {
        this.$nextTick(() => {
          this.setLine();
        });
        this.changeStatus(newIdx, oldIdx);
        this.changeStyle();
      },
      // 监听背景色变化，重新获取rgba各值
      background: {
        immediate: true,
        handler(value) {
          if (this.transparent) {
            const color = getColor(isNull(value) ? "rgba(255,255,255,0)" : value);
            if (color.length) {
              this._R = color[0];
              this._G = color[1];
              this._B = color[2];
              this._A = parseFloat(color[3]);
            } else {
              throw new Error("元素背景颜色必须为RGBA");
            }
          }
        }
      },
      scrollTop() {
        this.handleScroll();
      }
    },
    created() {
      this.$watch(model.prop, (value) => {
        if (value !== this.currentName) {
          this.setCurrentIndexByName(value);
        }
      });
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
        this.bindListener();
      });
    },
    methods: {
      toJSON() {
      },
      // @exposed-api
      reset(callback) {
        this.reseted = false;
        this.scrollId = "";
        this.scrollLeft = 0;
        this.paneScrollTop = 0;
        this.lineAnimated = false;
        this.lineAnimatedStyle = {
          transform: "translateX(-100%) translateX(0%)",
          transition: "none"
        };
        this.lockedScrollspy = false;
        this.$nextTick(() => {
          this.reseted = true;
          callback && callback();
        });
      },
      // @exposed-api
      resize() {
        this.init();
      },
      // @exposed-api
      scrollTo(name) {
        this.$nextTick(() => {
          this.setCurrentIndexByName(name);
          this.scrollToCurrentContent(true);
        });
      },
      // 添加tab
      putTab({ newValue, oldValue }) {
        this.tabs.push({
          ...newValue,
          titleSlot: "title" + this.tabs.length,
          //标题插槽名，以"title"+下标命名,vue3只有H5、app支持自定义标题插槽
          show: this.scrollspy
          //是否显示内容（滚动导航模式默认显示）
        });
      },
      // 更新tab
      updateTab({ newValue, oldValue, index }) {
        const tab = this.tabs[index];
        Object.keys(newValue || {}).forEach((key) => {
          this.$set(tab, key, newValue[key]);
        });
      },
      // 标题项class
      tabClass(index, tab) {
        return toClass(
          {
            "yui-tab--active": this.currentIndex === index,
            "yui-tabs__ellipsis": this.ellipsis,
            "yui-tab--disabled": tab.disabled,
            "yui-tab--animated": !this.isLine,
            "yui-tab__prev": index === this.currentIndex - 1,
            //与当前标签相邻的前面的标签
            "yui-tab__next": index === this.currentIndex + 1
            //与当前标签相邻的后面的标签
          },
          `yui-tab_${index}`,
          `yui-tab--${this.type}`
        );
      },
      // 标题区域class
      titleClass(tab) {
        return toClass({ "yui-tabs__ellipsis": this.ellipsis }, `yui-tab__title--${tab.position}`);
      },
      // 标题文字class
      textClass(tab) {
        return toClass({ "yui-tabs__ellipsis": this.ellipsis }, `yui-tab__text--${tab.position}`);
      },
      // 标题项style
      tabStyle(index) {
        const activated = this.currentIndex === index;
        let { titleActiveColor: color, titleInactiveColor: defColor } = this;
        let background = "";
        let borderColor = "";
        if (this.type === "line") {
          if (isNull(color))
            color = "#646566";
          if (isNull(defColor))
            defColor = "#323233";
        } else if (this.type === "text") {
          if (isNull(color))
            color = this.color;
          if (isNull(defColor))
            defColor = "#323233";
        } else if (this.type === "card") {
          background = this.color;
          if (isNull(color))
            color = "#fff";
          if (isNull(defColor))
            defColor = this.color;
        } else if (this.type === "button") {
          background = this.color;
          if (isNull(color))
            color = "#fff";
          if (isNull(defColor))
            defColor = "#323233";
        } else if (this.type === "line-button") {
          borderColor = this.color;
          if (isNull(color))
            color = this.color;
          if (isNull(defColor))
            defColor = "#323233";
        }
        const style = {
          color: activated ? color : defColor,
          background: activated ? background : "",
          borderColor: activated ? borderColor : ""
        };
        if (!this.scrollY && !isNull(this.navHeight))
          style.height = addUnit(this.navHeight);
        return style;
      },
      // 获取查询节点信息的对象
      getSelectorQuery() {
        let query = null;
        query = uni.createSelectorQuery().in(this);
        return query;
      },
      // 获取元素位置信息
      getRect(...selectors) {
        return new Promise((resolve, reject) => {
          if (!selectors)
            reject("Parameter is empty");
          const query = this.getSelectorQuery();
          selectors.forEach((seletor) => {
            query.select(seletor).boundingClientRect();
          });
          query.exec((data) => {
            data = data || [];
            resolve(data.length === 1 ? data[0] : data);
          });
        });
      },
      // 绑定监听事件
      bindListener() {
        const that = this;
        if (that.sticky || that.scrollspy) {
          uni.$on("onPageScroll", function(e) {
            that.scrollTop = e.scrollTop;
          });
        }
      },
      // 滚动事件触发逻辑
      handleScroll() {
        const { stickyThreshold, offsetTop, sticky, scrollTop, scrollspy, lockedScrollspy, transparent } = this;
        if (sticky) {
          this.getRect(".yui-tabs__depend").then((rect) => {
            const bottom = (rect == null ? void 0 : rect.bottom) || 0;
            this.isFixed = bottom - stickyThreshold <= offsetTop;
            if (this.scrollspy)
              this.dependOffsetTop = (rect == null ? void 0 : rect.top) || 0;
            this.$emit("scroll", { scrollTop, isFixed: this.isFixed });
          });
        }
        this.setActivedIndexToScroll();
        if (transparent) {
          let opacity = (scrollTop - offsetTop) / this.transparentOffset + this._A;
          opacity = Math.min(Math.max(this._A, opacity), 1);
          this.transparentBgColor = `rgba(${this._R},${this._G},${this._B},${opacity})`;
        }
      },
      // 滚动时获取要选中的下标
      getCurrIndexOnScroll(res = []) {
        return new Promise((resolve, rejct) => {
          const promises = this.children.map((child) => child.getRect());
          Promise.all(promises).then((res2) => {
            let index = res2.reduce((idx, o, i) => o.top < this.scrollOffset ? i : idx, 0);
            resolve(index);
          });
        });
      },
      // 初始化操作
      async init() {
        try {
          const [r1, r2, r3, r4, r5, r6, r7] = await this.getRect(
            ".yui-tabs",
            ".yui-tabs__wrap",
            ".yui-tabs__line",
            ".yui-tabs__nav-left",
            ".yui-tabs__nav-right",
            ".yui-tabs__content",
            ".yui-tabs__depend"
          );
          const parentLeft = (r1 == null ? void 0 : r1.left) || 0;
          const parentTop = (r1 == null ? void 0 : r1.top) || 0;
          this.halfWrapWidth = (r2 == null ? void 0 : r2.width) / 2 || 0;
          this.wrapTop = r2.top || 0;
          this.wrapBottom = r2.bottom || 0;
          this.lineWidthValue = (r3 == null ? void 0 : r3.width) || 0;
          this.lineHeightValue = (r3 == null ? void 0 : r3.height) || 0;
          const navLeftWidth = (r4 == null ? void 0 : r4.width) || 0;
          const navLeftHeight = (r4 == null ? void 0 : r4.height) || 0;
          const navRightWidth = (r5 == null ? void 0 : r5.width) || 0;
          const navRightHeight = (r5 == null ? void 0 : r5.height) || 0;
          this.extraWidth = navLeftWidth + navRightWidth;
          this.extraHeight = navLeftHeight + navRightHeight;
          this.contentWidth = (r6 == null ? void 0 : r6.width) || 0;
          this.contentTop = (r6 == null ? void 0 : r6.top) || 0;
          this.dependOffsetTop = (r7 == null ? void 0 : r7.top) || 0;
          const selectors = this.tabs.map((_, i) => `.yui-tab_${i}`);
          const rects = await this.getRect(...selectors);
          let lastIndex = this.tabs.length - 1;
          const leftSpace = parentLeft - navLeftWidth, topSpace = parentTop - navLeftHeight;
          this.tabs.forEach((tab, i) => {
            const rect = rects[i], rect2 = rects[lastIndex];
            this.$set(tab, "diffWidth", rect ? rect.left - leftSpace : 0);
            this.$set(tab, "diffHeight", rect2 ? rect2.top - topSpace : 0);
            lastIndex--;
            if (i === 0) {
              this.placeholderHeight = (rect == null ? void 0 : rect.height) || 0;
            }
          });
          this.setCurrentIndexByName(this[model.prop]);
          if (this.currentIndex !== this.children[0].index) {
            setTimeout(() => {
              this.scrollToCurrentContent(true);
            }, 20);
          }
        } catch (e) {
          formatAppLog("log", "at uni_modules/y-tabs/components/y-tabs/y-tabs.vue:573", "e:", e);
          throw new Error("y-tabs init():", e);
        }
      },
      // 标签点击事件
      onClick(index) {
        const { title, disabled, computedName } = this.children[index];
        if (disabled) {
          this.$emit("disabled", title, title);
        } else {
          callInterceptor({
            interceptor: this.beforeChange,
            args: [computedName],
            done: () => {
              this.setCurrentIndex(index);
              setTimeout(() => {
                this.lockedScrollspy = true;
                this.scrollToTop();
                this.scrollToCurrentContent();
              }, 0);
            }
          });
          this.$emit("click", computedName, title);
        }
      },
      // 更正活动选项卡的索引
      setCurrentIndexByName(name) {
        const matched = this.children.find((child) => child.computedName === name);
        const defaultIndex = (this.children[0] || {}).index || 0;
        this.setCurrentIndex(matched ? matched.index : defaultIndex);
      },
      // 设置当前下标
      setCurrentIndex(currentIndex) {
        const newIndex = this.findAvailableTab(currentIndex);
        if (!isDef(newIndex)) {
          return;
        }
        const shouldEmit = newIndex != this.currentIndex;
        const shouldEmitChange = this.currentIndex !== null;
        const { title, computedName, rendered } = this.children[newIndex];
        if (this.isLazyRender && !this.scrollspy && !rendered) {
          this.$emit("rendered", computedName, title);
        }
        this.currentIndex = newIndex;
        if (shouldEmit) {
          this.$emit(emits[0], computedName);
          if (shouldEmitChange) {
            this.$emit("change", computedName, title);
          }
        }
      },
      // 查询可用tab
      findAvailableTab(index) {
        const diff = index < this.currentIndex ? -1 : 1;
        while (index >= 0 && index < this.tabs.length) {
          if (!this.tabs[index].disabled) {
            return index;
          }
          index += diff;
        }
      },
      // 获取动态的translateX、scrollLeft
      getDynamicValue(index) {
        return new Promise((resolve) => {
          this.getRect(`.yui-tab_${index}`).then((rect) => {
            const { diffWidth, diffHeight } = this.tabs[index];
            const translateX = diffWidth + ((rect == null ? void 0 : rect.width) || 0) / 2 - this.lineWidthValue / 2;
            const translateY = diffHeight + ((rect == null ? void 0 : rect.height) || 0) / 2 - this.lineHeightValue / 2;
            const scrollLeft = translateX - this.halfWrapWidth;
            resolve({ translateX, scrollLeft, translateY });
          });
        });
      },
      // 设置底部线条位置
      async setLine() {
        try {
          const { currentIndex, tabs } = this;
          const { translateX, scrollLeft, translateY } = await this.getDynamicValue(currentIndex);
          if (this.isLine) {
            let transform = "";
            if (this.scrollY) {
              transform = `translateY(${isDef(translateY) ? `-${translateY}px` : "-100%"})`;
            } else {
              transform = `translateX(${isDef(translateX) ? `${translateX}px` : "-100%"})`;
            }
            this.$set(this.lineAnimatedStyle, "transform", transform);
            this.$set(this.lineAnimatedStyle, "transition", this.lineAnimated ? `transform ${this.duration}s linear` : "none");
            this.lineAnimated = true;
          }
          this.scrollIntoView(scrollLeft);
        } catch (e) {
          throw new Error("y-tabs setLine():", e);
        }
      },
      //将激活的tab滚动到可见区域中
      scrollIntoView(scrollLeft) {
        if (this.scrollX) {
          if (this.scrollToCenter)
            this.scrollLeft = scrollLeft;
          else
            this.scrollId = `tab_${this.currentIndex - 1}`;
        }
        if (this.scrollY)
          this.scrollId = `tab_${this.currentIndex}`;
      },
      // 滚动到顶
      scrollToTop() {
        if (!this.scrollspy && this.tabClickScrollTop) {
          setTimeout(function() {
            uni.pageScrollTo({ scrollTop: 0, duration: 0 });
          }, this.msDuration);
        }
      },
      // 滚动到当前标签内容
      async scrollToCurrentContent(immediate = false) {
        try {
          if (this.scrollspy) {
            const duration = immediate ? 0 : this.msDuration;
            const r = await this.children[this.currentIndex].getRect();
            let scrollTop = this.scrollTop + ((r == null ? void 0 : r.top) || 0);
            if (this.direction === "horizontal") {
              const wRect = await this.getRect(".yui-tabs__wrap");
              scrollTop = scrollTop - this.offsetTop;
              scrollTop -= (wRect == null ? void 0 : wRect.height) || 0;
            }
            if (this.pageScroll) {
              this.lockedScrollspy = true;
              uni.pageScrollTo({ scrollTop, duration });
              setTimeout(() => {
                this.lockedScrollspy = false;
              }, duration * 2 + 100);
            } else {
              this.paneScrollTop = scrollTop - this.dependOffsetTop;
            }
          }
        } catch (e) {
          throw new Error("y-tabs scrollToCurrentContent():", e);
        }
      },
      // 状态变更
      changeStatus(newIdx, oldIdx) {
        if (!this.scrollspy) {
          (this.tabs[oldIdx] || {}).show = false;
          (this.tabs[newIdx] || {}).show = true;
          this.children[newIdx].rendered = true;
        }
        this.children.forEach((child, index) => {
          child.active = newIdx === index;
        });
      },
      // 样式切换
      changeStyle() {
        if (!this.scrollspy) {
          this.changeTrackStyle(false, this.duration);
          this.changePaneStyle();
        }
      },
      // 改变标签内容滑动轨道样式
      changeTrackStyle(isSlide = false, duration, offsetWidth = 0) {
        duration = isNull(duration) ? this.duration : duration;
        if (this.animated) {
          this.trackStyle = {
            transform: isSlide ? `translate3d(${offsetWidth}px,0,0)` : `translateX(${-100 * this.currentIndex}%)`,
            transition: `transform ${duration}s ease-in-out`
          };
        }
      },
      // 改变标签内容样式
      async changePaneStyle() {
        try {
          const rect = await this.children[this.currentIndex].getRect();
          const height = rect && this.swipeAnimated ? rect.height : 0;
          this.tabs.forEach((tab, index) => {
            const paneStyle = this.animated ? {
              visibility: this.swipeAnimated || tab.show ? "visible" : "hidden",
              height: tab.show ? "auto" : height + "px"
            } : {
              display: tab.show ? "block" : "none"
            };
            this.children[index].paneStyle = paneStyle;
          });
        } catch (e) {
          throw new Error("y-tabs changePaneStyle():", e);
        }
      },
      // 设置内容区域滚动时激活的下标
      setActivedIndexToScroll() {
        if (!this.scrollspy || this.lockedScrollspy) {
          return;
        }
        if (this.sidebarNav) {
          this.getCurrIndexOnScroll().then((index) => {
            this.setCurrentIndex(index);
          });
        }
        if (this.scrollNav) {
          this.getCurrIndexOnScroll().then((index) => {
            this.setCurrentIndex(index);
          });
        }
      },
      // 触摸内容的区域滚动时，不锁定滚动处理
      touchstartByPane() {
        this.lockedScrollspy = false;
      },
      // 内容区域的scroll-view的滚动事件
      handleScrollByPane(e) {
        this.scrollTop = e.detail.scrollTop;
      },
      touchmove() {
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["yui-tabs", [$options.tabsClass]])
      },
      [
        vue.createCommentVNode(" 依赖元素，用于处理滚动吸顶所需 "),
        vue.createElementVNode("view", { class: "yui-tabs__depend" }),
        vue.createCommentVNode(" 标签区域 "),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["yui-tabs__wrap", [$options.wrapClass]]),
            style: vue.normalizeStyle([$options.innerWrapStyle, _ctx.wrapStyle]),
            onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop", "prevent"]))
          },
          [
            vue.createElementVNode("view", { class: "yui-tabs__nav-left" }, [
              vue.renderSlot(_ctx.$slots, "nav-left", {}, void 0, true)
            ]),
            vue.createElementVNode("scroll-view", {
              class: vue.normalizeClass(["yui-tabs__scroll", [$options.scrollX ? "yui-tabs__scroll--enable" : ""]]),
              "scroll-x": $options.scrollX,
              "scroll-y": $options.scrollY,
              "scroll-anchoring": true,
              "enable-flex": "",
              "scroll-left": $data.scrollLeft,
              "scroll-into-view": !_ctx.scrollToCenter || this.scrollY ? $data.scrollId : "",
              "scroll-with-animation": _ctx.animated && $data.reseted,
              style: vue.normalizeStyle([$options.scrollStyle])
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["yui-tabs__nav", [$options.navClass]])
                },
                [
                  vue.createCommentVNode(" 标签项 "),
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.tabs, (tab, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(["yui-tab", [$options.tabClass(index, tab), tab.titleClass]]),
                        key: index,
                        onClick: vue.withModifiers(($event) => $options.onClick(index), ["stop"]),
                        id: `tab_${index}`,
                        style: vue.normalizeStyle([$options.tabStyle(index), tab.titleStyle])
                      }, [
                        vue.createCommentVNode(" 标题 "),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(["yui-tab__title", [$options.titleClass(tab)]])
                          },
                          [
                            vue.createCommentVNode(" 图标或图片 "),
                            tab.iconType || tab.imageSrc ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "yui-tab__icons"
                            }, [
                              tab.iconType ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                                key: 0,
                                "custom-prefix": tab.customPrefix,
                                type: tab.iconType,
                                size: tab.iconSize
                              }, null, 8, ["custom-prefix", "type", "size"])) : vue.createCommentVNode("v-if", true),
                              tab.imageSrc ? (vue.openBlock(), vue.createElementBlock("image", {
                                key: 1,
                                class: "yui-tab__image",
                                mode: tab.imageMode,
                                src: tab.imageSrc
                              }, null, 8, ["mode", "src"])) : vue.createCommentVNode("v-if", true)
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode(" 标题文本 "),
                            vue.createElementVNode(
                              "view",
                              {
                                class: vue.normalizeClass(["yui-tab__text", [$options.textClass(tab)]])
                              },
                              [
                                vue.renderSlot(_ctx.$slots, tab.titleSlot, {}, () => [
                                  vue.createTextVNode(
                                    vue.toDisplayString(tab.title),
                                    1
                                    /* TEXT */
                                  )
                                ], true)
                              ],
                              2
                              /* CLASS */
                            )
                          ],
                          2
                          /* CLASS */
                        ),
                        vue.createCommentVNode(" 标题右上角信息 "),
                        tab.dot || tab.badge ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "yui-tab__info"
                        }, [
                          tab.dot ? (vue.openBlock(), vue.createElementBlock("text", {
                            key: 0,
                            class: "yui-tab__info--dot"
                          })) : vue.createCommentVNode("v-if", true),
                          tab.badge ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 1,
                              class: "yui-tab__info--badge"
                            },
                            vue.toDisplayString(tab.badge),
                            1
                            /* TEXT */
                          )) : vue.createCommentVNode("v-if", true)
                        ])) : vue.createCommentVNode("v-if", true)
                      ], 14, ["onClick", "id"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  $options.isLine ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: vue.normalizeClass(["yui-tabs__line", [$options.lineClass]]),
                      style: vue.normalizeStyle([$options.lineStyle, $data.lineAnimatedStyle])
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )) : vue.createCommentVNode("v-if", true)
                ],
                2
                /* CLASS */
              )
            ], 14, ["scroll-x", "scroll-y", "scroll-left", "scroll-into-view", "scroll-with-animation"]),
            vue.createElementVNode("view", { class: "yui-tabs__nav-right" }, [
              vue.renderSlot(_ctx.$slots, "nav-right", {}, void 0, true)
            ])
          ],
          38
          /* CLASS, STYLE, HYDRATE_EVENTS */
        ),
        $data.isFixed && !$options.scrollY ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "yui-tabs__placeholder",
            style: vue.normalizeStyle([{ height: $data.placeholderHeight + "px" }])
          },
          null,
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 标签内容 "),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["yui-tabs__content", [$options.contentClass]]),
            style: vue.normalizeStyle([$options.contentStyle])
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["yui-tabs__track", [{ "yui-tabs__track--scrollspy": _ctx.scrollspy }]]),
                style: vue.normalizeStyle([$data.trackStyle])
              },
              [
                vue.createCommentVNode(" 滚动导航与侧边栏导航的内容区域：使用scroll-view实现区域滚动，否则就是页面级滚动 "),
                _ctx.scrollspy && !_ctx.pageScroll ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
                  key: 0,
                  "scroll-y": "",
                  "scroll-top": $data.paneScrollTop,
                  "scroll-anchoring": true,
                  "enable-flex": "",
                  "scroll-with-animation": _ctx.animated,
                  style: vue.normalizeStyle([$options.paneScrollStyle]),
                  onScroll: _cache[1] || (_cache[1] = (...args) => $options.handleScrollByPane && $options.handleScrollByPane(...args)),
                  onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.touchstartByPane && $options.touchstartByPane(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ], 44, ["scroll-top", "scroll-with-animation"])) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-3efb49c4"], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/uni_modules/y-tabs/components/y-tabs/y-tabs.vue"]]);
  const baseUrl = "http://8.134.197.246:8848";
  const request = (url = "", data = {}, showLoadingTitle = "加载中", hideLoding = true, type = "POST", header = {
    "content-type": "application/x-www-form-urlencoded"
  }) => {
    if (uni.getStorageSync("accessToken")) {
      data = { ...data, authorization: uni.getStorageSync("accessToken") };
    }
    return new Promise((resolve, reject) => {
      if (hideLoding) {
        uni.showLoading({
          title: showLoadingTitle
        });
      }
      uni.request({
        method: type,
        url: baseUrl + url,
        data,
        header,
        dataType: "json"
      }).then((response) => {
        let {
          data: data2,
          statusCode
        } = response;
        if (statusCode == 200) {
          setTimeout(() => {
            uni.hideLoading();
          }, 1e3);
          resolve(data2);
        }
      }).catch((error) => {
        setTimeout(() => {
          uni.hideLoading();
        }, 2e3);
        reject(error);
      });
    });
  };
  const login = (url, data) => request(url, data, "登录中");
  const singup = (url, data) => request(url, data, "注册中");
  const getMoveMsgList = (url, data) => request(url, data, "加载中", false);
  const getGoodList = (url, data) => request(url, data);
  const addGoodToShoppCar = (url, data) => request(url, data);
  const getGoodToShoppCarList = (url, data) => request(url, data);
  const deleteGoodToShoppCar = (url, data) => request(url, data);
  const getGoodOneMsgList = (url, data) => request(url, data);
  const addUserAccount = (url, data) => request(url, data);
  const addUserAddress = (url, data) => request(url, data);
  const getUserAddressList = (url, data) => request(url, data);
  const getUserAddressOne = (url, data) => request(url, data);
  const updateUserAddress = (url, data) => request(url, data);
  const deleteUserAddress = (url, data) => request(url, data);
  const getSettlement = (url, data) => request(url, data);
  const getUserOrderList = (url, data) => request(url, data);
  const getLatestDisclosureList = (url, data) => request(url, data);
  const getUserMsg = (url, data) => request(url, data);
  const getUserPrizeList = (url, data) => request(url, data);
  const getUserAccountOne = (url, data) => request(url, data);
  const editUser = (url, data) => request(url, data);
  const getShoppGoodCarNum = () => {
    const token2 = uni.getStorageSync("accessToken");
    if (!token2)
      return;
    getGoodToShoppCarList("/shoppCar/getGoodToShoppCarList", {
      currentPage: 1,
      pageSize: 1,
      authorization: token2
    }).then((res) => {
      const {
        code,
        data,
        flag
      } = res;
      if (code === 2e3 && flag) {
        uni.setTabBarBadge({
          index: 2,
          text: `${data.total}`
        });
      }
    }).catch((error) => formatAppLog("log", "at common/shoppGoodCarNum.js:23", error));
  };
  var day = 0;
  var hour = "00";
  var min = "00";
  var second = "00";
  function countTime(timeSrt) {
    let date = /* @__PURE__ */ new Date();
    let now = date.getTime();
    let endDate = new Date(timeSrt);
    let end = endDate.getTime();
    let leftTime = end - now;
    if (leftTime >= 0) {
      day = Math.floor(leftTime / 1e3 / 60 / 60 / 24);
      let h = Math.floor(leftTime / 1e3 / 60 / 60 % 24);
      hour = h < 10 ? "0" + h : h;
      let m = Math.floor(leftTime / 1e3 / 60 % 60);
      min = m < 10 ? "0" + m : m;
      let s = Math.floor(leftTime / 1e3 % 60);
      second = s < 10 ? "0" + s : s;
    } else {
      day = 0;
      hour = "00";
      min = "00";
      second = "00";
    }
    if (Number(hour) === 0 && Number(day) === 0 && Number(min) === 0 && Number(second) === 0) {
      return;
    } else {
      setTimeout(countTime, 1e3);
    }
    return {
      day,
      hour,
      min,
      second
    };
  }
  function countTimeFun(ck, t) {
    setInterval(
      (t2) => {
        let x = countTime(t2);
        ck(x);
      },
      1e3,
      t
    );
  }
  const _sfc_main$i = {
    props: {
      itemTime: {
        type: String
      }
    },
    data() {
      return {
        dataTime: {}
      };
    },
    mounted() {
      countTimeFun(this.TimeNum, this.itemTime);
    },
    methods: {
      //时间计算
      TimeNum(val) {
        this.dataTime = val;
        return val;
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "viewallItem_top_l_b_time" }, [
      vue.createTextVNode(
        vue.toDisplayString($data.dataTime.day) + "天 ",
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "span",
        { class: "viewallItem_top_l_b_timesty" },
        vue.toDisplayString($data.dataTime.hour),
        1
        /* TEXT */
      ),
      vue.createTextVNode(" : "),
      vue.createElementVNode(
        "span",
        { class: "viewallItem_top_l_b_timesty" },
        vue.toDisplayString($data.dataTime.min),
        1
        /* TEXT */
      ),
      vue.createTextVNode(" : "),
      vue.createElementVNode(
        "span",
        { class: "viewallItem_top_l_b_timesty" },
        vue.toDisplayString($data.dataTime.second),
        1
        /* TEXT */
      )
    ]);
  }
  const timeCon = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-fd9b5b8b"], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/components/timeCon.vue"]]);
  const token$5 = uni.getStorageSync("accessToken");
  const _sfc_main$h = {
    components: {
      timeCon
    },
    data() {
      return {
        activeIndex: 0,
        indicatorDots: true,
        autoplay: true,
        src: "https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        list: [],
        tabname: ["人气商品", "最新上架", "即将满员"],
        listdata: [],
        listdataTotal: null,
        pageSize: 10,
        orderId: 1,
        navHeight: 0,
        //元素的所需高度,
        boxHeight: 0
        //窗口高度
      };
    },
    methods: {
      // 标签点击事件
      tabClick(index, item) {
        formatAppLog("log", "at pages/index/index.vue:97", "tabClick", index, item);
      },
      // 标签切换事件
      tabChange(index, item) {
        formatAppLog("log", "at pages/index/index.vue:101", "tabChange", index, item);
        this.orderId = index + 1;
        this.getGood();
      },
      lower: function(e) {
        const listdataLength = this.listdata.length;
        if (listdataLength < this.listdataTotal) {
          this.pageSize += 10;
          this.getGood();
        }
      },
      addCar: function(goodId) {
        if (token$5) {
          addGoodToShoppCar("/shoppCar/addGoodToShoppCar", {
            goodId,
            num: 1,
            authorization: token$5
          }).then((res) => {
            const {
              code,
              flag
            } = res;
            if (code === 2e3 && flag) {
              uni.showToast({
                title: "成功加入购物车！",
                icon: "none"
              });
              getShoppGoodCarNum();
            }
          }).catch((error) => formatAppLog("log", "at pages/index/index.vue:131", error));
        } else {
          uni.navigateTo({
            url: "/pages/login/index"
          });
        }
      },
      getGood: function() {
        getGoodList("/home/getGoodList", {
          currentPage: 1,
          orderId: this.orderId,
          pageSize: this.pageSize
        }).then((res) => {
          const {
            code,
            data,
            flag
          } = res;
          if (code === 2e3 && flag) {
            const {
              list,
              total,
              currentPage
            } = data;
            this.listdata = list;
            this.listdataTotal = total;
          }
        }).catch((error) => formatAppLog("log", "at pages/index/index.vue:159", error));
      },
      goDetailGood: function(goodId) {
        uni.navigateTo({
          url: `/pages/detailgood/index?goodId=${goodId}`
        });
      }
    },
    created() {
      getMoveMsgList("/home/getMoveMsgList").then((res) => {
        const {
          code,
          data,
          flag
        } = res;
        if (code === 2e3 && flag) {
          let listcopy = [];
          if (data.length > 0) {
            data.map((item) => {
              let obj = {
                id: item.userName,
                name: `恭喜${item.userName}获得${item.goodName}`
              };
              listcopy.push(obj);
            });
          }
          this.list = listcopy;
        }
      }).catch((error) => formatAppLog("log", "at pages/index/index.vue:187", error));
      this.getGood();
    },
    onLoad() {
      this.$i18n.locale = "en";
    },
    onReady() {
      let that = this;
      uni.getSystemInfo({
        //调用uni-app接口获取屏幕高度
        success(res) {
          that.boxHeight = res.windowHeight;
          let titleH = uni.createSelectorQuery().in(that).select(".y-tabs");
          titleH.boundingClientRect((data) => {
            let boxHeight = that.boxHeight;
            that.navHeight = boxHeight - data.top - 40;
          }).exec();
        }
      });
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_xzw_notice = resolveEasycom(vue.resolveDynamicComponent("xzw-notice"), __easycom_0$1);
    const _component_time_con = vue.resolveComponent("time-con");
    const _component_y_tab = resolveEasycom(vue.resolveDynamicComponent("y-tab"), __easycom_1$1);
    const _component_y_tabs = resolveEasycom(vue.resolveDynamicComponent("y-tabs"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "box",
        style: vue.normalizeStyle({ height: $data.boxHeight + "px" })
      },
      [
        vue.createCommentVNode(' 		<view class="uni-margin-wrap">\r\n			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay">\r\n				<swiper-item>\r\n					<image mode="heightFix" src="../../static/index/gouwu1.png"></image>\r\n				</swiper-item>\r\n				<swiper-item>\r\n					<image mode="heightFix" src="../../static/index/gouwu2.png"></image>\r\n				</swiper-item>\r\n				<swiper-item>\r\n					<image mode="heightFix" src="../../static/index/gouwu3.png"></image>\r\n				</swiper-item>\r\n			</swiper>\r\n		</view> '),
        vue.createElementVNode("view", { class: "notice_box" }, [
          vue.createVNode(_component_xzw_notice, {
            theme: "primary",
            list: $data.list,
            theKey: "name",
            showIcon: true,
            showMore: false
          }, null, 8, ["list"])
        ]),
        vue.createVNode(_component_y_tabs, {
          modelValue: $data.activeIndex,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.activeIndex = $event),
          onClick: $options.tabClick,
          onChange: $options.tabChange,
          class: "y-tabs"
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.tabname, (name, index) => {
                return vue.openBlock(), vue.createBlock(_component_y_tab, {
                  key: index,
                  title: name
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode(
                      "scroll-view",
                      {
                        "scroll-y": "true",
                        class: "scroll-Y",
                        onScrolltolower: _cache[0] || (_cache[0] = (...args) => $options.lower && $options.lower(...args)),
                        style: vue.normalizeStyle({ height: $data.navHeight + "px" })
                      },
                      [
                        vue.createElementVNode("view", { class: "list-data-box" }, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList($data.listdata, (item, index2) => {
                              return vue.openBlock(), vue.createElementBlock(
                                "view",
                                {
                                  key: index2,
                                  class: vue.normalizeClass(["data-box", { borderRight: index2 % 2 == 0 }])
                                },
                                [
                                  vue.createElementVNode("image", {
                                    class: "data-box-img",
                                    mode: "heightFix",
                                    src: item.image,
                                    alt: "",
                                    onClick: ($event) => $options.goDetailGood(item.goodId)
                                  }, null, 8, ["src", "onClick"]),
                                  vue.createElementVNode("view", {
                                    class: "data-text-box",
                                    onClick: ($event) => $options.goDetailGood(item.goodId)
                                  }, [
                                    vue.createElementVNode(
                                      "text",
                                      { class: "data-text" },
                                      vue.toDisplayString(item.goodName ? item.goodName.slice(0, 30) + "..." : ""),
                                      1
                                      /* TEXT */
                                    )
                                  ], 8, ["onClick"]),
                                  vue.createElementVNode("view", { class: "renci_box" }, [
                                    vue.createElementVNode("text", null, [
                                      vue.createTextVNode("总人次："),
                                      vue.createElementVNode(
                                        "text",
                                        { class: "openNumber" },
                                        vue.toDisplayString(item.openNumber),
                                        1
                                        /* TEXT */
                                      )
                                    ]),
                                    vue.createElementVNode("text", null, [
                                      vue.createTextVNode("还需人次："),
                                      vue.createElementVNode(
                                        "text",
                                        { class: "reqNumber" },
                                        vue.toDisplayString(item.reqJoinNum),
                                        1
                                        /* TEXT */
                                      )
                                    ])
                                  ]),
                                  vue.createElementVNode("view", { class: "data-bottom" }, [
                                    vue.createElementVNode("view", { class: "bottom-text" }, [
                                      vue.createElementVNode("text", null, "购买进度"),
                                      vue.createElementVNode(
                                        "text",
                                        { class: "bottom-progress" },
                                        vue.toDisplayString(item.buyRate),
                                        1
                                        /* TEXT */
                                      ),
                                      vue.createElementVNode("progress", {
                                        percent: item.buyRate,
                                        activeColor: "#f98b2b",
                                        "stroke-width": "6"
                                      }, null, 8, ["percent"])
                                    ]),
                                    vue.createElementVNode("button", {
                                      type: "warn",
                                      plain: "true",
                                      size: "mini",
                                      class: "bottom-button",
                                      onClick: ($event) => $options.addCar(item.goodId)
                                    }, "加购物车", 8, ["onClick"])
                                  ]),
                                  vue.createElementVNode("view", { class: "djs_box" }, [
                                    vue.createElementVNode("text", null, "倒计时："),
                                    vue.createVNode(_component_time_con, {
                                      itemTime: item.endTime
                                    }, null, 8, ["itemTime"])
                                  ])
                                ],
                                2
                                /* CLASS */
                              );
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ]),
                        $data.listdataTotal == $data.listdata.length ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "not_more"
                        }, " ---暂无更多数据--- ")) : vue.createCommentVNode("v-if", true)
                      ],
                      36
                      /* STYLE, HYDRATE_EVENTS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["title"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "onClick", "onChange"])
      ],
      4
      /* STYLE */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/index/index.vue"]]);
  const _sfc_main$g = {
    data() {
      return {
        isLogin: uni.getStorageSync("accessToken"),
        userInfo: {},
        jinbiAccount: 0
      };
    },
    methods: {
      getAccount() {
        getUserAccountOne("/userCenter/getUserAccountOne").then((res) => {
          const {
            code,
            flag,
            data
          } = res;
          if (code === 2e3 && flag) {
            this.jinbiAccount = data.account;
          }
        }).catch((error) => formatAppLog("log", "at pages/my/index.vue:81", error));
      },
      getUserInfo() {
        getUserMsg("/userCenter/getUserMsg").then((res) => {
          const {
            flag,
            data
          } = res;
          if (res.flag) {
            this.userInfo = data;
          }
        }).catch((error) => formatAppLog("log", "at pages/my/index.vue:92", error));
      },
      goAddress() {
        uni.navigateTo({
          url: "/pages/addresslist/index"
        });
      },
      goMyInfo() {
        uni.navigateTo({
          url: "/pages/myinfo/index"
        });
      },
      goTopup() {
        uni.navigateTo({
          url: "/pages/topup/index"
        });
      },
      goRule() {
        uni.navigateTo({
          url: "/pages/rule/rule"
        });
      },
      goOrderList() {
        uni.navigateTo({
          url: "/pages/finishorderlist/index"
        });
      },
      goWin() {
        uni.navigateTo({
          url: "/pages/winrecord/index"
        });
      },
      logout() {
        uni.removeStorageSync("accessToken");
        uni.removeStorage({
          key: "mytoken",
          success() {
            formatAppLog("log", "at pages/my/index.vue:129", "清除成功");
            uni.showToast({
              title: "成功退出登录",
              icon: "none"
            });
            uni.navigateTo({
              url: "/pages/login/index"
            });
          }
        });
      },
      goLogin() {
        uni.navigateTo({
          url: "/pages/login/index"
        });
      }
    },
    onShow() {
      const _this = this;
      uni.getStorage({
        key: "mytoken",
        success: function(res) {
          _this.getUserInfo();
          _this.getAccount();
        },
        fail: function() {
          formatAppLog("log", "at pages/my/index.vue:155", "数据获取失败");
          uni.navigateTo({
            url: "/pages/login/index"
          });
        }
      });
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "my-box" }, [
          vue.createElementVNode("view", {
            class: "seting-box",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goMyInfo && $options.goMyInfo(...args))
          }, [
            vue.createElementVNode("text", null, "设置")
          ]),
          vue.createElementVNode("view", { class: "head-box" }, [
            vue.createElementVNode("image", {
              src: $data.userInfo.image,
              mode: ""
            }, null, 8, ["src"]),
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString($data.userInfo.userName),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              null,
              "账号ID：" + vue.toDisplayString($data.userInfo.userId),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "jinbi-box" }, [
          vue.createElementVNode("view", { class: "box" }, [
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString($data.jinbiAccount),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "text-title" }, [
              vue.createElementVNode("image", {
                src: "/static/my/money1.png",
                mode: ""
              }),
              vue.createElementVNode("text", null, "金币")
            ])
          ]),
          vue.createElementVNode("view", { class: "box" }, [
            vue.createElementVNode("text", null, "0.00"),
            vue.createElementVNode("view", { class: "text-title" }, [
              vue.createElementVNode("image", {
                src: "/static/my/jifen.png",
                mode: ""
              }),
              vue.createElementVNode("text", null, "积分")
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "list-seting-box" }, [
          vue.createElementVNode("view", {
            class: "list-box",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.goTopup && $options.goTopup(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/my/money.png",
              mode: ""
            }),
            vue.createElementVNode("text", null, "我要充值"),
            vue.createCommentVNode(" <text>{{$t('app.name')}}</text> ")
          ]),
          vue.createElementVNode("view", {
            class: "list-box",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.goAddress && $options.goAddress(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/my/adress.png",
              mode: ""
            }),
            vue.createElementVNode("text", null, "收货地址")
          ]),
          vue.createElementVNode("view", {
            class: "list-box",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.goOrderList && $options.goOrderList(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/my/order.png",
              mode: ""
            }),
            vue.createElementVNode("text", null, "订单列表")
          ]),
          vue.createElementVNode("view", {
            class: "list-box",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.goWin && $options.goWin(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/my/winhistory.png",
              mode: ""
            }),
            vue.createElementVNode("text", null, "中奖记录")
          ]),
          vue.createElementVNode("view", {
            class: "list-box",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.goRule && $options.goRule(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/my/rule.png",
              mode: ""
            }),
            vue.createElementVNode("text", null, "全民一元购规则")
          ]),
          vue.createElementVNode("view", {
            class: "list-box",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.logout && $options.logout(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/my/logout.png",
              mode: ""
            }),
            vue.createElementVNode("text", null, "退出登录")
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesMyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/my/index.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        goodList: [],
        pageSize: 10,
        totalNum: 0,
        selectGoodList: [],
        token: null,
        pH: 0,
        //窗口高度
        navHeight: 0,
        //元素的所需高度,
        listBoxHeight: 0
      };
    },
    methods: {
      checkboxChange: function(e) {
        this.selectGoodList = e.detail.value;
        uni.setStorageSync("selectGoodIdList", e.detail.value);
        var items = this.goodList, values = e.detail.value;
        for (var i = 0, lenI = items.length; i < lenI; ++i) {
          const item = items[i];
          if (values.includes(item.goodId)) {
            this.$set(item, "checked", true);
          } else {
            this.$set(item, "checked", false);
          }
        }
      },
      goHome(e) {
        uni.switchTab({
          url: "/pages/index/index"
        });
      },
      getGoodCarList: function(e) {
        getGoodToShoppCarList("/shoppCar/getGoodToShoppCarList", {
          currentPage: 1,
          pageSize: this.pageSize,
          authorization: this.token
        }).then((res) => {
          const {
            code,
            data,
            total,
            flag
          } = res;
          if (code === 2e3 && flag) {
            this.goodList = data.list;
            this.totalNum = data.total;
            if (data.total == 0) {
              uni.removeTabBarBadge({
                index: 2
              });
            } else {
              uni.setTabBarBadge({
                index: 2,
                text: `${data.total}`
              });
            }
            if (uni.getStorageSync("selectGoodIdList") !== void 0) {
              var items = this.goodList, values = uni.getStorageSync("selectGoodIdList");
              for (var i = 0, lenI = items.length; i < lenI; ++i) {
                const item = items[i];
                if (values.includes(item.goodId)) {
                  this.$set(item, "checked", true);
                } else {
                  this.$set(item, "checked", false);
                }
              }
            }
          }
        }).catch((error) => formatAppLog("log", "at pages/renmai/index.vue:146", error));
      },
      lower: function(e) {
        const listdataLength = this.goodList.length;
        if (listdataLength < this.totalNum) {
          this.pageSize += 10;
          this.getGoodCarList();
        }
      },
      addCarGood: function(e, goodId, num, type) {
        e.prevent;
        let paramNum;
        if (type == "jian") {
          if (num === 1) {
            uni.showToast({
              title: "不能小于0",
              icon: "none"
            });
            return;
          }
          paramNum = num - 1;
        } else {
          paramNum = num + 1;
        }
        addGoodToShoppCar("/shoppCar/addGoodToShoppCar", {
          goodId,
          num: paramNum,
          authorization: this.token
        }).then((res) => {
          const {
            code,
            flag
          } = res;
          if (code === 2e3 && flag) {
            this.getGoodCarList();
          }
        }).catch((error) => formatAppLog("log", "at pages/renmai/index.vue:182", error));
      },
      inputClick: function(e, goodId, reqNum, num) {
        if (e.detail.value > reqNum) {
          uni.showToast({
            title: "不能输入大于剩余人次,请重新输入！",
            icon: "none"
          });
          return;
        }
        addGoodToShoppCar("/shoppCar/addGoodToShoppCar", {
          goodId,
          num: e.detail.value,
          authorization: this.token
        }).then((res) => {
          const {
            code,
            flag
          } = res;
          if (code === 2e3 && flag) {
            this.getGoodCarList();
          }
        }).catch((error) => formatAppLog("log", "at pages/renmai/index.vue:204", error));
      },
      delGood: function(goodId) {
        deleteGoodToShoppCar("/shoppCar/deleteGoodToShoppCar", {
          goodId,
          authorization: this.token
        }).then((res) => {
          const {
            code,
            flag
          } = res;
          if (code === 2e3 && flag) {
            this.getGoodCarList();
            uni.showToast({
              title: "删除成功",
              icon: "none"
            });
          }
        }).catch((error) => formatAppLog("log", "at pages/renmai/index.vue:222", error));
      },
      goOrder: function(e) {
        if (this.selectGoodList.length > 0) {
          uni.navigateTo({
            url: `/pages/order/index?selectGoodList=${this.selectGoodList}`
          });
          uni.removeStorageSync("selectGoodIdList");
          this.selectGoodList = [];
        } else {
          uni.showToast({
            title: "请选择要结算的商品",
            icon: "none"
          });
        }
      }
    },
    onShow() {
      this.selectGoodList = uni.getStorageSync("selectGoodIdList");
      this.token = uni.getStorageSync("accessToken");
      const _this = this;
      uni.getStorage({
        key: "mytoken",
        success: function(res) {
          _this.getGoodCarList();
        },
        fail: function() {
          formatAppLog("log", "at pages/renmai/index.vue:251", "数据获取失败");
          uni.navigateTo({
            url: "/pages/login/index"
          });
        }
      });
    },
    onReady() {
      let that = this;
      uni.getSystemInfo({
        //调用uni-app接口获取屏幕高度
        success(res) {
          that.pH = res.windowHeight;
          that.listBoxHeight = that.pH;
          that.navHeight = that.listBoxHeight - 55;
        }
      });
    },
    computed: {
      totalMoney() {
        let selectArr = [];
        for (let i = 0; i < this.goodList.length; i++) {
          if (this.selectGoodList.includes(this.goodList[i].goodId)) {
            selectArr.push(this.goodList[i]);
          }
        }
        const listLength = selectArr.length;
        let totalMoneyNum = 0;
        for (let i = 0; i < listLength; i++) {
          totalMoneyNum += selectArr[i].num * selectArr[i].unitsPrice;
        }
        return totalMoneyNum;
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        $data.goodList.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "img-box"
        }, [
          vue.createElementVNode("image", {
            src: "/static/renmai/empty-box.png",
            mode: ""
          }),
          vue.createElementVNode("text", null, "购物车空空如也~"),
          vue.createElementVNode("view", { class: "button-box" }, [
            vue.createElementVNode("button", {
              onClick: _cache[0] || (_cache[0] = (...args) => $options.goHome && $options.goHome(...args)),
              class: "mini-btn",
              type: "warn",
              size: "mini"
            }, "继续乐购")
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: "list-box",
            style: vue.normalizeStyle({ height: $data.listBoxHeight + "px" })
          },
          [
            vue.createElementVNode(
              "scroll-view",
              {
                "scroll-y": "true",
                class: "scroll-Y",
                onScrolltolower: _cache[3] || (_cache[3] = (...args) => $options.lower && $options.lower(...args)),
                style: vue.normalizeStyle({ height: $data.navHeight + "px" })
              },
              [
                vue.createElementVNode(
                  "checkbox-group",
                  {
                    onChange: _cache[2] || (_cache[2] = (...args) => $options.checkboxChange && $options.checkboxChange(...args))
                  },
                  [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList($data.goodList, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("label", {
                          class: "uni-list-cell uni-list-cell-pd",
                          key: item.goodName
                        }, [
                          vue.createElementVNode("view", { class: "good-box" }, [
                            vue.createElementVNode("view", null, [
                              vue.createElementVNode("checkbox", {
                                value: item.goodId,
                                checked: item.checked,
                                style: { "transform": "scale(0.8)" }
                              }, null, 8, ["value", "checked"])
                            ]),
                            vue.createElementVNode("view", { class: "img-box" }, [
                              vue.createElementVNode("image", {
                                src: item.image,
                                mode: ""
                              }, null, 8, ["src"])
                            ]),
                            vue.createElementVNode("view", { class: "right-box" }, [
                              vue.createElementVNode(
                                "text",
                                { class: "title" },
                                vue.toDisplayString(item.goodName),
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode("view", { class: "num-box" }, [
                                vue.createElementVNode(
                                  "text",
                                  null,
                                  "总需：" + vue.toDisplayString(item.openNumber) + "人次，",
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode("text", null, [
                                  vue.createTextVNode("剩余"),
                                  vue.createElementVNode(
                                    "text",
                                    { class: "req-number" },
                                    vue.toDisplayString(item.reqNumber),
                                    1
                                    /* TEXT */
                                  ),
                                  vue.createTextVNode("人次")
                                ])
                              ]),
                              vue.createElementVNode("view", { class: "add-box" }, [
                                vue.createElementVNode("text", null, "参与人次"),
                                vue.createElementVNode("view", { class: "add-input-box" }, [
                                  vue.createElementVNode("view", {
                                    class: "jian",
                                    onClick: vue.withModifiers((e) => $options.addCarGood(e, item.goodId, item.num, "jian"), ["stop"])
                                  }, " - ", 8, ["onClick"]),
                                  vue.createElementVNode("input", {
                                    class: "uni-input",
                                    onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
                                    }, ["stop"])),
                                    onBlur: (e) => $options.inputClick(e, item.goodId, item.reqNumber, item.num),
                                    type: "number",
                                    value: item.num
                                  }, null, 40, ["onBlur", "value"]),
                                  vue.createElementVNode("view", {
                                    class: "jia",
                                    onClick: vue.withModifiers((e) => $options.addCarGood(e, item.goodId, item.num, "jia"), ["stop"])
                                  }, " + ", 8, ["onClick"])
                                ]),
                                vue.createElementVNode("view", {
                                  class: "good-del-box",
                                  onClick: vue.withModifiers(($event) => $options.delGood(item.goodId), ["stop"])
                                }, [
                                  vue.createElementVNode("text", null, "删除")
                                ], 8, ["onClick"])
                              ]),
                              vue.createElementVNode("view", { class: "danjia" }, [
                                vue.createTextVNode("单价"),
                                vue.createElementVNode("text", null, "1.00"),
                                vue.createTextVNode("金币")
                              ])
                            ])
                          ])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  32
                  /* HYDRATE_EVENTS */
                )
              ],
              36
              /* STYLE, HYDRATE_EVENTS */
            ),
            vue.createElementVNode("view", { class: "close-account" }, [
              vue.createElementVNode("view", { class: "close-box" }, [
                vue.createElementVNode("view", { class: "left-box" }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    "共" + vue.toDisplayString($data.selectGoodList.length) + "件商品，",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("text", null, [
                    vue.createElementVNode(
                      "text",
                      { class: "total-num" },
                      vue.toDisplayString($options.totalMoney),
                      1
                      /* TEXT */
                    ),
                    vue.createTextVNode("个金币")
                  ])
                ]),
                vue.createElementVNode("view", { class: "right-box" }, [
                  vue.createElementVNode("button", {
                    class: "mini-btn",
                    type: "warn",
                    size: "mini",
                    onClick: _cache[4] || (_cache[4] = (...args) => $options.goOrder && $options.goOrder(...args))
                  }, "结算")
                ])
              ])
            ])
          ],
          4
          /* STYLE */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesRenmaiIndex = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/renmai/index.vue"]]);
  const _sfc_main$e = {
    data() {
      return {};
    },
    methods: {
      formSubmit: function(e) {
        var formdata = e.detail.value;
        login("/user/login", formdata).then((res) => {
          let {
            code,
            data,
            flag,
            message
          } = res;
          if (code == 4022 && !flag) {
            uni.showToast({
              title: data,
              icon: "none"
            });
          } else if (code === 2e3 && flag) {
            uni.setStorageSync("accessToken", data.accessToken);
            uni.setStorage({
              key: "mytoken",
              data: {
                accessToken: data.accessToken
              },
              success() {
                formatAppLog("log", "at pages/login/index.vue:52", "存储成功");
              }
            });
            uni.showToast({
              title: "登录成功",
              icon: "none"
            });
            uni.switchTab({
              url: "/pages/index/index"
            });
          }
        }).catch((error) => {
          formatAppLog("log", "at pages/login/index.vue:64", "error==", error);
        });
      },
      goSingup: function(e) {
        formatAppLog("log", "at pages/login/index.vue:68", "去注册页");
        uni.navigateTo({
          url: "/pages/singup/index"
        });
      }
    },
    onBackPress(e) {
      uni.switchTab({
        url: "/pages/index/index"
      });
      return true;
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "form",
      {
        onSubmit: _cache[1] || (_cache[1] = (...args) => $options.formSubmit && $options.formSubmit(...args))
      },
      [
        vue.createElementVNode("view", { class: "uni-form-item" }, [
          vue.createElementVNode("view", { class: "title" }, "登录账号"),
          vue.createElementVNode("input", {
            class: "uni-input",
            name: "phone",
            placeholder: "账号登录"
          })
        ]),
        vue.createElementVNode("view", { class: "uni-form-item" }, [
          vue.createElementVNode("view", { class: "title" }, "登录密码"),
          vue.createElementVNode("input", {
            class: "uni-input",
            name: "password",
            password: "",
            placeholder: "请输入密码"
          })
        ]),
        vue.createElementVNode("view", { class: "uni-btn-v" }, [
          vue.createElementVNode("button", {
            type: "warn",
            plain: "true",
            "form-type": "submit"
          }, "登录")
        ]),
        vue.createElementVNode("view", { class: "sing-up-box" }, [
          vue.createElementVNode("text", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goSingup && $options.goSingup(...args))
          }, "马上注册"),
          vue.createElementVNode("text", null, "忘记密码？")
        ])
      ],
      32
      /* HYDRATE_EVENTS */
    );
  }
  const PagesLoginIndex = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-d08ef7d4"], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/login/index.vue"]]);
  const _sfc_main$d = {
    data() {
      return {};
    },
    methods: {
      formSubmit: function(e) {
        formatAppLog("log", "at pages/singup/index.vue:31", "form发生了submit事件，携带数据为：" + JSON.stringify(e.detail.value));
        var formdata = e.detail.value;
        singup("/user/registerUser", formdata).then((res) => {
          let { code, data, flag, message } = res;
          formatAppLog("log", "at pages/singup/index.vue:35", "注册res===", res);
          if (code === 2e3 && flag) {
            uni.showToast({
              title: "注册成功",
              icon: "none"
            });
            uni.navigateTo({
              url: "/pages/login/index"
            });
          } else if (code === 4021 && !flag) {
            uni.showToast({
              title: data,
              icon: "none"
            });
          }
        }).catch((error) => formatAppLog("log", "at pages/singup/index.vue:50", error));
      },
      goLogin: function(e) {
        formatAppLog("log", "at pages/singup/index.vue:53", "去注册页");
        uni.navigateTo({
          url: "/pages/login/index"
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "form",
      {
        onSubmit: _cache[1] || (_cache[1] = (...args) => $options.formSubmit && $options.formSubmit(...args))
      },
      [
        vue.createElementVNode("view", { class: "uni-form-item" }, [
          vue.createElementVNode("view", { class: "title" }, "登录账号"),
          vue.createElementVNode("input", {
            class: "uni-input",
            name: "phone",
            placeholder: "请输入账号"
          })
        ]),
        vue.createElementVNode("view", { class: "uni-form-item" }, [
          vue.createElementVNode("view", { class: "title" }, "登录密码"),
          vue.createElementVNode("input", {
            class: "uni-input",
            name: "password",
            password: "",
            placeholder: "请输入密码"
          })
        ]),
        vue.createElementVNode("view", { class: "uni-btn-v" }, [
          vue.createElementVNode("button", {
            type: "warn",
            plain: "true",
            "form-type": "submit"
          }, "注册")
        ]),
        vue.createElementVNode("view", { class: "sing-up-box" }, [
          vue.createElementVNode("text", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goLogin && $options.goLogin(...args))
          }, "马上登录"),
          vue.createElementVNode("text", null, "忘记密码？")
        ])
      ],
      32
      /* HYDRATE_EVENTS */
    );
  }
  const PagesSingupIndex = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/singup/index.vue"]]);
  const token$4 = uni.getStorageSync("accessToken");
  const _sfc_main$c = {
    data() {
      return {
        goodDetailData: {},
        indicatorDots: true,
        autoplay: true
      };
    },
    methods: {
      goShoppCar() {
        uni.switchTab({
          url: "/pages/renmai/index"
        });
      },
      addCar: function(goodId) {
        if (token$4) {
          addGoodToShoppCar("/shoppCar/addGoodToShoppCar", {
            goodId,
            num: 1,
            authorization: token$4
          }).then((res) => {
            const {
              code,
              flag
            } = res;
            if (code === 2e3 && flag) {
              uni.showToast({
                title: "成功加入购物车！",
                icon: "none"
              });
            }
          }).catch((error) => formatAppLog("log", "at pages/detailgood/index.vue:115", error));
        } else {
          uni.navigateTo({
            url: "/pages/login/index"
          });
        }
      }
    },
    created() {
    },
    onLoad(param) {
      getGoodOneMsgList("/home/getGoodOneMsgList", {
        goodId: param.goodId
      }).then((res) => {
        const {
          code,
          flag,
          data
        } = res;
        if (code === 2e3 && flag) {
          this.goodDetailData = data;
        }
      }).catch((error) => formatAppLog("log", "at pages/detailgood/index.vue:139", error));
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "uni-margin-wrap" }, [
          vue.createElementVNode("swiper", {
            class: "swiper",
            circular: "",
            "indicator-dots": $data.indicatorDots,
            autoplay: $data.autoplay
          }, [
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", { class: "img-box" }, [
                vue.createElementVNode("image", {
                  mode: "heightFix",
                  src: "/static/index/sj1.png"
                })
              ])
            ]),
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", { class: "img-box" }, [
                vue.createElementVNode("image", {
                  mode: "heightFix",
                  src: "/static/index/sj2.png"
                })
              ])
            ]),
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", { class: "img-box" }, [
                vue.createElementVNode("image", {
                  mode: "heightFix",
                  src: "/static/index/sj3.png"
                })
              ])
            ])
          ], 8, ["indicator-dots", "autoplay"])
        ]),
        vue.createElementVNode("view", { class: "box" }, [
          vue.createElementVNode("view", { class: "title-box" }, [
            vue.createElementVNode(
              "view",
              { class: "state" },
              vue.toDisplayString($data.goodDetailData.state),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { class: "title" },
              vue.toDisplayString($data.goodDetailData.goodName),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "tips" }, [
            vue.createElementVNode("text", null, "商品获得者将享有发货前无理由委托平台转让的保障")
          ]),
          vue.createElementVNode("view", { class: "process-box" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("progress", {
                percent: 20,
                activeColor: "#f98b2b",
                "stroke-width": "6"
              }),
              vue.createElementVNode("view", { class: "renci-box" }, [
                vue.createElementVNode(
                  "text",
                  null,
                  "满" + vue.toDisplayString($data.goodDetailData.openNumber) + "人次开奖",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", null, [
                  vue.createTextVNode("剩余"),
                  vue.createElementVNode(
                    "text",
                    { class: "req-number" },
                    vue.toDisplayString($data.goodDetailData.reqNumber),
                    1
                    /* TEXT */
                  ),
                  vue.createTextVNode("人次")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("text", null, "快速"),
              vue.createElementVNode("text", null, "充值")
            ])
          ]),
          vue.createElementVNode("view", { class: "buy-box" }, [
            vue.createElementVNode("view", { class: "title" }, [
              vue.createElementVNode("text", null, "购买方式")
            ]),
            vue.createElementVNode("view", { class: "con_box" }, [
              vue.createElementVNode("view", { class: "left-box" }, [
                vue.createElementVNode("text", null, [
                  vue.createTextVNode("商品总价值"),
                  vue.createElementVNode(
                    "text",
                    { class: "req-number" },
                    vue.toDisplayString($data.goodDetailData.reqNumber),
                    1
                    /* TEXT */
                  ),
                  vue.createTextVNode("金币")
                ]),
                vue.createElementVNode("text", null, [
                  vue.createTextVNode("单次价格"),
                  vue.createElementVNode("text", { class: "jiage" }, "1.00"),
                  vue.createTextVNode("金币")
                ])
              ]),
              vue.createElementVNode("view", { class: "right-box" }, [
                vue.createElementVNode("button", {
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.goShoppCar && $options.goShoppCar(...args)),
                  class: "mini-btn",
                  type: "warn",
                  size: "mini"
                }, "立即参与")
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "history-box" }, [
          vue.createElementVNode("view", { class: "left" }, [
            vue.createElementVNode("image", {
              src: "/static/detail/history.png",
              mode: ""
            }),
            vue.createElementVNode("text", null, "往期揭晓")
          ]),
          vue.createElementVNode("view", { class: "right" }, [
            vue.createElementVNode("image", {
              src: "/static/detail/right_arrow.png",
              mode: ""
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "bottom-box" }, [
          vue.createElementVNode("button", {
            class: "btn1",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.goShoppCar && $options.goShoppCar(...args))
          }, "立即参与"),
          vue.createElementVNode("button", {
            class: "btn2",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.addCar($data.goodDetailData.goodId))
          }, "加入购物车"),
          vue.createElementVNode("image", {
            src: "/static/detail/carshopp.png",
            mode: ""
          })
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesDetailgoodIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/detailgood/index.vue"]]);
  const token$3 = uni.getStorageSync("accessToken");
  const _sfc_main$b = {
    data() {
      return {
        goodList: [],
        selectGoodIdList: [],
        selectGoodList: [],
        totalMoney: 0
      };
    },
    methods: {
      getGoodCarList: function(e) {
        getGoodToShoppCarList("/shoppCar/getGoodToShoppCarList", {
          currentPage: 1,
          pageSize: 100,
          authorization: token$3
        }).then((res) => {
          const {
            code,
            data,
            total,
            flag
          } = res;
          if (code === 2e3 && flag) {
            this.goodList = data.list;
            for (let i = 0; i < this.goodList.length; i++) {
              if (this.selectGoodIdList.split(",").includes(`${this.goodList[i].goodId}`)) {
                this.selectGoodList.push(this.goodList[i]);
              }
            }
            this.selectGoodList.map((item) => {
              this.totalMoney += item.num;
            });
          }
        }).catch((error) => formatAppLog("log", "at pages/order/index.vue:65", error));
      },
      settlement() {
        formatAppLog("log", "at pages/order/index.vue:68", "this.selectGoodIdList===", this.selectGoodIdList);
        getSettlement("/shoppCar/getSettlement", {
          goodId: this.selectGoodIdList,
          authorization: token$3
        }).then((res) => {
          const { code, flag, data } = res;
          if (code === 2e3 && flag) {
            uni.showToast({
              title: "提交成功",
              icon: "success"
            });
            uni.navigateTo({
              url: "/pages/finishorderlist/index"
            });
          } else {
            uni.showToast({
              title: `${data}`,
              icon: "none"
            });
          }
        }).catch((error) => formatAppLog("log", "at pages/order/index.vue:88", error));
      }
    },
    onLoad(param) {
      formatAppLog("log", "at pages/order/index.vue:92", param);
      this.selectGoodIdList = param.selectGoodList;
      this.getGoodCarList();
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "order-box" }, [
      vue.createElementVNode("view", { class: "title" }, [
        vue.createElementVNode("text", null, "订单明细")
      ]),
      vue.createElementVNode("view", { class: "order-mingxi" }, [
        vue.createElementVNode("view", { class: "tips" }, [
          vue.createElementVNode("text", null, "注：请确认如下订单明细")
        ]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.selectGoodList, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "detail",
              key: item.goodId
            }, [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString(item.goodName.slice(0, 25)) + "...",
                1
                /* TEXT */
              ),
              vue.createElementVNode("text", null, [
                vue.createElementVNode(
                  "text",
                  { class: "req-number" },
                  vue.toDisplayString(item.num),
                  1
                  /* TEXT */
                ),
                vue.createTextVNode("人次")
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "total" }, [
        vue.createElementVNode("text", null, "商品合计："),
        vue.createElementVNode(
          "text",
          { class: "money" },
          vue.toDisplayString($data.totalMoney) + "金币",
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "btn-box" }, [
        vue.createElementVNode("button", {
          type: "warn",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.settlement && $options.settlement(...args))
        }, "提交订单")
      ])
    ]);
  }
  const PagesOrderIndex = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/order/index.vue"]]);
  const graceChecker = {
    error: "",
    check: function(data, rule) {
      for (var i = 0; i < rule.length; i++) {
        if (!rule[i].checkType) {
          return true;
        }
        if (!rule[i].name) {
          return true;
        }
        if (!rule[i].errorMsg) {
          return true;
        }
        if (!data[rule[i].name]) {
          this.error = rule[i].errorMsg;
          return false;
        }
        switch (rule[i].checkType) {
          case "string":
            var reg = new RegExp("^.{" + rule[i].checkRule + "}$");
            if (!reg.test(data[rule[i].name])) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "int":
            var reg = new RegExp("^(-[1-9]|[1-9])[0-9]{" + rule[i].checkRule + "}$");
            if (!reg.test(data[rule[i].name])) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "between":
            if (!this.isNumber(data[rule[i].name])) {
              this.error = rule[i].errorMsg;
              return false;
            }
            var minMax = rule[i].checkRule.split(",");
            minMax[0] = Number(minMax[0]);
            minMax[1] = Number(minMax[1]);
            if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "betweenD":
            var reg = /^-?[1-9][0-9]?$/;
            if (!reg.test(data[rule[i].name])) {
              this.error = rule[i].errorMsg;
              return false;
            }
            var minMax = rule[i].checkRule.split(",");
            minMax[0] = Number(minMax[0]);
            minMax[1] = Number(minMax[1]);
            if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "betweenF":
            var reg = /^-?[0-9][0-9]?.+[0-9]+$/;
            if (!reg.test(data[rule[i].name])) {
              this.error = rule[i].errorMsg;
              return false;
            }
            var minMax = rule[i].checkRule.split(",");
            minMax[0] = Number(minMax[0]);
            minMax[1] = Number(minMax[1]);
            if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "same":
            if (data[rule[i].name] != rule[i].checkRule) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "notsame":
            if (data[rule[i].name] == rule[i].checkRule) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "email":
            var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (!reg.test(data[rule[i].name])) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "phoneno":
            var reg = /^1[0-9]{10,10}$/;
            if (!reg.test(data[rule[i].name])) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "zipcode":
            var reg = /^[0-9]{6}$/;
            if (!reg.test(data[rule[i].name])) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "reg":
            var reg = new RegExp(rule[i].checkRule);
            if (!reg.test(data[rule[i].name])) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "in":
            if (rule[i].checkRule.indexOf(data[rule[i].name]) == -1) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
          case "notnull":
            if (data[rule[i].name] == null || data[rule[i].name].length < 1) {
              this.error = rule[i].errorMsg;
              return false;
            }
            break;
        }
      }
      return true;
    },
    isNumber: function(checkVal) {
      var reg = /^-?[1-9][0-9]?.?[0-9]*$/;
      return reg.test(checkVal);
    }
  };
  const token$2 = uni.getStorageSync("accessToken");
  const _sfc_main$a = {
    data() {
      return {
        formdata: {
          addrName: "",
          addrPhone: "",
          address: "",
          state: false
        },
        addrId: null
      };
    },
    methods: {
      formSubmit: function(e) {
        let rule = [
          {
            name: "addrName",
            checkType: "notnull",
            checkRule: "",
            errorMsg: "请填写收货人名称"
          },
          {
            name: "addrPhone",
            checkType: "notnull",
            checkRule: "",
            errorMsg: "请填收货人电话"
          },
          {
            name: "address",
            checkType: "notnull",
            checkRule: "",
            errorMsg: "请填写收货地址"
          }
        ];
        let formData = e.detail.value;
        let checkRes = graceChecker.check(formData, rule);
        if (checkRes) {
          if (this.addrId) {
            updateUserAddress("/userCenter/updateUserAddress", {
              ...formData,
              state: formData.state ? 1 : 0,
              addrId: this.addrId,
              authorization: token$2
            }).then((res) => {
              const { code, flag } = res;
              if (code === 2e3 && flag) {
                uni.showToast({
                  title: "修改成功！",
                  icon: "success"
                });
                uni.navigateTo({
                  url: "/pages/addresslist/index"
                });
              }
            }).catch((error) => {
              formatAppLog("log", "at pages/addressedit/index.vue:93", error);
            });
          } else {
            addUserAddress("/userCenter/addUserAddress", {
              ...formData,
              state: formData.state ? 1 : 0,
              authorization: token$2
            }).then((res) => {
              const { code, flag } = res;
              if (code === 2e3 && flag) {
                uni.showToast({
                  title: "添加成功！",
                  icon: "success"
                });
                uni.navigateTo({
                  url: "/pages/addresslist/index"
                });
              }
            }).catch((error) => {
              formatAppLog("log", "at pages/addressedit/index.vue:114", error);
            });
          }
        } else {
          uni.showToast({
            title: graceChecker.error,
            icon: "none"
          });
        }
      },
      getAddressDetial(addrId) {
        getUserAddressOne("/userCenter/getUserAddressOne", {
          addrId,
          authorization: token$2
        }).then((res) => {
          formatAppLog("log", "at pages/addressedit/index.vue:130", "res==>", res);
          const { code, flag, data } = res;
          if (code === 2e3 && flag) {
            this.formdata = data;
          }
        }).catch((error) => formatAppLog("log", "at pages/addressedit/index.vue:136", error));
      }
    },
    onLoad(params) {
      this.addrId = params.addrId;
      if (this.addrId) {
        this.getAddressDetial(this.addrId);
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "form",
        {
          onSubmit: _cache[3] || (_cache[3] = (...args) => $options.formSubmit && $options.formSubmit(...args))
        },
        [
          vue.createElementVNode("view", { class: "list-box" }, [
            vue.createElementVNode("text", null, "收货人"),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "uni-input",
                name: "addrName",
                placeholder: "请填写收货人",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formdata.addrName = $event)
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.formdata.addrName]
            ])
          ]),
          vue.createElementVNode("view", { class: "list-box" }, [
            vue.createElementVNode("text", null, "手机号码"),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                class: "uni-input",
                name: "addrPhone",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formdata.addrPhone = $event),
                placeholder: "请填写手机号码"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.formdata.addrPhone]
            ])
          ]),
          vue.createElementVNode("view", { class: "list-box" }, [
            vue.createElementVNode("text", null, "详细地址"),
            vue.withDirectives(vue.createElementVNode(
              "textarea",
              {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formdata.address = $event),
                name: "address",
                "auto-height": "",
                "placeholder-style": "color:lightgray",
                placeholder: "请填写完整的详细地址"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.formdata.address]
            ])
          ]),
          vue.createElementVNode("view", { class: "list-box" }, [
            vue.createElementVNode("text", null, "是否设为默认地址"),
            vue.createElementVNode("view", null, [
              vue.createElementVNode("switch", {
                checked: $data.formdata.state,
                name: "state"
              }, null, 8, ["checked"])
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-btn-v" }, [
            vue.createElementVNode("button", {
              type: "warn",
              "form-type": "submit"
            }, "保存地址")
          ])
        ],
        32
        /* HYDRATE_EVENTS */
      )
    ]);
  }
  const PagesAddresseditIndex = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/addressedit/index.vue"]]);
  let mpMixins = {};
  mpMixins = {
    data() {
      return {
        is_show: "none"
      };
    },
    watch: {
      show(newVal) {
        this.is_show = this.show;
      }
    },
    created() {
      this.swipeaction = this.getSwipeAction();
      if (this.swipeaction.children !== void 0) {
        this.swipeaction.children.push(this);
      }
    },
    mounted() {
      this.is_show = this.show;
    },
    methods: {
      // wxs 中调用
      closeSwipe(e) {
        if (!this.autoClose)
          return;
        this.swipeaction.closeOther(this);
      },
      change(e) {
        this.$emit("change", e.open);
        if (this.is_show !== e.open) {
          this.is_show = e.open;
        }
      },
      appTouchStart(e) {
        const {
          clientX
        } = e.changedTouches[0];
        this.clientX = clientX;
        this.timestamp = (/* @__PURE__ */ new Date()).getTime();
      },
      appTouchEnd(e, index, item, position) {
        const {
          clientX
        } = e.changedTouches[0];
        let diff = Math.abs(this.clientX - clientX);
        let time = (/* @__PURE__ */ new Date()).getTime() - this.timestamp;
        if (diff < 40 && time < 300) {
          this.$emit("click", {
            content: item,
            index,
            position
          });
        }
      },
      onClickForPC(index, item, position) {
        return;
      }
    }
  };
  const mpwxs = mpMixins;
  let bindIngXMixins = {};
  let otherMixins = {};
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxsswipe");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxsswipe"] = "afd46426";
  };
  const block1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("renderswipe");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["renderswipe"] = "5a1e922e";
  };
  const _sfc_main$9 = {
    mixins: [mpwxs, bindIngXMixins, otherMixins],
    emits: ["click", "change"],
    props: {
      // 控制开关
      show: {
        type: String,
        default: "none"
      },
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否自动关闭
      autoClose: {
        type: Boolean,
        default: true
      },
      // 滑动缺省距离
      threshold: {
        type: Number,
        default: 20
      },
      // 左侧按钮内容
      leftOptions: {
        type: Array,
        default() {
          return [];
        }
      },
      // 右侧按钮内容
      rightOptions: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    // TODO vue3
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    methods: {
      uninstall() {
        if (this.swipeaction) {
          this.swipeaction.children.forEach((item, index) => {
            if (item === this) {
              this.swipeaction.children.splice(index, 1);
            }
          });
        }
      },
      /**
       * 获取父元素实例
       */
      getSwipeAction(name = "uniSwipeAction") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 在微信小程序 app vue端 h5 使用wxs 实现"),
        vue.createElementVNode("view", { class: "uni-swipe" }, [
          vue.createElementVNode("view", {
            class: "uni-swipe_box",
            "change:prop": _ctx.wxsswipe.showWatch,
            prop: vue.wp(_ctx.is_show),
            "data-threshold": $props.threshold,
            "data-disabled": $props.disabled,
            onTouchstart: _cache[2] || (_cache[2] = (...args) => _ctx.wxsswipe.touchstart && _ctx.wxsswipe.touchstart(...args)),
            onTouchmove: _cache[3] || (_cache[3] = (...args) => _ctx.wxsswipe.touchmove && _ctx.wxsswipe.touchmove(...args)),
            onTouchend: _cache[4] || (_cache[4] = (...args) => _ctx.wxsswipe.touchend && _ctx.wxsswipe.touchend(...args))
          }, [
            vue.createCommentVNode(" 在微信小程序 app vue端 h5 使用wxs 实现"),
            vue.createElementVNode("view", { class: "uni-swipe_button-group button-group--left" }, [
              vue.renderSlot(_ctx.$slots, "left", {}, () => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($props.leftOptions, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      style: vue.normalizeStyle({
                        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                      }),
                      class: "uni-swipe_button button-hock",
                      onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args)),
                      onTouchend: ($event) => _ctx.appTouchEnd($event, index, item, "left"),
                      onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index, item, "left"), ["stop"])
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-swipe_button-text",
                          style: vue.normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                        },
                        vue.toDisplayString(item.text),
                        5
                        /* TEXT, STYLE */
                      )
                    ], 44, ["onTouchend", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], true)
            ]),
            vue.createElementVNode("view", { class: "uni-swipe_text--center" }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            vue.createElementVNode("view", { class: "uni-swipe_button-group button-group--right" }, [
              vue.renderSlot(_ctx.$slots, "right", {}, () => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($props.rightOptions, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      style: vue.normalizeStyle({
                        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                      }),
                      class: "uni-swipe_button button-hock",
                      onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args)),
                      onTouchend: ($event) => _ctx.appTouchEnd($event, index, item, "right"),
                      onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index, item, "right"), ["stop"])
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-swipe_button-text",
                          style: vue.normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                        },
                        vue.toDisplayString(item.text),
                        5
                        /* TEXT, STYLE */
                      )
                    ], 44, ["onTouchend", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], true)
            ])
          ], 40, ["change:prop", "prop", "data-threshold", "data-disabled"])
        ]),
        vue.createCommentVNode(" app nvue端 使用 bindingx "),
        vue.createCommentVNode(" 其他平台使用 js ，长列表性能可能会有影响")
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$9);
  if (typeof block1 === "function")
    block1(_sfc_main$9);
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-8ff2a577"], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue"]]);
  const _sfc_main$8 = {
    name: "uniSwipeAction",
    data() {
      return {};
    },
    created() {
      this.children = [];
    },
    methods: {
      // 公开给用户使用，重制组件样式
      resize() {
      },
      // 公开给用户使用，关闭全部 已经打开的组件
      closeAll() {
        this.children.forEach((vm) => {
          vm.is_show = "none";
        });
      },
      closeOther(vm) {
        if (this.openItem && this.openItem !== vm) {
          this.openItem.is_show = "none";
        }
        this.openItem = vm;
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue"]]);
  const token$1 = uni.getStorageSync("accessToken");
  const _sfc_main$7 = {
    data() {
      return {
        listData: [],
        addrId: null,
        options2: [
          {
            text: "取消",
            style: {
              backgroundColor: "#007aff"
            }
          },
          {
            text: "删除",
            style: {
              backgroundColor: "#F56C6C"
            }
          }
        ]
      };
    },
    methods: {
      swipeChange(e, addrId) {
        this.addrId = addrId;
      },
      bindClick(e) {
        if (this.listData.length === 1) {
          uni.showToast({
            title: "须保留一个收货地址",
            icon: "none"
          });
          return;
        }
        if (e.content.text == "删除") {
          deleteUserAddress("/userCenter/deleteUserAddress", {
            addrId: this.addrId,
            authorization: token$1
          }).then((res) => {
            const {
              code,
              flag
            } = res;
            if (code === 2e3 && flag) {
              uni.showToast({
                title: "删除成功！",
                icon: "none"
              });
              this.getAddressList();
            } else {
              uni.showToast({
                title: "删除失败！",
                icon: "none"
              });
            }
          }).catch((error) => formatAppLog("log", "at pages/addresslist/index.vue:85", error));
        }
      },
      addressAdd() {
        uni.navigateTo({
          url: "/pages/addressedit/index"
        });
      },
      getAddressList() {
        if (!token$1)
          return;
        getUserAddressList("/userCenter/getUserAddressList", {
          authorization: token$1
        }).then((res) => {
          const {
            code,
            flag,
            data
          } = res;
          if (code === 2e3 && flag) {
            this.listData = data;
          }
        }).catch((error) => formatAppLog("log", "at pages/addresslist/index.vue:106", error));
      },
      goAddressAdd(addrId) {
        uni.navigateTo({
          url: `/pages/addressedit/index?addrId=${addrId}`
        });
      }
    },
    onShow() {
      this.getAddressList();
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_swipe_action_item = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action-item"), __easycom_0);
    const _component_uni_swipe_action = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "addrss-list"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.listData, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "list-box",
                key: item.addrId,
                onClick: ($event) => $options.goAddressAdd(item.addrId)
              }, [
                vue.createVNode(
                  _component_uni_swipe_action,
                  null,
                  {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_swipe_action_item, {
                        "right-options": $data.options2,
                        "auto-close": false,
                        onChange: ($event) => $options.swipeChange($event, item.addrId),
                        onClick: $options.bindClick
                      }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("view", { class: "info" }, [
                            vue.createElementVNode(
                              "text",
                              null,
                              vue.toDisplayString(item.addrName) + " " + vue.toDisplayString(item.addrPhone),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { class: "def" },
                              vue.toDisplayString(item.state === 1 ? "默认" : ""),
                              1
                              /* TEXT */
                            )
                          ]),
                          vue.createElementVNode(
                            "view",
                            { class: "address" },
                            vue.toDisplayString(item.address),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["right-options", "onChange", "onClick"])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])),
        vue.createElementVNode("view", { class: "btn-box" }, [
          vue.createElementVNode("button", {
            type: "warn",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.addressAdd && $options.addressAdd(...args))
          }, "新增收货地址")
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesAddresslistIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/addresslist/index.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        img: "",
        userInfo: {}
      };
    },
    methods: {
      selectImg() {
        const that = this;
        uni.chooseImage({
          count: 1,
          //默认9
          sizeType: ["original", "compressed"],
          //可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album"],
          //从相册选择
          success: function(res) {
            formatAppLog("log", "at pages/myinfo/index.vue:57", JSON.stringify(res.tempFilePaths));
            uni.uploadFile({
              url: `${baseUrl}/backManage/uploadfile`,
              //仅为示例，非真实的接口地址
              filePath: res.tempFilePaths[0],
              name: "file",
              formData: {
                "user": "test"
              },
              success: (uploadFileRes) => {
                const {
                  data,
                  flag
                } = JSON.parse(uploadFileRes.data);
                if (flag) {
                  that.img = data;
                }
              }
            });
          }
        });
      },
      formSubmit: function(e) {
        formatAppLog("log", "at pages/myinfo/index.vue:79", "form发生了submit事件，携带数据为：" + JSON.stringify(e.detail.value));
        let rule = [{
          name: "userName",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写用户名"
        }, {
          name: "phone",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写手机号"
        }, {
          name: "password",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写密码"
        }];
        let formData = e.detail.value;
        let checkRes = graceChecker.check(formData, rule);
        formatAppLog("log", "at pages/myinfo/index.vue:100", "checkRes==>", checkRes, formData);
        formatAppLog("log", "at pages/myinfo/index.vue:101", "graceChecker.error==>", graceChecker.error);
        if (checkRes) {
          editUser("/user/editUser", { ...formData, image: this.img }).then((res) => {
            uni.showToast({
              title: "修改成功",
              icon: "success"
            });
          }).catch((err) => formatAppLog("log", "at pages/myinfo/index.vue:109", err));
        } else {
          uni.showToast({
            title: graceChecker.error,
            icon: "none"
          });
        }
      },
      getUserInfo() {
        getUserMsg("/userCenter/getUserMsg").then((res) => {
          const {
            flag,
            data
          } = res;
          if (res.flag) {
            this.userInfo = data;
            this.img = data.image;
          }
        }).catch((error) => formatAppLog("log", "at pages/myinfo/index.vue:127", error));
      }
    },
    onLoad() {
      this.getUserInfo();
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "box" }, [
      vue.createElementVNode(
        "form",
        {
          onSubmit: _cache[4] || (_cache[4] = (...args) => $options.formSubmit && $options.formSubmit(...args))
        },
        [
          vue.createElementVNode("view", { class: "img_line" }, [
            vue.createElementVNode("view", { class: "text" }, " 头像： "),
            vue.createElementVNode("view", { class: "img_box" }, [
              vue.createElementVNode("button", {
                size: "mini",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.selectImg && $options.selectImg(...args))
              }, "选择图片"),
              vue.createElementVNode("image", {
                src: $data.img,
                mode: ""
              }, null, 8, ["src"])
            ])
          ]),
          vue.createElementVNode("view", { class: "input-box" }, [
            vue.createElementVNode("view", { class: "title" }, "用户名："),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                name: "userName",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.userInfo.userName = $event),
                placeholder: "请输入用户名"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.userInfo.userName]
            ])
          ]),
          vue.createElementVNode("view", { class: "input-box" }, [
            vue.createElementVNode("view", { class: "title" }, "新密码："),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                name: "password",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.userInfo.password = $event),
                placeholder: "请输入新密码"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.userInfo.password]
            ])
          ]),
          vue.createElementVNode("view", { class: "input-box" }, [
            vue.createElementVNode("view", { class: "title" }, "手机号："),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "text",
                name: "phone",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.userInfo.phone = $event),
                placeholder: "请输入手机号"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, $data.userInfo.phone]
            ])
          ]),
          vue.createElementVNode("view", { class: "uni-btn-v" }, [
            vue.createElementVNode("button", {
              type: "warn",
              "form-type": "submit"
            }, "修改信息")
          ])
        ],
        32
        /* HYDRATE_EVENTS */
      )
    ]);
  }
  const PagesMyinfoIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-3c3f8748"], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/myinfo/index.vue"]]);
  const token = uni.getStorageSync("accessToken");
  const _sfc_main$5 = {
    data() {
      return {};
    },
    methods: {
      formSubmit: function(e) {
        formatAppLog("log", "at pages/topup/index.vue:30", "form发生了submit事件，携带数据为：" + JSON.stringify(e.detail.value));
        let rule = [{
          name: "money",
          checkType: "notnull",
          checkRule: "",
          errorMsg: "请填写充值金额"
        }];
        let formData = e.detail.value;
        let checkRes = graceChecker.check(formData, rule);
        if (!token) {
          uni.navigateTo({
            url: "/pages/login/index"
          });
          return;
        }
        if (checkRes) {
          addUserAccount("/userCenter/addUserAccount", { money: formData.money, authorization: token }).then((res) => {
            formatAppLog("log", "at pages/topup/index.vue:49", res);
            const { code, flag } = res;
            if (code === 2e3 && flag) {
              uni.showToast({
                title: "充值成功",
                icon: "success"
              });
            }
          }).catch((error) => formatAppLog("log", "at pages/topup/index.vue:57", error));
        }
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "form-box" }, [
      vue.createElementVNode(
        "form",
        {
          onSubmit: _cache[0] || (_cache[0] = (...args) => $options.formSubmit && $options.formSubmit(...args)),
          onReset: _cache[1] || (_cache[1] = (...args) => _ctx.formReset && _ctx.formReset(...args))
        },
        [
          vue.createElementVNode("view", { class: "input-box" }, [
            vue.createElementVNode("view", { class: "title" }, "充值金额："),
            vue.createElementVNode("input", {
              name: "money",
              type: "number"
            })
          ]),
          vue.createElementVNode("view", { class: "uni-btn-v" }, [
            vue.createElementVNode("button", {
              type: "primary",
              "form-type": "submit"
            }, "立即支付")
          ])
        ],
        32
        /* HYDRATE_EVENTS */
      )
    ]);
  }
  const PagesTopupIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/topup/index.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "title" }, [
          vue.createElementVNode("text", null, "当一件商品达到总参与人数，抽出一名商品获奖者")
        ]),
        vue.createElementVNode("view", { class: "box" }, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createElementVNode("text", null, "了解玩法规则")
          ]),
          vue.createElementVNode("view", { class: "context" }, " 每件商品参考市场价平分成相应“等份”，每份1元，1份对应1个参与码。 同一件商品可以购买多次或一次购买多份。当一件商品所有“等份”全部售出后计算出“幸运参与码”， 拥有“幸运参与码”者即可获得此商品。 ")
        ]),
        vue.createElementVNode("view", { class: "box" }, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createElementVNode("text", null, "幸运码计算方式")
          ]),
          vue.createElementVNode("view", { class: "context" }, " 取该商品最后购买时间前网站所有商品100条购买时间记录(限时揭晓商品取截止 时间前网站所有商品100条购买时间记录)。时间按时、分、毫秒依次排列组成一组数值。 将这100组数值之和除以商品总需参与人次取余数，余数加上10000001即为“幸运参与码” ")
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesRuleRule = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/rule/rule.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        listdata: [],
        listdataTotal: null,
        pageSize: 10,
        pH: 0,
        //窗口高度
        navHeight: 0
        //元素的所需高度
      };
    },
    methods: {
      lower: function(e) {
        const listdataLength = this.listdata.length;
        if (listdataLength < this.listdataTotal) {
          this.pageSize += 10;
          this.getlist();
        }
      },
      getlist() {
        getUserOrderList("/userCenter/getUserOrderList", {
          currentPage: 1,
          pageSize: this.pageSize
        }).then((res) => {
          formatAppLog("log", "at pages/finishorderlist/index.vue:78", res);
          const {
            code,
            flag,
            data
          } = res;
          if (code === 2e3 && flag) {
            this.listdata = data.list;
            this.listdataTotal = data.total;
          }
        }).catch((error) => formatAppLog("log", "at pages/finishorderlist/index.vue:88", error));
      }
    },
    onShow() {
      this.getlist();
    },
    onReady() {
      let that = this;
      uni.getSystemInfo({
        //调用uni-app接口获取屏幕高度
        success(res) {
          that.pH = res.windowHeight;
          let titleH = uni.createSelectorQuery().select(".scroll-Y");
          titleH.boundingClientRect((data) => {
            formatAppLog("log", "at pages/finishorderlist/index.vue:101", "data==>", data);
            let pH = that.pH;
            that.navHeight = pH - data.top;
          }).exec();
        }
      });
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "scroll-view",
      {
        "scroll-y": "true",
        class: "scroll-Y",
        onScrolltolower: _cache[0] || (_cache[0] = (...args) => $options.lower && $options.lower(...args)),
        style: vue.normalizeStyle({ height: $data.navHeight + "px" })
      },
      [
        vue.createElementVNode("view", { class: "list-data-box" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.listdata, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "data-box"
              }, [
                vue.createElementVNode("view", { class: "title_line_box" }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    "订单编号：" + vue.toDisplayString(item.orderCode),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "content_box" }, [
                  vue.createElementVNode("view", { class: "img_box" }, [
                    vue.createElementVNode("image", {
                      src: item.image,
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "right_box" }, [
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "商品名称："),
                      vue.createElementVNode(
                        "text",
                        { class: "title_name" },
                        vue.toDisplayString(item.goodName),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "下单时间："),
                      vue.createElementVNode(
                        "text",
                        { class: "line_title" },
                        vue.toDisplayString(item.orderTime),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "揭晓时间："),
                      vue.createElementVNode(
                        "text",
                        { class: "line_title" },
                        vue.toDisplayString(item.openTime),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "幸运号："),
                      vue.createElementVNode(
                        "text",
                        { class: "line_title" },
                        vue.toDisplayString(item.luckyCode),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "用户幸运号："),
                      vue.createElementVNode(
                        "text",
                        { class: "line_title" },
                        vue.toDisplayString(item.userLuckyCode),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "是否中奖："),
                      vue.createElementVNode(
                        "text",
                        { class: "line_title" },
                        vue.toDisplayString(item.luckyFlag),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "购买进度："),
                      vue.createElementVNode("progress", {
                        percent: item.buyRate,
                        activeColor: "#f98b2b",
                        "stroke-width": "6"
                      }, null, 8, ["percent"])
                    ])
                  ])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        $data.listdataTotal == $data.listdata.length ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "not_more"
        }, " ---暂无更多数据--- ")) : vue.createCommentVNode("v-if", true)
      ],
      36
      /* STYLE, HYDRATE_EVENTS */
    );
  }
  const PagesFinishorderlistIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/finishorderlist/index.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        listdata: [],
        listdataTotal: null,
        pageSize: 10,
        pH: 0,
        //窗口高度
        navHeight: 0
        //元素的所需高度
      };
    },
    methods: {
      lower: function(e) {
        const listdataLength = this.listdata.length;
        if (listdataLength < this.listdataTotal) {
          this.pageSize += 10;
          this.getlist();
        }
      },
      getlist() {
        getUserPrizeList("/userCenter/getUserPrizeList", {
          currentPage: 1,
          pageSize: this.pageSize
        }).then((res) => {
          formatAppLog("log", "at pages/winrecord/index.vue:59", res);
          const {
            code,
            flag,
            data,
            total
          } = res;
          if (code === 2e3 && flag) {
            this.listdata = data.list;
            this.listdataTotal = total;
          }
        }).catch((error) => formatAppLog("log", "at pages/winrecord/index.vue:70", error));
      }
    },
    onShow() {
      this.getlist();
    },
    onReady() {
      let that = this;
      uni.getSystemInfo({
        //调用uni-app接口获取屏幕高度
        success(res) {
          that.pH = res.windowHeight;
          let titleH = uni.createSelectorQuery().select(".scroll-Y");
          titleH.boundingClientRect((data) => {
            let pH = that.pH;
            that.navHeight = pH - data.top;
          }).exec();
        }
      });
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "scroll-view",
      {
        "scroll-y": "true",
        class: "scroll-Y",
        onScrolltolower: _cache[0] || (_cache[0] = (...args) => $options.lower && $options.lower(...args)),
        style: vue.normalizeStyle({ height: $data.navHeight + "px" })
      },
      [
        vue.createElementVNode("view", { class: "list-data-box" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.listdata, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "data-box"
              }, [
                vue.createCommentVNode(' 		<view class="title_line_box">\r\n						<text>揭晓时间：{{item.openTime}}</text>\r\n					</view> '),
                vue.createElementVNode("view", { class: "content_box" }, [
                  vue.createElementVNode("view", { class: "img_box" }, [
                    vue.createElementVNode("image", {
                      src: item.image,
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "right_box" }, [
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "商品名称："),
                      vue.createElementVNode(
                        "text",
                        { class: "title_name" },
                        vue.toDisplayString(item.goodName),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "商品ID："),
                      vue.createElementVNode(
                        "text",
                        { class: "line_title" },
                        vue.toDisplayString(item.goodId),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "幸运号码："),
                      vue.createElementVNode(
                        "text",
                        { class: "title_lucky" },
                        vue.toDisplayString(item.luckyCode),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ],
      36
      /* STYLE, HYDRATE_EVENTS */
    );
  }
  const PagesWinrecordIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/winrecord/index.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        listdata: [],
        listdataTotal: null,
        pageSize: 10,
        pH: 0,
        //窗口高度
        navHeight: 0
        //元素的所需高度
      };
    },
    methods: {
      lower: function(e) {
        const listdataLength = this.listdata.length;
        if (listdataLength < this.listdataTotal) {
          this.pageSize += 10;
          this.getlist();
        }
      },
      getlist() {
        getLatestDisclosureList("/latest/getLatestDisclosureList", {
          currentPage: 1,
          pageSize: this.pageSize
        }).then((res) => {
          const { code, flag, data, total } = res;
          if (code === 2e3 && flag) {
            this.listdata = data.list;
            this.listdataTotal = data.total;
          }
        }).catch((error) => formatAppLog("log", "at pages/latestdisclosure/index.vue:65", error));
      }
    },
    onShow() {
      this.getlist();
    },
    onReady() {
      let that = this;
      uni.getSystemInfo({
        //调用uni-app接口获取屏幕高度
        success(res) {
          that.pH = res.windowHeight;
          let titleH = uni.createSelectorQuery().select(".scroll-Y");
          titleH.boundingClientRect((data) => {
            let pH = that.pH;
            that.navHeight = pH - data.top;
          }).exec();
        }
      });
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "scroll-view",
      {
        "scroll-y": "true",
        class: "scroll-Y",
        onScrolltolower: _cache[0] || (_cache[0] = (...args) => $options.lower && $options.lower(...args)),
        style: vue.normalizeStyle({ height: $data.navHeight + "px" })
      },
      [
        vue.createElementVNode("view", { class: "list-data-box" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.listdata, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "data-box"
              }, [
                vue.createElementVNode("view", { class: "title_line_box" }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    "揭晓时间：" + vue.toDisplayString(item.openTime),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "content_box" }, [
                  vue.createElementVNode("view", { class: "img_box" }, [
                    vue.createElementVNode("image", {
                      src: item.image,
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "right_box" }, [
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "获奖者："),
                      vue.createElementVNode(
                        "text",
                        { class: "title_name" },
                        vue.toDisplayString(item.userName),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "用户ID："),
                      vue.createElementVNode(
                        "text",
                        { class: "line_title" },
                        vue.toDisplayString(item.userId) + " (唯一不变标识）",
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "line" }, [
                      vue.createElementVNode("text", { class: "line_title" }, "幸运号码："),
                      vue.createElementVNode(
                        "text",
                        { class: "title_lucky" },
                        vue.toDisplayString(item.luckyCode),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        $data.listdataTotal == $data.listdata.length ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "not_more"
        }, "---暂无更多数据---")) : vue.createCommentVNode("v-if", true)
      ],
      36
      /* STYLE, HYDRATE_EVENTS */
    );
  }
  const PagesLatestdisclosureIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-546ec725"], ["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/pages/latestdisclosure/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/my/index", PagesMyIndex);
  __definePage("pages/renmai/index", PagesRenmaiIndex);
  __definePage("pages/login/index", PagesLoginIndex);
  __definePage("pages/singup/index", PagesSingupIndex);
  __definePage("pages/detailgood/index", PagesDetailgoodIndex);
  __definePage("pages/order/index", PagesOrderIndex);
  __definePage("pages/addressedit/index", PagesAddresseditIndex);
  __definePage("pages/addresslist/index", PagesAddresslistIndex);
  __definePage("pages/myinfo/index", PagesMyinfoIndex);
  __definePage("pages/topup/index", PagesTopupIndex);
  __definePage("pages/rule/rule", PagesRuleRule);
  __definePage("pages/finishorderlist/index", PagesFinishorderlistIndex);
  __definePage("pages/winrecord/index", PagesWinrecordIndex);
  __definePage("pages/latestdisclosure/index", PagesLatestdisclosureIndex);
  /*!
    * @intlify/shared v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const inBrowser = typeof window !== "undefined";
  let mark;
  let measure;
  {
    const perf = inBrowser && window.performance;
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = (tag) => perf.mark(tag);
      measure = (name, startTag, endTag) => {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
      };
    }
  }
  const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  function format(message, ...args) {
    if (args.length === 1 && isObject$1(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
      return args.hasOwnProperty(identifier) ? args[identifier] : "";
    });
  }
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  const isNumber = (val) => typeof val === "number" && isFinite(val);
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
  function warn(msg, err) {
    if (typeof console !== "undefined") {
      console.warn(`[intlify] ` + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  const assign = Object.assign;
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  function hasOwn$1(obj, key) {
    return hasOwnProperty$1.call(obj, key);
  }
  const isArray = Array.isArray;
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isBoolean = (val) => typeof val === "boolean";
  const isObject$1 = (val) => (
    // eslint-disable-line
    val !== null && typeof val === "object"
  );
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const toDisplayString = (val) => {
    return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
  };
  const RANGE = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function createEmitter() {
    const events = /* @__PURE__ */ new Map();
    const emitter = {
      events,
      on(event, handler) {
        const handlers = events.get(event);
        const added = handlers && handlers.push(handler);
        if (!added) {
          events.set(event, [handler]);
        }
      },
      off(event, handler) {
        const handlers = events.get(event);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit(event, payload) {
        (events.get(event) || []).slice().map((handler) => handler(payload));
        (events.get("*") || []).slice().map((handler) => handler(event, payload));
      }
    };
    return emitter;
  }
  /*!
    * @intlify/message-resolver v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  const isObject = (val) => (
    // eslint-disable-line
    val !== null && typeof val === "object"
  );
  const pathStateMachine = [];
  pathStateMachine[
    0
    /* BEFORE_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      0
      /* BEFORE_PATH */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    1
    /* IN_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      1
      /* IN_PATH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    2
    /* BEFORE_IDENT */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    3
    /* IN_IDENT */
  ] = {
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "w"
      /* WORKSPACE */
    ]: [
      1,
      1
      /* PUSH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2,
      1
      /* PUSH */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      1
      /* PUSH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7,
      1
      /* PUSH */
    ]
  };
  pathStateMachine[
    4
    /* IN_SUB_PATH */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      5,
      0
      /* APPEND */
    ],
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      6,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      2
      /* INC_SUB_PATH_DEPTH */
    ],
    [
      "]"
      /* RIGHT_BRACKET */
    ]: [
      1,
      3
      /* PUSH_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      4,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    5
    /* IN_SINGLE_QUOTE */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      5,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    6
    /* IN_DOUBLE_QUOTE */
  ] = {
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      6,
      0
      /* APPEND */
    ]
  };
  const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }
  function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
  }
  function getPathCharType(ch) {
    if (ch === void 0 || ch === null) {
      return "o";
    }
    const code = ch.charCodeAt(0);
    switch (code) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return ch;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function formatSubPath(path) {
    const trimmed = path.trim();
    if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
  }
  function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0;
    let subPathDepth = 0;
    let c;
    let key;
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[
      0
      /* APPEND */
    ] = () => {
      if (key === void 0) {
        key = newChar;
      } else {
        key += newChar;
      }
    };
    actions[
      1
      /* PUSH */
    ] = () => {
      if (key !== void 0) {
        keys.push(key);
        key = void 0;
      }
    };
    actions[
      2
      /* INC_SUB_PATH_DEPTH */
    ] = () => {
      actions[
        0
        /* APPEND */
      ]();
      subPathDepth++;
    };
    actions[
      3
      /* PUSH_SUB_PATH */
    ] = () => {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = 4;
        actions[
          0
          /* APPEND */
        ]();
      } else {
        subPathDepth = 0;
        if (key === void 0) {
          return false;
        }
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[
            1
            /* PUSH */
          ]();
        }
      }
    };
    function maybeUnescapeQuote() {
      const nextChar = path[index + 1];
      if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
        index++;
        newChar = "\\" + nextChar;
        actions[
          0
          /* APPEND */
        ]();
        return true;
      }
    }
    while (mode !== null) {
      index++;
      c = path[index];
      if (c === "\\" && maybeUnescapeQuote()) {
        continue;
      }
      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap[
        "l"
        /* ELSE */
      ] || 8;
      if (transition === 8) {
        return;
      }
      mode = transition[0];
      if (transition[1] !== void 0) {
        action = actions[transition[1]];
        if (action) {
          newChar = c;
          if (action() === false) {
            return;
          }
        }
      }
      if (mode === 7) {
        return keys;
      }
    }
  }
  const cache = /* @__PURE__ */ new Map();
  function resolveValue(obj, path) {
    if (!isObject(obj)) {
      return null;
    }
    let hit = cache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        cache.set(path, hit);
      }
    }
    if (!hit) {
      return null;
    }
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
      const val = last[hit[i]];
      if (val === void 0) {
        return null;
      }
      last = val;
      i++;
    }
    return last;
  }
  function handleFlatJson(obj) {
    if (!isObject(obj)) {
      return obj;
    }
    for (const key in obj) {
      if (!hasOwn(obj, key)) {
        continue;
      }
      if (!key.includes(
        "."
        /* DOT */
      )) {
        if (isObject(obj[key])) {
          handleFlatJson(obj[key]);
        }
      } else {
        const subKeys = key.split(
          "."
          /* DOT */
        );
        const lastIndex = subKeys.length - 1;
        let currentObj = obj;
        for (let i = 0; i < lastIndex; i++) {
          if (!(subKeys[i] in currentObj)) {
            currentObj[subKeys[i]] = {};
          }
          currentObj = currentObj[subKeys[i]];
        }
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
        if (isObject(currentObj[subKeys[lastIndex]])) {
          handleFlatJson(currentObj[subKeys[lastIndex]]);
        }
      }
    }
    return obj;
  }
  /*!
    * @intlify/runtime v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const DEFAULT_MODIFIER = (str) => str;
  const DEFAULT_MESSAGE = (ctx) => "";
  const DEFAULT_MESSAGE_DATA_TYPE = "text";
  const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
  const DEFAULT_INTERPOLATE = toDisplayString;
  function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
      return choice ? choice > 1 ? 1 : 0 : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
    const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
    return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
  }
  function normalizeNamed(pluralIndex, props2) {
    if (!props2.count) {
      props2.count = pluralIndex;
    }
    if (!props2.n) {
      props2.n = pluralIndex;
    }
  }
  function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
    const orgPluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
    const plural = (messages2) => messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
    const _list = options.list || [];
    const list = (index) => _list[index];
    const _named = options.named || {};
    isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
      const msg = isFunction(options.messages) ? options.messages(key) : isObject$1(options.messages) ? options.messages[key] : false;
      return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
    }
    const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
    const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
    const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
    const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
    const ctx = {
      [
        "list"
        /* LIST */
      ]: list,
      [
        "named"
        /* NAMED */
      ]: named,
      [
        "plural"
        /* PLURAL */
      ]: plural,
      [
        "linked"
        /* LINKED */
      ]: (key, modifier) => {
        const msg = message(key)(ctx);
        return isString(modifier) ? _modifier(modifier)(msg) : msg;
      },
      [
        "message"
        /* MESSAGE */
      ]: message,
      [
        "type"
        /* TYPE */
      ]: type,
      [
        "interpolate"
        /* INTERPOLATE */
      ]: interpolate,
      [
        "normalize"
        /* NORMALIZE */
      ]: normalize
    };
    return ctx;
  }
  /*!
    * @intlify/message-compiler v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const errorMessages$2 = {
    // tokenizer error messages
    [
      0
      /* EXPECTED_TOKEN */
    ]: `Expected token: '{0}'`,
    [
      1
      /* INVALID_TOKEN_IN_PLACEHOLDER */
    ]: `Invalid token in placeholder: '{0}'`,
    [
      2
      /* UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER */
    ]: `Unterminated single quote in placeholder`,
    [
      3
      /* UNKNOWN_ESCAPE_SEQUENCE */
    ]: `Unknown escape sequence: \\{0}`,
    [
      4
      /* INVALID_UNICODE_ESCAPE_SEQUENCE */
    ]: `Invalid unicode escape sequence: {0}`,
    [
      5
      /* UNBALANCED_CLOSING_BRACE */
    ]: `Unbalanced closing brace`,
    [
      6
      /* UNTERMINATED_CLOSING_BRACE */
    ]: `Unterminated closing brace`,
    [
      7
      /* EMPTY_PLACEHOLDER */
    ]: `Empty placeholder`,
    [
      8
      /* NOT_ALLOW_NEST_PLACEHOLDER */
    ]: `Not allowed nest placeholder`,
    [
      9
      /* INVALID_LINKED_FORMAT */
    ]: `Invalid linked format`,
    // parser error messages
    [
      10
      /* MUST_HAVE_MESSAGES_IN_PLURAL */
    ]: `Plural must have messages`,
    [
      11
      /* UNEXPECTED_EMPTY_LINKED_MODIFIER */
    ]: `Unexpected empty linked modifier`,
    [
      12
      /* UNEXPECTED_EMPTY_LINKED_KEY */
    ]: `Unexpected empty linked key`,
    [
      13
      /* UNEXPECTED_LEXICAL_ANALYSIS */
    ]: `Unexpected lexical analysis in token: '{0}'`
  };
  function createCompileError(code, loc, options = {}) {
    const { domain, messages: messages2, args } = options;
    const msg = format((messages2 || errorMessages$2)[code] || "", ...args || []);
    const error = new SyntaxError(String(msg));
    error.code = code;
    if (loc) {
      error.location = loc;
    }
    error.domain = domain;
    return error;
  }
  /*!
    * @intlify/devtools-if v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const IntlifyDevToolsHooks = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  /*!
    * @intlify/core-base v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  let devtools = null;
  function setDevToolsHook(hook) {
    devtools = hook;
  }
  function initI18nDevTools(i18n2, version, meta) {
    devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n: i18n2,
      version,
      meta
    });
  }
  const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
  function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
  }
  const warnMessages$1 = {
    [
      0
      /* NOT_FOUND_KEY */
    ]: `Not found '{key}' key in '{locale}' locale messages.`,
    [
      1
      /* FALLBACK_TO_TRANSLATE */
    ]: `Fall back to translate '{key}' key with '{target}' locale.`,
    [
      2
      /* CANNOT_FORMAT_NUMBER */
    ]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
    [
      3
      /* FALLBACK_TO_NUMBER_FORMAT */
    ]: `Fall back to number format '{key}' key with '{target}' locale.`,
    [
      4
      /* CANNOT_FORMAT_DATE */
    ]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
    [
      5
      /* FALLBACK_TO_DATE_FORMAT */
    ]: `Fall back to datetime format '{key}' key with '{target}' locale.`
  };
  function getWarnMessage$1(code, ...args) {
    return format(warnMessages$1[code], ...args);
  }
  const VERSION$1 = "9.1.9";
  const NOT_REOSLVED = -1;
  const MISSING_RESOLVE_VALUE = "";
  function getDefaultLinkedModifiers() {
    return {
      upper: (val) => isString(val) ? val.toUpperCase() : val,
      lower: (val) => isString(val) ? val.toLowerCase() : val,
      // prettier-ignore
      capitalize: (val) => isString(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
    };
  }
  let _compiler;
  let _additionalMeta = null;
  const setAdditionalMeta = (meta) => {
    _additionalMeta = meta;
  };
  const getAdditionalMeta = () => _additionalMeta;
  let _cid = 0;
  function createCoreContext(options = {}) {
    const version = isString(options.version) ? options.version : VERSION$1;
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const messages2 = isPlainObject(options.messages) ? options.messages : { [locale]: {} };
    const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
    const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
    const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = isFunction(options.missing) ? options.missing : null;
    const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    const processor = isPlainObject(options.processor) ? options.processor : null;
    const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
    const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
    const internalOptions = options;
    const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
    const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
    const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
      version,
      cid: _cid,
      locale,
      fallbackLocale,
      messages: messages2,
      datetimeFormats,
      numberFormats,
      modifiers,
      pluralRules,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackFormat,
      unresolving,
      postTranslation,
      processor,
      warnHtmlMessage,
      escapeParameter,
      messageCompiler,
      onWarn,
      __datetimeFormatters,
      __numberFormatters,
      __meta
    };
    {
      context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
    }
    {
      initI18nDevTools(context, version, __meta);
    }
    return context;
  }
  function isTranslateFallbackWarn(fallback, key) {
    return fallback instanceof RegExp ? fallback.test(key) : fallback;
  }
  function isTranslateMissingWarn(missing, key) {
    return missing instanceof RegExp ? missing.test(key) : missing;
  }
  function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("missing", {
          locale,
          key,
          type,
          groupId: `${type}:${key}`
        });
      }
    }
    if (missing !== null) {
      const ret = missing(context, locale, key, type);
      return isString(ret) ? ret : key;
    } else {
      if (isTranslateMissingWarn(missingWarn, key)) {
        onWarn(getWarnMessage$1(0, { key, locale }));
      }
      return key;
    }
  }
  function getLocaleChain(ctx, fallback, start) {
    const context = ctx;
    if (!context.__localeChainCache) {
      context.__localeChainCache = /* @__PURE__ */ new Map();
    }
    let chain = context.__localeChainCache.get(start);
    if (!chain) {
      chain = [];
      let block = [start];
      while (isArray(block)) {
        block = appendBlockToChain(chain, block, fallback);
      }
      const defaults = isArray(fallback) ? fallback : isPlainObject(fallback) ? fallback["default"] ? fallback["default"] : null : fallback;
      block = isString(defaults) ? [defaults] : defaults;
      if (isArray(block)) {
        appendBlockToChain(chain, block, false);
      }
      context.__localeChainCache.set(start, chain);
    }
    return chain;
  }
  function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i = 0; i < block.length && isBoolean(follow); i++) {
      const locale = block[i];
      if (isString(locale)) {
        follow = appendLocaleToChain(chain, block[i], blocks);
      }
    }
    return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split("-");
    do {
      const target = tokens.join("-");
      follow = appendItemToChain(chain, target, blocks);
      tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
  }
  function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
      follow = true;
      if (target) {
        follow = target[target.length - 1] !== "!";
        const locale = target.replace(/!/g, "");
        chain.push(locale);
        if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
          follow = blocks[locale];
        }
      }
    }
    return follow;
  }
  function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = /* @__PURE__ */ new Map();
    getLocaleChain(ctx, fallback, locale);
  }
  function createCoreError(code) {
    return createCompileError(code, null, { messages: errorMessages$1 });
  }
  const errorMessages$1 = {
    [
      14
      /* INVALID_ARGUMENT */
    ]: "Invalid arguments",
    [
      15
      /* INVALID_DATE_ARGUMENT */
    ]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [
      16
      /* INVALID_ISO_DATE_ARGUMENT */
    ]: "The argument provided is not a valid ISO date string"
  };
  const NOOP_MESSAGE_FUNCTION = () => "";
  const isMessageFunction = (val) => isFunction(val);
  function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, fallbackLocale, messages: messages2 } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : key : fallbackFormat ? key : "";
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
    const locale = isString(options.locale) ? options.locale : context.locale;
    escapeParameter && escapeParams(options);
    let [format2, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
      key,
      locale,
      messages2[locale] || {}
    ];
    let cacheBaseKey = key;
    if (!resolvedMessage && !(isString(format2) || isMessageFunction(format2))) {
      if (enableDefaultMsg) {
        format2 = defaultMsgOrKey;
        cacheBaseKey = format2;
      }
    }
    if (!resolvedMessage && (!(isString(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
      return unresolving ? NOT_REOSLVED : key;
    }
    if (isString(format2) && context.messageCompiler == null) {
      warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
      return key;
    }
    let occurred = false;
    const errorDetector = () => {
      occurred = true;
    };
    const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
    if (occurred) {
      return format2;
    }
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    const ret = postTranslation ? postTranslation(messaged) : messaged;
    {
      const payloads = {
        timestamp: Date.now(),
        key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
        locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
        format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
        message: ret
      };
      payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
      translateDevTools(payloads);
    }
    return ret;
  }
  function escapeParams(options) {
    if (isArray(options.list)) {
      options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
    } else if (isObject$1(options.named)) {
      Object.keys(options.named).forEach((key) => {
        if (isString(options.named[key])) {
          options.named[key] = escapeHtml(options.named[key]);
        }
      });
    }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages: messages2, onWarn } = context;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    let message = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "translate";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(1, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      message = messages2[targetLocale] || {};
      let start = null;
      let startTag;
      let endTag;
      if (inBrowser) {
        start = window.performance.now();
        startTag = "intlify-message-resolve-start";
        endTag = "intlify-message-resolve-end";
        mark && mark(startTag);
      }
      if ((format2 = resolveValue(message, key)) === null) {
        format2 = message[key];
      }
      if (inBrowser) {
        const end = window.performance.now();
        const emitter = context.__v_emitter;
        if (emitter && start && format2) {
          emitter.emit("message-resolve", {
            type: "message-resolve",
            key,
            message: format2,
            time: end - start,
            groupId: `${type}:${key}`
          });
        }
        if (startTag && endTag && mark && measure) {
          mark(endTag);
          measure("intlify message resolve", startTag, endTag);
        }
      }
      if (isString(format2) || isFunction(format2))
        break;
      const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
      if (missingRet !== key) {
        format2 = missingRet;
      }
      from = to;
    }
    return [format2, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
    const { messageCompiler, warnHtmlMessage } = context;
    if (isMessageFunction(format2)) {
      const msg2 = format2;
      msg2.locale = msg2.locale || targetLocale;
      msg2.key = msg2.key || key;
      return msg2;
    }
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-compilation-start";
      endTag = "intlify-message-compilation-end";
      mark && mark(startTag);
    }
    const msg = messageCompiler(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-compilation", {
          type: "message-compilation",
          message: format2,
          time: end - start,
          groupId: `${"translate"}:${key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message compilation", startTag, endTag);
      }
    }
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format2;
    return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-evaluation-start";
      endTag = "intlify-message-evaluation-end";
      mark && mark(startTag);
    }
    const messaged = msg(msgCtx);
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-evaluation", {
          type: "message-evaluation",
          value: messaged,
          time: end - start,
          groupId: `${"translate"}:${msg.key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message evaluation", startTag, endTag);
      }
    }
    return messaged;
  }
  function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
    if (isNumber(arg2)) {
      options.plural = arg2;
    } else if (isString(arg2)) {
      options.default = arg2;
    } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
      options.named = arg2;
    } else if (isArray(arg2)) {
      options.list = arg2;
    }
    if (isNumber(arg3)) {
      options.plural = arg3;
    } else if (isString(arg3)) {
      options.default = arg3;
    } else if (isPlainObject(arg3)) {
      assign(options, arg3);
    }
    return [key, options];
  }
  function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
      warnHtmlMessage,
      onError: (err) => {
        errorDetector && errorDetector(err);
        {
          const message = `Message compilation error: ${err.message}`;
          const codeFrame = err.location && generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
          const emitter = context.__v_emitter;
          if (emitter) {
            emitter.emit("compile-error", {
              message: source,
              error: err.message,
              start: err.location && err.location.start.offset,
              end: err.location && err.location.end.offset,
              groupId: `${"translate"}:${key}`
            });
          }
          console.error(codeFrame ? `${message}
${codeFrame}` : message);
        }
      },
      onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
    };
  }
  function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules } = context;
    const resolveMessage = (key) => {
      const val = resolveValue(message, key);
      if (isString(val)) {
        let occurred = false;
        const errorDetector = () => {
          occurred = true;
        };
        const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
        return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
      } else if (isMessageFunction(val)) {
        return val;
      } else {
        return NOOP_MESSAGE_FUNCTION;
      }
    };
    const ctxOptions = {
      locale,
      modifiers,
      pluralRules,
      messages: resolveMessage
    };
    if (context.processor) {
      ctxOptions.processor = context.processor;
    }
    if (options.list) {
      ctxOptions.list = options.list;
    }
    if (options.named) {
      ctxOptions.named = options.named;
    }
    if (isNumber(options.plural)) {
      ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
  }
  const intlDefined = typeof Intl !== "undefined";
  const Availabilities = {
    dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
    numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
  };
  function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __datetimeFormatters } = context;
    if (!Availabilities.dateTimeFormat) {
      onWarn(getWarnMessage$1(
        4
        /* CANNOT_FORMAT_DATE */
      ));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.DateTimeFormat(locale).format(value);
    }
    let datetimeFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "datetime format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(5, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      datetimeFormat = datetimeFormats[targetLocale] || {};
      format2 = datetimeFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
      __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    let value;
    if (isString(arg1)) {
      if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(arg1)) {
        throw createCoreError(
          16
          /* INVALID_ISO_DATE_ARGUMENT */
        );
      }
      value = new Date(arg1);
      try {
        value.toISOString();
      } catch (e) {
        throw createCoreError(
          16
          /* INVALID_ISO_DATE_ARGUMENT */
        );
      }
    } else if (isDate(arg1)) {
      if (isNaN(arg1.getTime())) {
        throw createCoreError(
          15
          /* INVALID_DATE_ARGUMENT */
        );
      }
      value = arg1;
    } else if (isNumber(arg1)) {
      value = arg1;
    } else {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearDateTimeFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__datetimeFormatters.has(id)) {
        continue;
      }
      context.__datetimeFormatters.delete(id);
    }
  }
  function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __numberFormatters } = context;
    if (!Availabilities.numberFormat) {
      onWarn(getWarnMessage$1(
        2
        /* CANNOT_FORMAT_NUMBER */
      ));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.NumberFormat(locale).format(value);
    }
    let numberFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "number format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(3, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      numberFormat = numberFormats[targetLocale] || {};
      format2 = numberFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
      __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    if (!isNumber(arg1)) {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    const value = arg1;
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearNumberFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__numberFormatters.has(id)) {
        continue;
      }
      context.__numberFormatters.delete(id);
    }
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * @intlify/vue-devtools v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VueDevToolsLabels = {
    [
      "vue-devtools-plugin-vue-i18n"
      /* PLUGIN */
    ]: "Vue I18n devtools",
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "I18n Resources",
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: "Vue I18n"
  };
  const VueDevToolsPlaceholders = {
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "Search for scopes ..."
  };
  const VueDevToolsTimelineColors = {
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: 16764185
  };
  /*!
    * vue-i18n v9.1.9
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VERSION = "9.1.9";
  function initFeatureFlags() {
    let needWarn = false;
    {
      needWarn = true;
    }
    if (needWarn) {
      console.warn(`You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.`);
    }
  }
  const warnMessages = {
    [
      6
      /* FALLBACK_TO_ROOT */
    ]: `Fall back to {type} '{key}' with root locale.`,
    [
      7
      /* NOT_SUPPORTED_PRESERVE */
    ]: `Not supported 'preserve'.`,
    [
      8
      /* NOT_SUPPORTED_FORMATTER */
    ]: `Not supported 'formatter'.`,
    [
      9
      /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
    ]: `Not supported 'preserveDirectiveContent'.`,
    [
      10
      /* NOT_SUPPORTED_GET_CHOICE_INDEX */
    ]: `Not supported 'getChoiceIndex'.`,
    [
      11
      /* COMPONENT_NAME_LEGACY_COMPATIBLE */
    ]: `Component name legacy compatible: '{name}' -> 'i18n'`,
    [
      12
      /* NOT_FOUND_PARENT_SCOPE */
    ]: `Not found parent scope. use the global scope.`
  };
  function getWarnMessage(code, ...args) {
    return format(warnMessages[code], ...args);
  }
  function createI18nError(code, ...args) {
    return createCompileError(code, null, { messages: errorMessages, args });
  }
  const errorMessages = {
    [
      14
      /* UNEXPECTED_RETURN_TYPE */
    ]: "Unexpected return type in composer",
    [
      15
      /* INVALID_ARGUMENT */
    ]: "Invalid argument",
    [
      16
      /* MUST_BE_CALL_SETUP_TOP */
    ]: "Must be called at the top of a `setup` function",
    [
      17
      /* NOT_INSLALLED */
    ]: "Need to install with `app.use` function",
    [
      22
      /* UNEXPECTED_ERROR */
    ]: "Unexpected error",
    [
      18
      /* NOT_AVAILABLE_IN_LEGACY_MODE */
    ]: "Not available in legacy mode",
    [
      19
      /* REQUIRED_VALUE */
    ]: `Required in value: {0}`,
    [
      20
      /* INVALID_VALUE */
    ]: `Invalid value`,
    [
      21
      /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
    ]: `Cannot setup vue-devtools plugin`
  };
  const DEVTOOLS_META = "__INTLIFY_META__";
  const TransrateVNodeSymbol = makeSymbol("__transrateVNode");
  const DatetimePartsSymbol = makeSymbol("__datetimeParts");
  const NumberPartsSymbol = makeSymbol("__numberParts");
  const EnableEmitter = makeSymbol("__enableEmitter");
  const DisableEmitter = makeSymbol("__disableEmitter");
  const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
  makeSymbol("__intlifyMeta");
  const InejctWithOption = makeSymbol("__injectWithOption");
  let composerID = 0;
  function defineCoreMissingHandler(missing) {
    return (ctx, locale, key, type) => {
      return missing(locale, key, vue.getCurrentInstance() || void 0, type);
    };
  }
  function getLocaleMessages(locale, options) {
    const { messages: messages2, __i18n } = options;
    const ret = isPlainObject(messages2) ? messages2 : isArray(__i18n) ? {} : { [locale]: {} };
    if (isArray(__i18n)) {
      __i18n.forEach(({ locale: locale2, resource }) => {
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      });
    }
    if (options.flatJson) {
      for (const key in ret) {
        if (hasOwn$1(ret, key)) {
          handleFlatJson(ret[key]);
        }
      }
    }
    return ret;
  }
  const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray(val);
  function deepCopy(src, des) {
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
      throw createI18nError(
        20
        /* INVALID_VALUE */
      );
    }
    for (const key in src) {
      if (hasOwn$1(src, key)) {
        if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
          des[key] = src[key];
        } else {
          deepCopy(src[key], des[key]);
        }
      }
    }
  }
  const getMetaInfo = () => {
    const instance = vue.getCurrentInstance();
    return instance && instance.type[DEVTOOLS_META] ? { [DEVTOOLS_META]: instance.type[DEVTOOLS_META] } : null;
  };
  function createComposer(options = {}) {
    const { __root } = options;
    const _isGlobal = __root === void 0;
    let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
    const _locale = vue.ref(
      // prettier-ignore
      __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : "en-US"
    );
    const _fallbackLocale = vue.ref(
      // prettier-ignore
      __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
    );
    const _messages = vue.ref(getLocaleMessages(_locale.value, options));
    const _datetimeFormats = vue.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
    const _numberFormats = vue.ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
    let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    let _fallbackFormat = !!options.fallbackFormat;
    let _missing = isFunction(options.missing) ? options.missing : null;
    let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
    let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    let _warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    let _escapeParameter = !!options.escapeParameter;
    const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
    let _pluralRules = options.pluralRules || __root && __root.pluralRules;
    let _context;
    function getCoreContext() {
      return createCoreContext({
        version: VERSION,
        locale: _locale.value,
        fallbackLocale: _fallbackLocale.value,
        messages: _messages.value,
        messageCompiler: function compileToFunction(source) {
          return (ctx) => {
            return ctx.normalize([source]);
          };
        },
        datetimeFormats: _datetimeFormats.value,
        numberFormats: _numberFormats.value,
        modifiers: _modifiers,
        pluralRules: _pluralRules,
        missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
        missingWarn: _missingWarn,
        fallbackWarn: _fallbackWarn,
        fallbackFormat: _fallbackFormat,
        unresolving: true,
        postTranslation: _postTranslation === null ? void 0 : _postTranslation,
        warnHtmlMessage: _warnHtmlMessage,
        escapeParameter: _escapeParameter,
        __datetimeFormatters: isPlainObject(_context) ? _context.__datetimeFormatters : void 0,
        __numberFormatters: isPlainObject(_context) ? _context.__numberFormatters : void 0,
        __v_emitter: isPlainObject(_context) ? _context.__v_emitter : void 0,
        __meta: { framework: "vue" }
      });
    }
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    function trackReactivityValues() {
      return [
        _locale.value,
        _fallbackLocale.value,
        _messages.value,
        _datetimeFormats.value,
        _numberFormats.value
      ];
    }
    const locale = vue.computed({
      get: () => _locale.value,
      set: (val) => {
        _locale.value = val;
        _context.locale = _locale.value;
      }
    });
    const fallbackLocale = vue.computed({
      get: () => _fallbackLocale.value,
      set: (val) => {
        _fallbackLocale.value = val;
        _context.fallbackLocale = _fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, val);
      }
    });
    const messages2 = vue.computed(() => _messages.value);
    const datetimeFormats = vue.computed(() => _datetimeFormats.value);
    const numberFormats = vue.computed(() => _numberFormats.value);
    function getPostTranslationHandler() {
      return isFunction(_postTranslation) ? _postTranslation : null;
    }
    function setPostTranslationHandler(handler) {
      _postTranslation = handler;
      _context.postTranslation = handler;
    }
    function getMissingHandler() {
      return _missing;
    }
    function setMissingHandler(handler) {
      if (handler !== null) {
        _runtimeMissing = defineCoreMissingHandler(handler);
      }
      _missing = handler;
      _context.missing = _runtimeMissing;
    }
    function isResolvedTranslateMessage(type, arg) {
      return type !== "translate" || !!arg.resolvedMessage === false;
    }
    function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
      trackReactivityValues();
      let ret;
      {
        try {
          setAdditionalMeta(getMetaInfo());
          ret = fn(_context);
        } finally {
          setAdditionalMeta(null);
        }
      }
      if (isNumber(ret) && ret === NOT_REOSLVED) {
        const [key, arg2] = argumentParser();
        if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
          if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
            warn(getWarnMessage(6, {
              key,
              type: warnType
            }));
          }
          {
            const { __v_emitter: emitter } = _context;
            if (emitter && _fallbackRoot) {
              emitter.emit("fallback", {
                type: warnType,
                key,
                to: "global",
                groupId: `${warnType}:${key}`
              });
            }
          }
        }
        return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
      } else if (successCondition(ret)) {
        return ret;
      } else {
        throw createI18nError(
          14
          /* UNEXPECTED_RETURN_TYPE */
        );
      }
    }
    function t(...args) {
      return wrapWithDeps((context) => translate(context, ...args), () => parseTranslateArgs(...args), "translate", (root) => root.t(...args), (key) => key, (val) => isString(val));
    }
    function rt(...args) {
      const [arg1, arg2, arg3] = args;
      if (arg3 && !isObject$1(arg3)) {
        throw createI18nError(
          15
          /* INVALID_ARGUMENT */
        );
      }
      return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
    }
    function d(...args) {
      return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root.d(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function n(...args) {
      return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root.n(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function normalize(values) {
      return values.map((val) => isString(val) ? vue.createVNode(vue.Text, null, val, 0) : val);
    }
    const interpolate = (val) => val;
    const processor = {
      normalize,
      interpolate,
      type: "vnode"
    };
    function transrateVNode(...args) {
      return wrapWithDeps(
        (context) => {
          let ret;
          const _context2 = context;
          try {
            _context2.processor = processor;
            ret = translate(_context2, ...args);
          } finally {
            _context2.processor = null;
          }
          return ret;
        },
        () => parseTranslateArgs(...args),
        "translate",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[TransrateVNodeSymbol](...args),
        (key) => [vue.createVNode(vue.Text, null, key, 0)],
        (val) => isArray(val)
      );
    }
    function numberParts(...args) {
      return wrapWithDeps(
        (context) => number(context, ...args),
        () => parseNumberArgs(...args),
        "number format",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[NumberPartsSymbol](...args),
        () => [],
        (val) => isString(val) || isArray(val)
      );
    }
    function datetimeParts(...args) {
      return wrapWithDeps(
        (context) => datetime(context, ...args),
        () => parseDateTimeArgs(...args),
        "datetime format",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[DatetimePartsSymbol](...args),
        () => [],
        (val) => isString(val) || isArray(val)
      );
    }
    function setPluralRules(rules) {
      _pluralRules = rules;
      _context.pluralRules = _pluralRules;
    }
    function te(key, locale2) {
      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      return resolveValue(message, key) !== null;
    }
    function resolveMessages(key) {
      let messages3 = null;
      const locales = getLocaleChain(_context, _fallbackLocale.value, _locale.value);
      for (let i = 0; i < locales.length; i++) {
        const targetLocaleMessages = _messages.value[locales[i]] || {};
        const messageValue = resolveValue(targetLocaleMessages, key);
        if (messageValue != null) {
          messages3 = messageValue;
          break;
        }
      }
      return messages3;
    }
    function tm(key) {
      const messages3 = resolveMessages(key);
      return messages3 != null ? messages3 : __root ? __root.tm(key) || {} : {};
    }
    function getLocaleMessage(locale2) {
      return _messages.value[locale2] || {};
    }
    function setLocaleMessage(locale2, message) {
      _messages.value[locale2] = message;
      _context.messages = _messages.value;
    }
    function mergeLocaleMessage(locale2, message) {
      _messages.value[locale2] = _messages.value[locale2] || {};
      deepCopy(message, _messages.value[locale2]);
      _context.messages = _messages.value;
    }
    function getDateTimeFormat(locale2) {
      return _datetimeFormats.value[locale2] || {};
    }
    function setDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = format2;
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function mergeDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function getNumberFormat(locale2) {
      return _numberFormats.value[locale2] || {};
    }
    function setNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = format2;
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    function mergeNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    composerID++;
    if (__root) {
      vue.watch(__root.locale, (val) => {
        if (_inheritLocale) {
          _locale.value = val;
          _context.locale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
      vue.watch(__root.fallbackLocale, (val) => {
        if (_inheritLocale) {
          _fallbackLocale.value = val;
          _context.fallbackLocale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
    }
    const composer = {
      id: composerID,
      locale,
      fallbackLocale,
      get inheritLocale() {
        return _inheritLocale;
      },
      set inheritLocale(val) {
        _inheritLocale = val;
        if (val && __root) {
          _locale.value = __root.locale.value;
          _fallbackLocale.value = __root.fallbackLocale.value;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      },
      get availableLocales() {
        return Object.keys(_messages.value).sort();
      },
      messages: messages2,
      datetimeFormats,
      numberFormats,
      get modifiers() {
        return _modifiers;
      },
      get pluralRules() {
        return _pluralRules || {};
      },
      get isGlobal() {
        return _isGlobal;
      },
      get missingWarn() {
        return _missingWarn;
      },
      set missingWarn(val) {
        _missingWarn = val;
        _context.missingWarn = _missingWarn;
      },
      get fallbackWarn() {
        return _fallbackWarn;
      },
      set fallbackWarn(val) {
        _fallbackWarn = val;
        _context.fallbackWarn = _fallbackWarn;
      },
      get fallbackRoot() {
        return _fallbackRoot;
      },
      set fallbackRoot(val) {
        _fallbackRoot = val;
      },
      get fallbackFormat() {
        return _fallbackFormat;
      },
      set fallbackFormat(val) {
        _fallbackFormat = val;
        _context.fallbackFormat = _fallbackFormat;
      },
      get warnHtmlMessage() {
        return _warnHtmlMessage;
      },
      set warnHtmlMessage(val) {
        _warnHtmlMessage = val;
        _context.warnHtmlMessage = val;
      },
      get escapeParameter() {
        return _escapeParameter;
      },
      set escapeParameter(val) {
        _escapeParameter = val;
        _context.escapeParameter = val;
      },
      t,
      rt,
      d,
      n,
      te,
      tm,
      getLocaleMessage,
      setLocaleMessage,
      mergeLocaleMessage,
      getDateTimeFormat,
      setDateTimeFormat,
      mergeDateTimeFormat,
      getNumberFormat,
      setNumberFormat,
      mergeNumberFormat,
      getPostTranslationHandler,
      setPostTranslationHandler,
      getMissingHandler,
      setMissingHandler,
      [TransrateVNodeSymbol]: transrateVNode,
      [NumberPartsSymbol]: numberParts,
      [DatetimePartsSymbol]: datetimeParts,
      [SetPluralRulesSymbol]: setPluralRules,
      [InejctWithOption]: options.__injectWithOption
      // eslint-disable-line @typescript-eslint/no-explicit-any
    };
    {
      composer[EnableEmitter] = (emitter) => {
        _context.__v_emitter = emitter;
      };
      composer[DisableEmitter] = () => {
        _context.__v_emitter = void 0;
      };
    }
    return composer;
  }
  function convertComposerOptions(options) {
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const missing = isFunction(options.missing) ? options.missing : void 0;
    const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
    const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
    const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    const fallbackFormat = !!options.formatFallbackMessages;
    const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
    const pluralizationRules = options.pluralizationRules;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
    const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
    const escapeParameter = !!options.escapeParameterHtml;
    const inheritLocale = isBoolean(options.sync) ? options.sync : true;
    if (options.formatter) {
      warn(getWarnMessage(
        8
        /* NOT_SUPPORTED_FORMATTER */
      ));
    }
    if (options.preserveDirectiveContent) {
      warn(getWarnMessage(
        9
        /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
      ));
    }
    let messages2 = options.messages;
    if (isPlainObject(options.sharedMessages)) {
      const sharedMessages = options.sharedMessages;
      const locales = Object.keys(sharedMessages);
      messages2 = locales.reduce((messages3, locale2) => {
        const message = messages3[locale2] || (messages3[locale2] = {});
        assign(message, sharedMessages[locale2]);
        return messages3;
      }, messages2 || {});
    }
    const { __i18n, __root, __injectWithOption } = options;
    const datetimeFormats = options.datetimeFormats;
    const numberFormats = options.numberFormats;
    const flatJson = options.flatJson;
    return {
      locale,
      fallbackLocale,
      messages: messages2,
      flatJson,
      datetimeFormats,
      numberFormats,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackRoot,
      fallbackFormat,
      modifiers,
      pluralRules: pluralizationRules,
      postTranslation,
      warnHtmlMessage,
      escapeParameter,
      inheritLocale,
      __i18n,
      __root,
      __injectWithOption
    };
  }
  function createVueI18n(options = {}) {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      // id
      id: composer.id,
      // locale
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      // fallbackLocale
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      // messages
      get messages() {
        return composer.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return composer.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return composer.availableLocales;
      },
      // formatter
      get formatter() {
        warn(getWarnMessage(
          8
          /* NOT_SUPPORTED_FORMATTER */
        ));
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
        warn(getWarnMessage(
          8
          /* NOT_SUPPORTED_FORMATTER */
        ));
      },
      // missing
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      // modifiers
      get modifiers() {
        return composer.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      // postTranslation
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      // sync
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        warn(getWarnMessage(
          9
          /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
        ));
        return true;
      },
      set preserveDirectiveContent(val) {
        warn(getWarnMessage(
          9
          /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
        ));
      },
      // pluralizationRules
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      // for internal
      __composer: composer,
      // t
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(
            15
            /* INVALID_ARGUMENT */
          );
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      rt(...args) {
        return composer.rt(...args);
      },
      // tc
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(
            15
            /* INVALID_ARGUMENT */
          );
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options2.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      // te
      te(key, locale) {
        return composer.te(key, locale);
      },
      // tm
      tm(key) {
        return composer.tm(key);
      },
      // getLocaleMessage
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      // setLocaleMessage
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      // d
      d(...args) {
        return composer.d(...args);
      },
      // getDateTimeFormat
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      // setDateTimeFormat
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      // n
      n(...args) {
        return composer.n(...args);
      },
      // getNumberFormat
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      // setNumberFormat
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      // mergeNumberFormat
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(choice, choicesLength) {
        warn(getWarnMessage(
          10
          /* NOT_SUPPORTED_GET_CHOICE_INDEX */
        ));
        return -1;
      },
      // for internal
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    {
      vueI18n.__enableEmitter = (emitter) => {
        const __composer = composer;
        __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
      };
      vueI18n.__disableEmitter = () => {
        const __composer = composer;
        __composer[DisableEmitter] && __composer[DisableEmitter]();
      };
    }
    return vueI18n;
  }
  const baseFormatProps = {
    tag: {
      type: [String, Object]
    },
    locale: {
      type: String
    },
    scope: {
      type: String,
      validator: (val) => val === "parent" || val === "global",
      default: "parent"
    },
    i18n: {
      type: Object
    }
  };
  const Translation = {
    /* eslint-disable */
    name: "i18n-t",
    props: assign({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [Number, String],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validator: (val) => isNumber(val) || !isNaN(val)
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props2, context) {
      const { slots, attrs } = context;
      const i18n2 = props2.i18n || useI18n({
        useScope: props2.scope,
        __useComponent: true
      });
      const keys = Object.keys(slots).filter((key) => key !== "_");
      return () => {
        const options = {};
        if (props2.locale) {
          options.locale = props2.locale;
        }
        if (props2.plural !== void 0) {
          options.plural = isString(props2.plural) ? +props2.plural : props2.plural;
        }
        const arg = getInterpolateArg(context, keys);
        const children = i18n2[TransrateVNodeSymbol](props2.keypath, arg, options);
        const assignedAttrs = assign({}, attrs);
        return isString(props2.tag) ? vue.h(props2.tag, assignedAttrs, children) : isObject$1(props2.tag) ? vue.h(props2.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
      };
    }
  };
  function getInterpolateArg({ slots }, keys) {
    if (keys.length === 1 && keys[0] === "default") {
      return slots.default ? slots.default() : [];
    } else {
      return keys.reduce((arg, key) => {
        const slot = slots[key];
        if (slot) {
          arg[key] = slot();
        }
        return arg;
      }, {});
    }
  }
  function renderFormatter(props2, context, slotKeys, partFormatter) {
    const { slots, attrs } = context;
    return () => {
      const options = { part: true };
      let overrides = {};
      if (props2.locale) {
        options.locale = props2.locale;
      }
      if (isString(props2.format)) {
        options.key = props2.format;
      } else if (isObject$1(props2.format)) {
        if (isString(props2.format.key)) {
          options.key = props2.format.key;
        }
        overrides = Object.keys(props2.format).reduce((options2, prop) => {
          return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props2.format[prop] }) : options2;
        }, {});
      }
      const parts = partFormatter(...[props2.value, options, overrides]);
      let children = [options.key];
      if (isArray(parts)) {
        children = parts.map((part, index) => {
          const slot = slots[part.type];
          return slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        });
      } else if (isString(parts)) {
        children = [parts];
      }
      const assignedAttrs = assign({}, attrs);
      return isString(props2.tag) ? vue.h(props2.tag, assignedAttrs, children) : isObject$1(props2.tag) ? vue.h(props2.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
    };
  }
  const NUMBER_FORMAT_KEYS = [
    "localeMatcher",
    "style",
    "unit",
    "unitDisplay",
    "currency",
    "currencyDisplay",
    "useGrouping",
    "numberingSystem",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "notation",
    "formatMatcher"
  ];
  const NumberFormat = {
    /* eslint-disable */
    name: "i18n-n",
    props: assign({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props2, context) {
      const i18n2 = props2.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props2, context, NUMBER_FORMAT_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[NumberPartsSymbol](...args)
      ));
    }
  };
  const DATETIME_FORMAT_KEYS = [
    "dateStyle",
    "timeStyle",
    "fractionalSecondDigits",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "localeMatcher",
    "timeZone",
    "hour12",
    "hourCycle",
    "formatMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName"
  ];
  const DatetimeFormat = {
    /* eslint-disable */
    name: "i18n-d",
    props: assign({
      value: {
        type: [Number, Date],
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props2, context) {
      const i18n2 = props2.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props2, context, DATETIME_FORMAT_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[DatetimePartsSymbol](...args)
      ));
    }
  };
  function getComposer$2(i18n2, instance) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      return i18nInternal.__getInstance(instance) || i18n2.global;
    } else {
      const vueI18n = i18nInternal.__getInstance(instance);
      return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
    }
  }
  function vTDirective(i18n2) {
    const bind = (el, { instance, value, modifiers }) => {
      if (!instance || !instance.$) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      const composer = getComposer$2(i18n2, instance.$);
      if (modifiers.preserve) {
        warn(getWarnMessage(
          7
          /* NOT_SUPPORTED_PRESERVE */
        ));
      }
      const parsedValue = parseValue(value);
      el.textContent = composer.t(...makeParams(parsedValue));
    };
    return {
      beforeMount: bind,
      beforeUpdate: bind
    };
  }
  function parseValue(value) {
    if (isString(value)) {
      return { path: value };
    } else if (isPlainObject(value)) {
      if (!("path" in value)) {
        throw createI18nError(19, "path");
      }
      return value;
    } else {
      throw createI18nError(
        20
        /* INVALID_VALUE */
      );
    }
  }
  function makeParams(value) {
    const { path, locale, args, choice, plural } = value;
    const options = {};
    const named = args || {};
    if (isString(locale)) {
      options.locale = locale;
    }
    if (isNumber(choice)) {
      options.plural = choice;
    }
    if (isNumber(plural)) {
      options.plural = plural;
    }
    return [path, named, options];
  }
  function apply(app, i18n2, ...options) {
    const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
    const useI18nComponentName = !!pluginOptions.useI18nComponentName;
    const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
    if (globalInstall && useI18nComponentName) {
      warn(getWarnMessage(11, {
        name: Translation.name
      }));
    }
    if (globalInstall) {
      app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
      app.component(NumberFormat.name, NumberFormat);
      app.component(DatetimeFormat.name, DatetimeFormat);
    }
    app.directive("t", vTDirective(i18n2));
  }
  const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
  let devtoolsApi;
  async function enableDevTools(app, i18n2) {
    return new Promise((resolve, reject) => {
      try {
        setupDevtoolsPlugin({
          id: "vue-devtools-plugin-vue-i18n",
          label: VueDevToolsLabels[
            "vue-devtools-plugin-vue-i18n"
            /* PLUGIN */
          ],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
          app
        }, (api) => {
          devtoolsApi = api;
          api.on.visitComponentTree(({ componentInstance, treeNode }) => {
            updateComponentTreeTags(componentInstance, treeNode, i18n2);
          });
          api.on.inspectComponent(({ componentInstance, instanceData }) => {
            if (componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
              if (i18n2.mode === "legacy") {
                if (componentInstance.vnode.el.__VUE_I18N__ !== i18n2.global.__composer) {
                  inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                }
              } else {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            }
          });
          api.addInspector({
            id: "vue-i18n-resource-inspector",
            label: VueDevToolsLabels[
              "vue-i18n-resource-inspector"
              /* CUSTOM_INSPECTOR */
            ],
            icon: "language",
            treeFilterPlaceholder: VueDevToolsPlaceholders[
              "vue-i18n-resource-inspector"
              /* CUSTOM_INSPECTOR */
            ]
          });
          api.on.getInspectorTree((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              registerScope(payload, i18n2);
            }
          });
          api.on.getInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              inspectScope(payload, i18n2);
            }
          });
          api.on.editInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              editScope(payload, i18n2);
            }
          });
          api.addTimelineLayer({
            id: "vue-i18n-timeline",
            label: VueDevToolsLabels[
              "vue-i18n-timeline"
              /* TIMELINE */
            ],
            color: VueDevToolsTimelineColors[
              "vue-i18n-timeline"
              /* TIMELINE */
            ]
          });
          resolve(true);
        });
      } catch (e) {
        console.error(e);
        reject(false);
      }
    });
  }
  function updateComponentTreeTags(instance, treeNode, i18n2) {
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    if (instance && instance.vnode.el.__VUE_I18N__) {
      if (instance.vnode.el.__VUE_I18N__ !== global2) {
        const label = instance.type.name || instance.type.displayName || instance.type.__file;
        const tag = {
          label: `i18n (${label} Scope)`,
          textColor: 0,
          backgroundColor: 16764185
        };
        treeNode.tags.push(tag);
      }
    }
  }
  function inspectComposer(instanceData, composer) {
    const type = VUE_I18N_COMPONENT_TYPES;
    instanceData.state.push({
      type,
      key: "locale",
      editable: true,
      value: composer.locale.value
    });
    instanceData.state.push({
      type,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    });
    instanceData.state.push({
      type,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    });
    instanceData.state.push({
      type,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    });
    instanceData.state.push({
      type,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    });
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
  function getLocaleMessageValue(messages2) {
    const value = {};
    Object.keys(messages2).forEach((key) => {
      const v = messages2[key];
      if (isFunction(v) && "source" in v) {
        value[key] = getMessageFunctionDetails(v);
      } else if (isObject$1(v)) {
        value[key] = getLocaleMessageValue(v);
      } else {
        value[key] = v;
      }
    });
    return value;
  }
  const ESC = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;"
  };
  function escape(s) {
    return s.replace(/[<>"&]/g, escapeChar);
  }
  function escapeChar(a) {
    return ESC[a] || a;
  }
  function getMessageFunctionDetails(func) {
    const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
    return {
      _custom: {
        type: "function",
        display: `<span>ƒ</span> ${argString}`
      }
    };
  }
  function registerScope(payload, i18n2) {
    payload.rootNodes.push({
      id: "global",
      label: "Global Scope"
    });
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    for (const [keyInstance, instance] of i18n2.__instances) {
      const composer = i18n2.mode === "composition" ? instance : instance.__composer;
      if (global2 === composer) {
        continue;
      }
      const label = keyInstance.type.name || keyInstance.type.displayName || keyInstance.type.__file;
      payload.rootNodes.push({
        id: composer.id.toString(),
        label: `${label} Scope`
      });
    }
  }
  function getComposer$1(nodeId, i18n2) {
    if (nodeId === "global") {
      return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    } else {
      const instance = Array.from(i18n2.__instances.values()).find((item) => item.id.toString() === nodeId);
      if (instance) {
        return i18n2.mode === "composition" ? instance : instance.__composer;
      } else {
        return null;
      }
    }
  }
  function inspectScope(payload, i18n2) {
    const composer = getComposer$1(payload.nodeId, i18n2);
    if (composer) {
      payload.state = makeScopeInspectState(composer);
    }
  }
  function makeScopeInspectState(composer) {
    const state = {};
    const localeType = "Locale related info";
    const localeStates = [
      {
        type: localeType,
        key: "locale",
        editable: true,
        value: composer.locale.value
      },
      {
        type: localeType,
        key: "fallbackLocale",
        editable: true,
        value: composer.fallbackLocale.value
      },
      {
        type: localeType,
        key: "availableLocales",
        editable: false,
        value: composer.availableLocales
      },
      {
        type: localeType,
        key: "inheritLocale",
        editable: true,
        value: composer.inheritLocale
      }
    ];
    state[localeType] = localeStates;
    const localeMessagesType = "Locale messages info";
    const localeMessagesStates = [
      {
        type: localeMessagesType,
        key: "messages",
        editable: false,
        value: getLocaleMessageValue(composer.messages.value)
      }
    ];
    state[localeMessagesType] = localeMessagesStates;
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
    return state;
  }
  function addTimelineEvent(event, payload) {
    if (devtoolsApi) {
      let groupId;
      if (payload && "groupId" in payload) {
        groupId = payload.groupId;
        delete payload.groupId;
      }
      devtoolsApi.addTimelineEvent({
        layerId: "vue-i18n-timeline",
        event: {
          title: event,
          groupId,
          time: Date.now(),
          meta: {},
          data: payload || {},
          logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
        }
      });
    }
  }
  function editScope(payload, i18n2) {
    const composer = getComposer$1(payload.nodeId, i18n2);
    if (composer) {
      const [field] = payload.path;
      if (field === "locale" && isString(payload.state.value)) {
        composer.locale.value = payload.state.value;
      } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject$1(payload.state.value))) {
        composer.fallbackLocale.value = payload.state.value;
      } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
        composer.inheritLocale = payload.state.value;
      }
    }
  }
  function defineMixin(vuei18n, composer, i18n2) {
    return {
      beforeCreate() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(
            22
            /* UNEXPECTED_ERROR */
          );
        }
        const options = this.$options;
        if (options.i18n) {
          const optionsI18n = options.i18n;
          if (options.__i18n) {
            optionsI18n.__i18n = options.__i18n;
          }
          optionsI18n.__root = composer;
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, optionsI18n);
          } else {
            optionsI18n.__injectWithOption = true;
            this.$i18n = createVueI18n(optionsI18n);
          }
        } else if (options.__i18n) {
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, options);
          } else {
            this.$i18n = createVueI18n({
              __i18n: options.__i18n,
              __injectWithOption: true,
              __root: composer
            });
          }
        } else {
          this.$i18n = vuei18n;
        }
        vuei18n.__onComponentInstanceCreated(this.$i18n);
        i18n2.__setInstance(instance, this.$i18n);
        this.$t = (...args) => this.$i18n.t(...args);
        this.$rt = (...args) => this.$i18n.rt(...args);
        this.$tc = (...args) => this.$i18n.tc(...args);
        this.$te = (key, locale) => this.$i18n.te(key, locale);
        this.$d = (...args) => this.$i18n.d(...args);
        this.$n = (...args) => this.$i18n.n(...args);
        this.$tm = (key) => this.$i18n.tm(key);
      },
      mounted() {
        {
          this.$el.__VUE_I18N__ = this.$i18n.__composer;
          const emitter = this.__v_emitter = createEmitter();
          const _vueI18n = this.$i18n;
          _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          emitter.on("*", addTimelineEvent);
        }
      },
      beforeUnmount() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(
            22
            /* UNEXPECTED_ERROR */
          );
        }
        {
          if (this.__v_emitter) {
            this.__v_emitter.off("*", addTimelineEvent);
            delete this.__v_emitter;
          }
          const _vueI18n = this.$i18n;
          _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
          delete this.$el.__VUE_I18N__;
        }
        delete this.$t;
        delete this.$rt;
        delete this.$tc;
        delete this.$te;
        delete this.$d;
        delete this.$n;
        delete this.$tm;
        i18n2.__deleteInstance(instance);
        delete this.$i18n;
      }
    };
  }
  function mergeToRoot(root, options) {
    root.locale = options.locale || root.locale;
    root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
    root.missing = options.missing || root.missing;
    root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
    root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
    root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
    root.postTranslation = options.postTranslation || root.postTranslation;
    root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
    root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
    root.sync = options.sync || root.sync;
    root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
    const messages2 = getLocaleMessages(root.locale, {
      messages: options.messages,
      __i18n: options.__i18n
    });
    Object.keys(messages2).forEach((locale) => root.mergeLocaleMessage(locale, messages2[locale]));
    if (options.datetimeFormats) {
      Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
    }
    if (options.numberFormats) {
      Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
    }
    return root;
  }
  function createI18n(options = {}) {
    const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
    const __globalInjection = !!options.globalInjection;
    const __instances = /* @__PURE__ */ new Map();
    const __global = __legacyMode ? createVueI18n(options) : createComposer(options);
    const symbol = makeSymbol("vue-i18n");
    const i18n2 = {
      // mode
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      // install plugin
      async install(app, ...options2) {
        {
          app.__VUE_I18N__ = i18n2;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n2.global);
        }
        {
          apply(app, i18n2, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n2));
        }
        {
          const ret = await enableDevTools(app, i18n2);
          if (!ret) {
            throw createI18nError(
              21
              /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
            );
          }
          const emitter = createEmitter();
          if (__legacyMode) {
            const _vueI18n = __global;
            _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          } else {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      // global accessor
      get global() {
        return __global;
      },
      // @internal
      __instances,
      // @internal
      __getInstance(component) {
        return __instances.get(component) || null;
      },
      // @internal
      __setInstance(component, instance) {
        __instances.set(component, instance);
      },
      // @internal
      __deleteInstance(component) {
        __instances.delete(component);
      }
    };
    return i18n2;
  }
  function useI18n(options = {}) {
    const instance = vue.getCurrentInstance();
    if (instance == null) {
      throw createI18nError(
        16
        /* MUST_BE_CALL_SETUP_TOP */
      );
    }
    if (!instance.appContext.app.__VUE_I18N_SYMBOL__) {
      throw createI18nError(
        17
        /* NOT_INSLALLED */
      );
    }
    const i18n2 = vue.inject(instance.appContext.app.__VUE_I18N_SYMBOL__);
    if (!i18n2) {
      throw createI18nError(
        22
        /* UNEXPECTED_ERROR */
      );
    }
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    const scope = isEmptyObject(options) ? "__i18n" in instance.type ? "local" : "global" : !options.useScope ? "local" : options.useScope;
    if (scope === "global") {
      let messages2 = isObject$1(options.messages) ? options.messages : {};
      if ("__i18nGlobal" in instance.type) {
        messages2 = getLocaleMessages(global2.locale.value, {
          messages: messages2,
          __i18n: instance.type.__i18nGlobal
        });
      }
      const locales = Object.keys(messages2);
      if (locales.length) {
        locales.forEach((locale) => {
          global2.mergeLocaleMessage(locale, messages2[locale]);
        });
      }
      if (isObject$1(options.datetimeFormats)) {
        const locales2 = Object.keys(options.datetimeFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
          });
        }
      }
      if (isObject$1(options.numberFormats)) {
        const locales2 = Object.keys(options.numberFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeNumberFormat(locale, options.numberFormats[locale]);
          });
        }
      }
      return global2;
    }
    if (scope === "parent") {
      let composer2 = getComposer(i18n2, instance, options.__useComponent);
      if (composer2 == null) {
        {
          warn(getWarnMessage(
            12
            /* NOT_FOUND_PARENT_SCOPE */
          ));
        }
        composer2 = global2;
      }
      return composer2;
    }
    if (i18n2.mode === "legacy") {
      throw createI18nError(
        18
        /* NOT_AVAILABLE_IN_LEGACY_MODE */
      );
    }
    const i18nInternal = i18n2;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
      const type = instance.type;
      const composerOptions = assign({}, options);
      if (type.__i18n) {
        composerOptions.__i18n = type.__i18n;
      }
      if (global2) {
        composerOptions.__root = global2;
      }
      composer = createComposer(composerOptions);
      setupLifeCycle(i18nInternal, instance, composer);
      i18nInternal.__setInstance(instance, composer);
    }
    return composer;
  }
  function getComposer(i18n2, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = target.parent;
    while (current != null) {
      const i18nInternal = i18n2;
      if (i18n2.mode === "composition") {
        composer = i18nInternal.__getInstance(current);
      } else {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
        }
        if (useComponent && composer && !composer[InejctWithOption]) {
          composer = null;
        }
      }
      if (composer != null) {
        break;
      }
      if (root === current) {
        break;
      }
      current = current.parent;
    }
    return composer;
  }
  function setupLifeCycle(i18n2, target, composer) {
    let emitter = null;
    vue.onMounted(() => {
      if (target.vnode.el) {
        target.vnode.el.__VUE_I18N__ = composer;
        emitter = createEmitter();
        const _composer = composer;
        _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
        emitter.on("*", addTimelineEvent);
      }
    }, target);
    vue.onUnmounted(() => {
      if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
        emitter && emitter.off("*", addTimelineEvent);
        const _composer = composer;
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n2.__deleteInstance(target);
    }, target);
  }
  const globalExportProps = [
    "locale",
    "fallbackLocale",
    "availableLocales"
  ];
  const globalExportMethods = ["t", "rt", "d", "n", "tm"];
  function injectGlobalFields(app, composer) {
    const i18n2 = /* @__PURE__ */ Object.create(null);
    globalExportProps.forEach((prop) => {
      const desc = Object.getOwnPropertyDescriptor(composer, prop);
      if (!desc) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      const wrap = vue.isRef(desc.value) ? {
        get() {
          return desc.value.value;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        set(val) {
          desc.value.value = val;
        }
      } : {
        get() {
          return desc.get && desc.get();
        }
      };
      Object.defineProperty(i18n2, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n2;
    globalExportMethods.forEach((method) => {
      const desc = Object.getOwnPropertyDescriptor(composer, method);
      if (!desc || !desc.value) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
  }
  {
    initFeatureFlags();
  }
  {
    const target = getGlobalThis();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  const _sfc_main = {
    onLaunch: function() {
    },
    onShow: function() {
      getShoppGoodCarNum();
    },
    onHide: function() {
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/luoban/Code/uniapp-DitanYA/DitanYA/App.vue"]]);
  const en = {
    "app.name": "Hello en",
    "index.title": "home"
  };
  const zhHans = {
    "app.name": "哈喽，hans",
    "index.title": "首页"
  };
  const messages = {
    en,
    "zh-Hans": zhHans
  };
  let i18nConfig = {
    locale: uni.getLocale(),
    // 获取已设置的语言
    messages
  };
  const i18n = createI18n(i18nConfig);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(i18n);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
