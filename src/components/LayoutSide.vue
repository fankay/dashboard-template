<template>
  <div id="sider">
    <div class="brand">
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path
          d="M43 16V42H5V16V16"
          stroke="#fff"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 4H43V16H5V4Z"
          fill="none"
          stroke="#fff"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 12C12.1046 12 13 11.1046 13 10C13 8.89543 12.1046 8 11 8C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12Z"
          fill="#fff"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17 12C18.1046 12 19 11.1046 19 10C19 8.89543 18.1046 8 17 8C15.8954 8 15 8.89543 15 10C15 11.1046 15.8954 12 17 12Z"
          fill="#333"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23 12C24.1046 12 25 11.1046 25 10C25 8.89543 24.1046 8 23 8C21.8954 8 21 8.89543 21 10C21 11.1046 21.8954 12 23 12Z"
          fill="#fff"
        />
      </svg>
      <h1>Hi OS</h1>
    </div>
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo side_menu"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
      background-color="#343a40"
      text-color="#ccc"
      active-text-color="#fff"
    >
      <el-menu-item index="2" route="/home">
        <i class="el-icon-menu"></i>
        <template #title>首页</template>
      </el-menu-item>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>演示</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1" route="/table-a">表格A</el-menu-item>
          <el-menu-item index="1-2">表格B</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      
    </el-menu>
  </div>
</template>

<script>
export default {
  setup() {
    const handleOpen = () => {}
    const handleClose = () => {}
    return {
      handleOpen,
      handleClose
    }
  }
};
</script>

<style lang="less">
#sider {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: solid 1px #e6e6e6;
  .brand {
    height: 60px;
    flex: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-bottom: solid 1px #000;
    background-color: #343a40;
    color: #fff;
  }
  .side_menu {
    flex: 1 1 auto;
    border-right: none !important;
  }
}
</style>