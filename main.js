// #ifndef VUE3
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

// 国际化 json 文件，文件内容详见下面的示例
import en from "./locale/en.json";
import zhHans from "./locale/zh-Hans.json";
const messages = {
  en,
  "zh-Hans": zhHans,
};

let i18nConfig = {
  locale: uni.getLocale(), // 获取已设置的语言
  messages,
};
const i18n = createI18n(i18nConfig);

export function createApp() {
  const app = createSSRApp(App);
  app.use(i18n);
  return {
    app,
  };
}
// #endif
