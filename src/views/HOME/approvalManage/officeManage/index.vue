<script>
// 导入请求数据api
import {officeList} from "@/api/api";

// import {getTableData} from "@/utils/tableData";

export default {
  name: "officeManage",
  async mounted() {
    await this.getList();
    // try {
    //   this.tableData = await getTableData().then(() => {
    //     console.log("成功了,数据为", this.tableData)
    //   })
    // } catch (error) {
    //   console.log("error", error)
    // }
  },
  data() {
    return {
      // 表格数据
      tableData: [],
      listQuery: {
        pageNo: 1,
        pageSize: 10,
        name: ""
      },
      rows: 1
    }
  },
  methods: {

    async getList() {
      let response = await officeList(this.listQuery);
      let {code, data} = response.data;
      if (code === 20000) {
        this.tableData = data.list;
        this.rows = data.rows;
        console.log("list数据请求成功", response);
        console.log("tabadata", this.tableData)
      }

    }

  }
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
          style="width: 100%">

        <el-table-column
            type="index"
            label="序号">
        </el-table-column>

        <el-table-column
            fixed
            prop="account"
            label="申请人"
            column-key="account"
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
            label="申请装态">
        </el-table-column>

        <el-table-column
            prop="do"
            label="操作">
        </el-table-column>
      </el-table>
    </div>

  </el-card>

</template>

<style scoped lang="scss">

</style>
