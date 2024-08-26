## uni-app h5 一元购

- 添加购物车的时候，提示添加成功的提示。在首页点击添加购物车判断没有登录直接跳转登录页

### scroll-view 占满剩余高度

- [参考文档](https://blog.csdn.net/victor_E_N_01185/article/details/128959036)
- 可以使用:style，用 uni 的 API 来获取可视屏幕高度，得到的单位是 px

### android 模拟器 使用

- 需要打开 android studio 模拟器，设置点击关于手机-> 点击版本号 5 次 。回来打开 HbuilderX 链接 android 基座。夜神用不了。
- 链接夜神模拟器得需要打开开发者模式和 usb 调试。HbuilderX 也要在运行时配置 adb 和端口号。

### uni-app 开发 h5 遇到的问题

- [禁止 h5 body 页面弹性滚动的解决方法](https://blog.csdn.net/Dream_Fever/article/details/125394931)
- 页面生命周期不能给组件使用，只能在页面的组件使用，组件中使用 vue 的组件生命周期。
- 修改单个页面的组件样式用::v-deep
- 购物车添加还可以使用两个变量来控制 input 数据变化，和防抖结合可以再优化 （后面再实现）
- [除了返回自定义事件处理需要自己做头部导航处理，其他页面可以用这个去掉 title](https://www.jianshu.com/p/a8f6e43b5022)
