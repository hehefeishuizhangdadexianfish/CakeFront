<template>
  <el-carousel :interval="3000" type="card" height="200px" style="width: 100%; ">
    <el-carousel-item v-for="(item,index) in img" :key="index">
      <router-link :to="{path:'/DatilPage' ,query:{id:index}}">
        <el-image v-bind:src="item" />
      </router-link>
      
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default{
    data() {
        return {
            
            url: "",
            img: [
                require("../../public/h1.jpg"),
                require("../../public/h2.png"),
                require("../../public/h3.jpg"),
                require("../../public/h4.jpg")
            ]
        };
    },
}

</script>



<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>