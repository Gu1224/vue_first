<template>
  <div>
    <el-container class="container">
      <!-- 头部区域 -->
      <el-header>
        <el-row>
          <!-- logo区域 -->
          <el-col :span="3">
            <el-image style="height: 100%" :src="require('../assets/images/logo.svg')" fit="fit"></el-image>
          </el-col>
          <!-- 菜单区域 -->
          <el-col :span="16">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
              <el-submenu v-for="item in navData" :index="item.id + ''" :key="item.id">
                <template slot="title">{{item.value}}</template>
                <el-menu-item
                  v-for="subItem in item.children"
                  :index="subItem.id + ''"
                  :key="subItem.id"
                >
                  <template slot="title">{{subItem.value}}</template>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
          <!-- 搜索框区域 -->
          <el-col :span="5">
            <el-input placeholder="请输入需要搜索的内容">
              <el-button slot="append" class="el-icon-search"></el-button>
            </el-input>
          </el-col>
        </el-row>
      </el-header>
      <!-- 主体内容区域 -->
      <el-main>
        <!-- 顶部背景图 -->
        <el-container>
          <div class="bg1">
            <p class="title">prime Day</p>
            <p class="fight">备战2021 Prime Day</p>
            <p class="desc">冲刺流量巅峰，实现旺季爆单</p>
            <el-button type="warning">了解详情</el-button>
          </div>
        </el-container>
        <!-- 资源与服务 -->
        <el-container>
          <div class="service">
            <h1>资源与服务</h1>
            <p>RECOURCES AND SERVICES</p>
            <!-- 按钮组 -->
            <el-row class="resource">
              <el-col :span="3" class="resourceBtn" v-for="item in resourceData" :key="item.name">
                <a :href="item.image">
                  <el-image :src="item.image" fit="fit"></el-image>
                </a>
                <p class="demonstration">{{ item.name }}</p>
              </el-col>
            </el-row>
            <div class="more">
              <el-button>
                查看更多
                <i class="el-icon-arrow-right el-icon-right"></i>
              </el-button>
            </div>
          </div>
        </el-container>
        <!-- 卖家大学 -->
        <el-container>
          <div class="seller">
            <h1>卖家大学</h1>
            <p>SELLER UNIVERCITY</p>
            <el-row class="sellerRow" :gutter="16">
              <el-col :span="12">
                <el-image class="topImage" :src="require('../assets/images/chat.png')"></el-image>
              </el-col>
              <el-col :span="12">
                <el-row class="topRow" :gutter="16">
                  <el-col :span="24">
                    <el-card>
                      <h2>每天学习10分钟</h2>
                      <h2>跨境出海更轻松</h2>
                      <el-button type="warning">立刻学习</el-button>
                    </el-card>
                  </el-col>
                </el-row>
                <el-row class="bottomRow" :gutter="16">
                  <el-col :span="8" v-for="(item,id) in sellerData" :key="id">
                    <el-card>
                      <el-image :src="item.src"></el-image>
                      <h5>{{item.title}}</h5>
                      <h6>{{item.desc}}</h6>
                    </el-card>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-container>
        <!-- 最新资讯 -->
        <el-container>
          <div class="news">
            <h1>最新资讯</h1>
            <p>THE LATEST NEWS</p>
            <el-card class="newsCard">
              <el-row :gutter="16">
                <!-- 左侧图片 -->
                <el-col :span="12">
                  <el-row :gutter="16">
                    <el-col :span="24" class="livePic">
                      <el-image :src="require('../assets/images/live.jpg')"></el-image>
                    </el-col>
                    <el-col :span="12" class="flightPic">
                      <el-image :src="require('../assets/images/prime.png')"></el-image>
                    </el-col>
                    <el-col :span="12" class="primePic">
                      <el-image :src="require('../assets/images/prime.png')"></el-image>
                    </el-col>
                  </el-row>
                </el-col>
                <!-- 右侧列表 -->
                <el-col :span="11">
                  <ul>
                    <li v-for="(item,id) in newsData" :key="id">
                      <el-link>{{item.title}}</el-link>
                    </li>
                  </ul>
                  <el-button>
                    查看更多
                    <i class="el-icon-arrow-right el-icon-right"></i>
                  </el-button>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </el-container>
        <!-- 中国出口电商优选品牌 -->
        <el-container>
          <div class="brand">
            <h1>中国出口电商优选品牌</h1>
            <p>TOP BRAND OF CHINA'S CROSS BORDER E-COMMERCE</p>
            <el-card>
              <el-row :gutter="20">
                <el-col :span="6" v-for="(item,id) in brandData" :key="id">
                  <el-card shadow="hover">
                    <el-image :src="item.src"></el-image>
                    <div class="introduce">
                      <h1>{{item.title}}</h1>
                      <p>{{item.first}}</p>
                      <p>{{item.second}}</p>
                    </div>
                    <el-button class="brandDetails">
                      了解详情
                      <i class="el-icon-arrow-right el-icon-right"></i>
                    </el-button>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import nav from '../assets/js/navData'
