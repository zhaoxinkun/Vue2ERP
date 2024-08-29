// 办公申请 ---申请物品数据---下拉框
export const apply_goods = [
    {
        key: 1, goods_name: "笔记本",
    },
    {
        key: 2, goods_name: "电脑",
    },
    {
        key: 3, goods_name: "加湿器",
    },
    {
        key: 4, goods_name: "打印机",
    },
    {
        key: 5, goods_name: "铅笔",
    },
    {
        key: 6, goods_name: "橡皮",
    }
]

// 办公申请 ---申请用户数据  ---下拉框
import {userEmployee} from "@/api/api";

// 用来存放数据
let EmployeeData = null;

// 暴露一个函数
export const getEmployeeData = async () => {
    if (!EmployeeData) {
        // 发送请求,拿数据
        EmployeeData = await userEmployee()
            .then(response => {
                // 成功了
                let {code, data} = response.data;
                if (code === 20000) {
                    return data;  //返回数据
                } else {
                    console.log("未知错误") // 或者抛出错误
                }
            })
            .catch(error => {
                console.log("error", error)
                return null // 或者抛出错误
            })
    }
    // 返回出数据
    return EmployeeData // 返回已经创建的 Promise
}
