<template>
  <el-container class="layout_container">
    <el-aside width="200px">
      <layout-side />
    </el-aside>

    <el-container>
      <el-header class="layout_header">
        <layout-header/>
      </el-header>
      <el-main>
        <div class="main">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutHeader from '../components/LayoutHeader.vue';
import LayoutSide from "../components/LayoutSide.vue";
export default {
  components: {  LayoutSide, LayoutHeader },
};
</script>

<style lang="less">
.layout_container {
   height: 100vh;
   .layout_header {
     padding: 0px !important;
   }
   .main {
     background-color: #fff;
     padding: 30px;
     box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);;
   }
}
</style>