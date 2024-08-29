// index使用webpack的模块 处理所有的组件,动态生成全局组件

import Vue from "vue";

// 读取文件的路径
const conText = require.context("./", true, /\.js$/)

// 循环集合
conText.keys().forEach(item => {
    console.log("item is ", item)
    const componentConfig = conText(item); //获取组件配置
    // 加载全局组件
    const module = componentConfig.default || componentConfig;
    if (module?.name) {
        Vue.component(module.name, module)
    }
})
