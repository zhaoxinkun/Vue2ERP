import Vue from "vue";
import App from "./App.vue";
// 导入路由和vuex
import router from "./router";
import store from "./store";

// 引入组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 引入样式文件,vue.config.js
import "@/style/index.scss";

// 禁止vue生产提示
Vue.config.productionTip = false;

// 定义全局组件
// import globalCOM from "@/views/HOME/globalCOM/index.vue";
// Vue.component("globalCOM", globalCOM)

// 定义全局组件 02
import "@/components/oldGlobal/common.js"

// 导入国际化
// import i18n from "@/i18n/i18ns"

// 使用全局过滤器
import "@/filters"

// 1.0.1
const vm = new Vue({
    // 注册使用
    router,
    store,
    // i18n,
    render: function (h) {
        return h(App);
    },
}).$mount("#app");

console.log("main.js--vm is ", vm)
