// 我们去处理导入进来的公共的数据,递归路由函数
export function initRouter(RouterData, targetArray) {

// 拿着数据去遍历
    RouterData.forEach(item => {

        // 定义添加的数据模板
        const routesObj = {
            path: item.url,
            name: item.name,
            meta: {
                title: item.title
            },
            component: () => import(`@/views/HOME/${item.component}/index.vue`)
        }

        // 因为有好几层,所以看看是不是数组了,没有children的是obj,如果还是数组,那就是children了
        if (targetArray instanceof Array) {
            // 最后一定是放进children里
            console.log("targetArray is ", targetArray)
            targetArray.push(routesObj);
        } else {
            if (!targetArray.children) {
                targetArray.children = []; 
            }
            targetArray.children.push(routesObj)
        }

        // 如果有子集,递归调用,只不过参数变了
        if (item.children) {
            initRouter(item.children, routesObj)
        }
    })
}