import resource from '../assets/js/sourceData'
import news from '../assets/js/newsData'
import brand from '../assets/js/brandData'
import seller from '../assets/js/sellerData'

export default {
  created () {
    this.getNavData()
    this.getResourcesData()
    this.getNewsData()
    this.getBrandData()
    this.getSellerData()
  },
  data () {
    return {
      // 导航栏数据列表
      navData: [],
      // 导航数据
      nav,
      // 选中导航栏的下标
      activeIndex: '101',
      // 资源与服务数据列表
      resourceData: [],
      // 资源与服务数据
      resource,
      newsData: [],
      news,
      brandData: [],
      brand,
      sellerData: [],
      seller
    }
  },
  methods: {
    getNavData () {
      this.navData = this.nav.navData
    },
    getResourcesData () {
      this.resourceData = this.resource.resourceData
    },
    getNewsData () {
      this.newsData = this.news.newsData
    },
    getBrandData () {
      this.brandData = this.brand.brandData
    },
    getSellerData () {
      this.sellerData = this.seller.sellerData
    }
  },
  computed: {}
}
</script>

<style scoped>
/* 第一个背景图 */
.bg1 {
  background-image: url('../assets/images/bg1.png');
  width: 100%;
  height: 250px;
}
.bg1 p {
  margin: 15px 50px;
  padding: 0px 10px;
}
.bg1 button.el-button {
  margin: 10px 60px;
  border-radius: 30px;
}
.bg1 p.title {
  color: #f4f6f8;
  font-size: 25px;
}
.bg1 p.fight {
  color: #f4f6f8;
  font-size: 35px;
}
.bg1 p.desc {
  color: #f4f6f8;
  font-size: 25px;
}

/* 资源与服务 */
.service {
  width: 100%;
}
.service h1 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 0;
}
.service p {
  color: #9d9c9c;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
}
.resourceBtn .el-image {
  position: unset;
  display: block;
  overflow: hidden;
  margin: auto;
  width: 50%;
}
.resourceBtn.el-col.el-col-3 {
  margin: 0 47px;
}
.more {
  margin-left: 1120px;
}
.more .el-button {
  background: #fff;
  border: 0px solid;
}

/* 卖家大学 */
.seller {
  background: url(/img/bg2.e321e0b5.png);
  width: 100%;
  padding-bottom: 30px;
}
.seller h1 {
  text-align: center;
  color: #f4f6f8;
  margin-bottom: 0;
  margin-top: 30px;
}
.seller p {
  text-align: center;
  color: #f4f6f8;
  margin-bottom: 30px;
  margin-top: 0;
}
.el-row.sellerRow {
  width: 84%;
  margin: auto !important;
}
.bottomRow {
  margin-top: 8px;
}
.topRow .el-card {
  background: #4f9fef;
  color: #f4f6f8;
}
.topRow .el-card .el-button {
  border-radius: 20px;
}
.bottomRow .el-image {
  width: 90%;
  padding-left: 7px;
}
.bottomRow h5,
.bottomRow h6 {
  text-align: center !important;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
h6 {
  font-family: fangsong;
}

/* 最新资讯 */
.news {
  width: 100%;
  background: #d8e6ff40;
  padding: 0 0 30px 0;
}
.news h1 {
  text-align: center;
  margin-bottom: 0;
  margin-top: 30px;
}
.news p {
  color: #9d9c9c;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
}
.newsCard {
  width: 83%;
  margin: auto;
}
.newsCard .el-row .el-col ul {
  margin: 0 !important;
}
.newsCard .el-row .el-col ul li {
  width: 420px;
  margin: 0 0 10.9px 0;
}
span.el-link--inner {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  width: 420px !important;
}
.newsCard .el-row .el-col .el-button {
  border: 0px solid;
  float: right;
  margin-top: 11px;
  padding-right: 0px;
}
.newsCard .el-row .el-col .el-button:hover {
  background: none;
  border: 0px solid;
}
.newsCard .el-row .el-col .el-row .el-col .el-image {
  border-radius: 10px;
}
.livePic .el-image {
  height: 220px !important;
}
.flightPic,
.primePic {
  padding: 8px 0;
}
/* 中国出口电商优选品牌 */
.brand {
  width: 83%;
  margin: 0 auto 20px auto;
}
.brand h1 {
  text-align: center;
  margin-bottom: 0;
  margin-top: 30px;
}
.brand p {
  text-align: center;
  color: #9d9c9c;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 15px;
}
.brand .introduce {
  height: 130px;
}
.brand .introduce h1 {
  text-align: unset;
  margin-bottom: 20px;
  margin-top: 35px;
}
.brand .introduce p {
  text-align: unset;
  color: #9d9c9c;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  font-size: 15px;
}
.brand .el-image {
  width: 30%;
}
.brand .el-button.brandDetails {
  border: none;
  float: right;
  padding-right: 0px;
}
.brand .el-button.brandDetails:hover {
  background: none;
}
</style>
