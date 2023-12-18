<template>
  <div>
    <el-drawer
      title="我嵌套了 Form !"
      :visible.sync="drawer"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="Formlabelwidth">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="职位" :label-width="Formlabelwidth">
            <el-input v-model="form.job"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="Formlabelwidth">
            <el-select v-model="form.sex" placeholder="请选择性别信息">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间选择" :label-width="Formlabelwidth">
            <el-row>
              <el-col :span="10">
                <el-date-picker
                  type="date"
                  placeholder="请选择日期"
                  v-model="form.date"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="1">-</el-col>
              <el-col :span="10">
                <el-date-picker
                  type="date"
                  placeholder="最后操作时间"
                  v-model="form.time"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="地址" :label-width="Formlabelwidth">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm()">取 消</el-button>
          <el-button type="primary" @click="closeDrawer()" :loading="loading">{{
            loading ? "提交中 ..." : "确 定"
          }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      drawer:false,
      form: {
        name: "",
        job: "",
        sex: "",
        date: "",
        time: "",
        address: "",
      },
      Formlabelwidth: "80px",
      loading: false,
    };
  },
  methods: {
    cancelForm() {
      this.drawer = false;
      this.loading = false;
      clearTimeout(this.timer);
      this.form.name = null;
      this.form.address = null;
      this.form.date = null;
      this.form.sex = null;
      this.form.job = null;
      this.form.time = null;
    },
    closeDrawer() {
      this.loading = true;
      const formDate = JSON.stringify(this.form);
      axios
        .put("http://localhost:8080/emp/Insertdata", formDate, {
          headers: { "Content-Type": "application/json" },
        })
        .then((result) => {
          this.tableData = result.data.data;
          this.defaultselect();
        });
      // 动画关闭需要一定的时间
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    },
  },
};
</script>
