import Vue from "vue";

// 导入过滤器
import * as filters from "./filters"

// 遍历添加过滤器
Object.keys(filters).forEach(item => Vue.filter(item, filters[item]))
