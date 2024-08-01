<template>
  
  <div class="todo-footer" v-show="getTotalNumber(todos)">
                  <label>
                    <input type="checkbox" @click="completeAll(todos)" :checked="hasDoneAll(todos)"/>
                  </label>
                 <span style="color: rgb(166, 164, 161);">
                    <span>已完成{{ getDoneNumber(todos) }}</span> / 全部{{getTotalNumber(todos)}}
                  </span>
                  <button class="btn btn-danger" @click="props.deleteDone">清除已完成任务</button>
                </div>
</template>
<script setup>
import { computed, ref } from 'vue';
const props=defineProps({
  todos: Array,
  deleteDone:Function
})
//获得已经完成的数量
/*使用 reduce 方法对 todos 数组进行处理。
第一个参数是一个回调函数，它接收两个参数：累加器 pre 和当前待办事项 todo。
在回调函数中，使用三元运算符 todo.done ? 1 : 0 来检查当前待办事项是否已完成（todo.done 为 true）。如果已完成，则返回1，否则返回0。
累加器 pre 初始值为0，表示从0开始累加。*/
const getDoneNumber = (todos) => {
    return todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0), 0)

 /* let doneNumber=0
  todos.forEach((todo) => {
    
    if (todo.done==true) {
      doneNumber++
    }

  })
  return doneNumber*/

}
//总任务数量 ,这里直接TotalNumber=ref(props.todos.length)不行 数组改变但是TotalNumber不变
const getTotalNumber = (todos) => {
  return todos.length
}

  const completeAll = (todos) => {
    let allDone = todos.every(todo => todo.done);
    if (allDone) {
      todos.forEach(todo => {
        todo.done = false;
      });
    } else {
      todos.forEach(todo => {
        todo.done = true;
      });
    }
  };

const hasDoneAll = (todos) => {
  return getDoneNumber(todos)== getTotalNumber(todos)
}
//清除已完成任务

</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 15px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>