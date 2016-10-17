<template>

  <!-- <hello1></hello1> -->
  
  <div id="app">
   <header1 v-bind:msgfromfather="items.length" 
   v-on:from-child="listenToMyBoy"></header1>
   <!-- 当 fromChild是无效，一定得是form-child形式 -->
   <h1>{{title}}</h1>
   <h1>看看从子组件里传过来的是什么:{{childWords}}</h1>
   <input v-model="newItem" @keyup.enter="addNew">
   <ul>
     <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinished(item)">{{item.label}}</li>
   </ul>
  </div>
</template>

<script>
// import Hello1 from './components/Hello';
import Header1 from './components/topHeader';
// Do not use built-in or reserved HTML elements as component id: Header
import Store from './store';

export default {
  data(){
    return{
      title:'this is a todo list',
      items:Store.fetch(),
      newItem:'添加新任务',
      num:0,
      childWords:''
    }

  },
  watch:{
      items:{
        handler:function(items){
            Store.save(items)
        },
        deep:true
      }
  },
  methods:{
    toggleFinished:function(item){
      item.isFinished=!item.isFinished;
    },
    addNew:function(){
      this.items.push({
        label:this.newItem,
        isFinished:false
      })
      this.newItem='';
    },
    listenToMyBoy:function(msg){
      this.childWords=msg;
    }
  },
   components: {
    Header1
  }
}
</script>

<style>
html {
  height: 100%;
}
.finished{
  text-decoration: underline;
  color: red;

}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
