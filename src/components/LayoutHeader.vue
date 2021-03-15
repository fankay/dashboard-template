<template>
  <div class="lheader">
    <el-menu
      class="el-menu-bar"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-user"></i>
          fankay
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
      
    </el-menu>
  </div>
</template>

<script>
export default {
  setup() {
    const handleSelect = () => {}
    return {
      handleSelect
    }
  }
};
</script>

<style lang="less">
.lheader{
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #fff;
  border-bottom: solid 1px #e6e6e6;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  .el-menu-bar{
    border-bottom: none !important;
  }
}
</style>