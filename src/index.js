
//导入css模块
// require("!style-loader!css-loader!../style/index.css");

//引入vue
import Vue from 'vue';

//引入css模块
import './style/index.scss'

//导入header模块
// var obj = require('./header');
// obj.run();
new Vue({
  el:'#app',
  data:{
    msg:'hello',
    abc:'李四'
  },
  // template:`
  //   <h1> 我的天  </h1>
  
  
  // render:function(h){
  //   return h('p',this.msg)
  // }
})