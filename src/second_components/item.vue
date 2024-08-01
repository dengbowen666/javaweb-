<template>
  <div><li>
         <label >
           <input type="checkbox"  
         v-model="todoObj.done" 
        />
        <span v-show="todoObj.isEdit==false" style="color: rgb(146, 148, 150);"> {{ todoObj.title }}</span>
         <input 
         v-show="todoObj.isEdit==true" 
         type="text" 
         v-model="editTitle"  
         @blur="edit(todoObj)"
         ref="input"
         >

       </label>
        <button class="btn btn-danger" 
        @click="handleDelete(todoObj.id)">删除</button>
        <button v-show="todoObj.isEdit == false" 
        @click="handleEdit(todoObj)" 
        class="btn btn-edit"> 编辑</button>
          <button v-show="todoObj.isEdit == true" 
          @click="cancelEdit(todoObj)" 
          
          class="btn btn-edit"> 取消</button>
        <button @click="emitEvent(todoObj.id)">删除</button>
        <button @click="pub(todoObj.id)">删除</button>
        
     </li>
     </div>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue';
import { inject } from 'vue';

//声明接收todo对象
const props=defineProps({
  todoObj: Object,
  //checkTodo:Function
  deleteTodo:Function
}) 
//删除
const eventBus = inject('eventBus');
const emitEvent = (id) => {
  if (confirm('确定删除嘛？')) {
    eventBus.$emit('deleteTodo', id)
  }
};
//const emit=defineEmits(['deleteTodo'])
const handleDelete = (id) => {
  if (confirm('确定删除嘛？')) {
    props.deleteTodo(id)
    //emit('deleteTodo', id);
   // eventBus.$emit('deleteTodo',id)
  }
}
import pubsub from 'pubsub-js'
const pub = (id) => {
  if (confirm('确定删除吗')) {
    pubsub.publish('deleteTodo', id)
  }
}
//编辑
//用了一个新变量来双向绑定input值而不直接修改todos数组，这样监听不到todos变化，本地储存不变
const editTitle = ref('')
const input=ref(null)
const handleEdit = (toDo) => {
  toDo.isEdit = true
  editTitle.value = toDo.title
  //等执行完回调才会重新解析模板，才会出现input框
  /*setTimeout(() => {
    input.value.focus()
  }, 300)*/
  nextTick().then(() => {
    input.value.focus()
  });
}
const cancelEdit = (toDo) => {
  //阻止
   editTitle.value=toDo.title 
  toDo.isEdit = false
  
}

//失去焦点事件会在其他事件前面判定
const edit = (toDo) => {

  setTimeout(() => {
     
      toDo.title = editTitle.value
      toDo.isEdit = false
    
    }, 300)

  
  
}
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  color: rgb(210, 109, 177);
}
/* 默认button不显示，鼠标悬停才出现*/
li:hover button{
 display: block;
}
</style>