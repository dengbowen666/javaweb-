<template>
  <div class="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
              </div>
</template>
<script setup>
import {nanoid} from 'nanoid'
import { defineEmits, ref } from 'vue';

/*const props=defineProps({//要用props实例来接收父亲传来的函数和数据
  addTodo:Function
})*/

/*定义emit*/
const emit=defineEmits(['addTodo'])
const title=ref('')
const add = () => {
  if (!title.value.trim()) {//去掉前后空格
    alert("输入不能为空")
    return
  }//限制输入为空
  //将输入包装成一个对象
  const todoObj = {
    id: nanoid(),
    title: title.value,
    done: false,
    isEdit: ref(false)
  }
  
  //props.addTodo(todoObj)实例调用里面的函数，通知父亲使用函数添加对象

  //emit触发事件，在app里面addTOdo已经与myheader实例对象绑定，在这里传递参数即可
  emit('addTodo', todoObj);
  title.value=''
  //清空输入框
}
</script>
<style scoped>   
/*header*/
.todo-header input {
  width: 680px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>