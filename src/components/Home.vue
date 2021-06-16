<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <el-row>
        <!-- logo区域 -->
        <el-col :span="3">
          <div class="logo">
            <img src="../assets/images/logo.svg" alt="logo" height="100%" />
          </div>
        </el-col>
        <!-- 搜索区域-->
        <el-col :span="14">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="全部分类">
              <el-option
                v-for="item in navData"
                :label="item.value"
                :value="item.id"
                :key="item.id"
              ></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <!-- 广告区域 -->
        <el-col :span="7">
          <div class="adv">
            <img src="../assets/images/adv.png" alt="adv" height="100%" />
          </div>
        </el-col>
      </el-row>
    </el-header>
    <!-- 中部内容区域 -->
    <el-container></el-container>
  </el-container>
</template>

<script>
import nav from '../assets/js/navData.js'
export default {
  created () {
    this.getNavData()
  },
  data () {
    return {
      input3: '',
      select: '',
      data: nav,
      navData: []
    }
  },
  methods: {
    getNavData () {
      this.navData = this.data[0].navData
      console.log('navData', this.navData)
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.logo,
.adv {
  height: 39px;
  padding: 0 5px;
}
.el-select {
  width: 110px !important;
}
</style>
