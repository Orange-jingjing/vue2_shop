<template>
  <!-- 权限功能步骤：
  0. Rights是home的子组件，添加相关路由
  1. 绘制布局，面包屑和卡片
  2. data中定义权限列表rightsList(数组)，created中发送get请求获取数据。
  3. 页面内容渲染，用el-table
  -->
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <el-table :data="rightsList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="路径" prop="path"></el-table-column>
        <el-table-column label="权限等级" prop="level">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level === '0'">一级权限</el-tag>
            <el-tag type="success" v-else-if="scope.row.level === '1'">二级权限</el-tag>
            <el-tag type="warning" v-else>三级权限</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //权限列表
      rightsList: [],
    }
  },
  created() {
    //获取所有的权限
    this.getRightsList()
  },
  methods: {
    //获取权限列表
    async getRightsList() {
      const { data: res } = await this.$http.get('rights/list')
      if (res.meta.status != 200) {
        return this.$message.error('获取权限列表失败！')
      }
      //   console.log(res.data)
      this.rightsList = res.data
    },
  },
}
</script>

<style lang = "less" scoped>
</style>