import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导入公共数据
import RouterData from "@/utils/menu"
// 导入处理路由的方法
import {initRouter} from "@/utils/routers";

const routes = [
    // 1.0.1
    {
        path: "/",
        // 重定向到登录页
        redirect: "/login"
    },
    // 1.0.1
    {
        // login登录页组件
        path: "/login",
        name: "login",
        component: () => import ("@/views/Login/index")
    },
    // 1.0.1
    {
        // 布局组件容器
        path: "/home",
        name: "home",
        meta: {
            title: "企业首页"
        },
        // 路由一级出口,父容器一定要有route-view,渲染子组件
        component: () => import ("@/Container/index"),
        redirect: "/index",
    },
];

// 先从routes中筛选出来home的路由部分
let HomeRouter = routes.filter(val => val.path === "/home")[0];

console.log("HomeRouter is ", HomeRouter);

// 然后往里添加一个自己children
HomeRouter.children = [];   //一定是数组

// 使用地沟路由函数,传递什么数据呢?一个是我们的公共数据,一个是我们添加的目标对象(空数组)
initRouter(RouterData, HomeRouter.children)

const router = new VueRouter
({
    routes,
});

export default router;
