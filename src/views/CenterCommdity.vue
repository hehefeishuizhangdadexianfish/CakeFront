<template>
  <div>
    <el-row :gutter="20" style="position: relative; top: -200px">
      <el-col :span="6" v-for="o in selectList" :key="o.id" style="margin-bottom: 40px">
        <div class="grid-content bg-purple1">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
            <div style="padding: 14px">
              <span style="float: left; color: red; font-size: larger">￥{{ o.price }}</span><br/>
              <span class="product-description">{{ o.name }}</span>
              <div class="bottom clearfix">
                
                <el-button type="text" class="button" @click="handleClick(o.id)">购买</el-button>
               
                
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.selectcommdity();
  },
  data() {
    return {
      selectList: [],
    };
  },
  methods: {
    selectcommdity() {
      axios.get("http://localhost:8080/shop/Selectcommdity").then((result) => {
        const datalist=result.data.data;
        this.selectList=datalist.filter((item,index)=>index<10)
        console.log(this.selectList);
      });
    },
    handleClick(id){
    console.log(id);
  },
  },
 
};
</script>


<style>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple1 {
  background: #349797;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 250px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.product-description {
  padding-top: 10px;
  float: left;
  color: black;
  font-size: smaller;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* 设置最大行数为2 */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>