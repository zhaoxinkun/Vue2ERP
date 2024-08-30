<script>
// 导入请求数据api
import {officeList} from "@/api/api";

// import {getTableData} from "@/utils/tableData";

export default {
  name: "officeManage",
  async mounted() {
    // 发送请求
    await this.getList();
    // 尝试剥离失败
    // try {
    //   this.tableData = await getTableData().then(() => {
    //     console.log("成功了,数据为", this.tableData)
    //   })
    // } catch (error) {
    //   console.log("error", error)
    // }

    console.log("approvalManage/index --- 查看全局过滤器", this.$options.filters)
  },
  data() {
    return {
      // 表格数据
      tableData: [],
      // 查询参数
      listQuery: {
        // 当前页码
        pageNo: 1,
        // 一页多少条
        pageSize: 10,
        name: ""
      },
      // 总条数
      rows: 1
    }
  },
  computed: {
    // 筛选状态数据
    filterStatus() {
      // 原本的
      // [{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]

      // 数据从哪里来? 从表格数据中来
      // 数组对象去重,创建去重对象
      let map = new Map();
      // 遍历需要去重的数据
      for (let item of this.tableData) {
        // 拿到后,避免直接修改原数据
        let v = {...item};  //v就是每一个数据list
        console.log("approvalManage/index --- 遍历tableData数据的item is", v);
        // 去重添加
        if (!map.has(v.status)) {
          // 格式转换,使用全局过滤器
          v.text = this.$options.filters["statusFilter"](v.status);
          map.set(v.status, v)
        }
      }
      const data = [...map.values()]
      return data.map(item => ({text: item.text, value: item.status}))
    },
    // 申请人筛选
    filterPerson() {
      // 创建对象,存数据
      let map = new Map();
      // 遍历数据
      for (let item of this.tableData) {
        // 拿到每一条
        let v = {...item};
        // 往里添加
        if (!map.has(v.account)) {
          map.set(v.account, v)
        }
      }
      // 返回数据
      const data = [...map.values()]
      console.log("data is ", data);

      return data.map(item => (
          {
            text: item.account,
            value: item.account
          }
      ))
    },
  },
  methods: {

    async getList() {
      // 携带参数
      let response = await officeList(this.listQuery);
      // 拿到结果
      let {code, data} = response.data;
      if (code === 20000) {
        console.log("approvalManage/index ---tableList数据请求成功", response);

        console.log("approvalManage/index ---时间是", data.list[0].created)
        // tabel数据
        this.tableData = data.list;
        // 总条数,用于分页
        this.rows = data.rows;
        console.log("approvalManage/index ---row is ", this.rows)

        console.log("approvalManage/index ---tableData", this.tableData)
      }
    },
    // 筛选
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    // 分页,每页的条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // 修改请求参数
      this.listQuery.pageSize = val;
      // 重新发送请求
      this.getList();
    },
    // 改变页码
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      // 修改请求参数
      this.listQuery.pageNo = val;
      // 重新发送请求
      this.getList();
    },
    currentPage4() {
    }

  },

  // 局部过滤器
  // filters: {
  //   statusFilter(val) {
  //     switch (val) {
  //       case 0:
  //         return "进件初始"
  //       case  1:
  //         return "提交一审"
  //       case  2:
  //         return "一审通过"
  //       case  3:
  //         return "一审拒绝"
  //       case  4:
  //         return "提交二审"
  //       case  5:
  //         return "二审通过"
  //       case  6:
  //         return "二审拒绝"
  //       case  7:
  //         return "提交终审"
  //       case  8:
  //         return "终审通过"
  //       case  9:
  //         return "终审拒绝"
  //       case  10:
  //         return "审批完成"
  //       case  11:
  //         return "生成凭证"
  //     }
  //   },
  //   statusStyle(val) {
  //     switch (val) {
  //       case 0:
  //         return "success"
  //       case  1:
  //         return "info"
  //       case  2:
  //         return "success"
  //       case  3:
  //         return "danger"
  //       case  4:
  //         return "info"
  //       case  5:
  //         return "success"
  //       case  6:
  //         return "danger"
  //       case  7:
  //         return "info"
  //       case  8:
  //         return "success"
  //       case  9:
  //         return "danger"
  //       case  10:
  //         return "success"
  //       case  11:
  //         return "warning"
  //     }
  //   }
  // }
}
</script>

<template>
  <el-card class="box-card">

    <div slot="header" class="clearfix">
      <span>申请管理</span>

      <!--      输入框-->
      <div class="filter-container">
        <el-input v-model="listQuery.name"
                  prefix-icon="el-icon-search"
                  placeholder="请输入用户名"
                  class="filter-item"
                  size="medium"
                  @input="getList()"
        />
      </div>
      <el-table
          :data="tableData"
          stripe
          style="width: 100%; height: 100%">

        <el-table-column
            fixed
            type="index"
            label="序号">
        </el-table-column>

        <el-table-column
            fixed
            prop="account"
            label="申请人"
            column-key="account"
            :filters="filterPerson"
            :filter-method="filterHandler"
        >
        </el-table-column>

        <el-table-column
            prop="created"
            label="申请时间"
            column-key="created">
        </el-table-column>

        <el-table-column
            prop="apply_goods"
            label="申请物品"
            column-key="apply_goods">
        </el-table-column>

        <el-table-column
            prop="apply_goods_num"
            label="申请数量"
            column-key="apply_goods_num">
        </el-table-column>

        <el-table-column
            prop="apply_reason"
            label="申请原因"
            column-key="apply_reason">
        </el-table-column>

        <el-table-column
            prop="status"
            label="申请装态"
            width="100"
            :filters="filterStatus"
            :filter-method="filterHandler"
        >
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | statusStyle"> {{ scope.row.status | statusFilter }}</el-tag>
          </template>
        </el-table-column>

        <el-table-column
            prop="do"
            label="操作">
        </el-table-column>
      </el-table>


    </div>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="listQuery.pageNo"
        :page-size="listQuery.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="rows">
    </el-pagination>

  </el-card>

</template>

<style scoped lang="scss">

</style>
