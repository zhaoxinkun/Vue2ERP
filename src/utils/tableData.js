// 导入获取table 数据api  ,因为请求参数,query的问题,暂时不使用了
import {officeList} from "@/api/api";

// 创建变量   --存放办公管理的table数据
let tableData = null;


// 参数问题
export const getTableData = async () => {
    if (!tableData) {
        tableData = await officeList()
            .then(response => {
                console.log("data is ",response)
                // 成功回调
                let {code, data} = response.data;
                // 拿数据
                if (code === 20000) {
                    return data;
                } else {
                    console.log("未知错误")
                }
            })
            // 失败回调
            .catch(error => {
                console.log("error", error);
                return null
            })
    }
    // 返回数据
    return tableData  // 返回已经创建的 Promise
}
