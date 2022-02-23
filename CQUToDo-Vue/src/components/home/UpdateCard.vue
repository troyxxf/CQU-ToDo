<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold;font-size: 20px">近期任务</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
    </div>
    <section id="todoapp">
      <header class="header">
        <h1>CquToDo</h1>
        <input v-model="inputValue" @keyup.enter="add" autofocus="autofocus" autocomplete="off" placeholder="请输入任务" class="new-todo"/>
      </header>

        <ul class="todo-list">
        </ul>
      </section>
      <footer class="footer">
      </footer>

    <footer class="info">
    </footer>
    <div class="block">
      <el-button @click="show = !show">+</el-button>
      <div style="display: flex; margin-top: 20px; height: 100px;">
        <transition name="el-fade-in-linear">
          <div v-show="!show" class="transition-box">添加任务</div>
        </transition>
      </div>
      <div class="block" v-for="(item,index) in list" :key="index">
        <div class="show-input">
          <span class="index">{{index+1}}</span>
          <label>{{item}}</label>
          <button class="destroy"></button>
        </div>
      </div>
      <el-timeline>
        <el-timeline-item timestamp="2020/10/15" placement="top">
          <el-card>
            <h4>完成首页初版</h4>
            <p>xxf 提交于 2020/10/15 17:32</p>
            <el-row>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/10/14" placement="top">
          <el-card>
            <h4>完成注册页面</h4>
            <p>xxf 提交于 2020/10/14 19:02</p>
            <el-row>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/10/14" placement="top">
          <el-card>
            <h4>完成登录页面</h4>
            <p>xxf 提交于 2020/10/14 9:10</p>
            <el-row>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
          </el-card>
        </el-timeline-item>
<!--        <el-timeline-item timestamp="2019/4/6" placement="top">-->
<!--          <el-card>-->
<!--            <h4>实现搜索框模糊查询</h4>-->
<!--            <p>Evan 提交于 2019/4/6 19:51</p>-->
<!--          </el-card>-->
<!--        </el-timeline-item>-->
<!--        <el-timeline-item timestamp="2019/4/5" placement="top">-->
<!--          <el-card>-->
<!--            <h4>实现图书修改功能</h4>-->
<!--            <p>Evan 提交于 2019/4/5 22:52</p>-->
<!--          </el-card>-->
<!--        </el-timeline-item>-->
      </el-timeline>
    </div>
  </el-card>
</template>
<script src="https:/>/cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
var todoapp = new Vue({
  el:"#todoapp",
  data:{
    show:true,
    list:["任务1","任务2","任务3","任务4"],
    inputValue:"好好学习"
  },
  methods:{
    add:function(){
      this.list.push(this.inputValue);
    }
  }
})
</script>
<script>
import Footer from './About'
export default {
  name: 'UpdateCard',
  components: {Footer}
}
</script>
<script>
export default {
  data: () => ({
    show: true
  })
}
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
<style scoped>
  .box-card {
    margin-top: 5px;
    width: 988px;
    height: 1050px;
    text-align: left;
  }
</style>
