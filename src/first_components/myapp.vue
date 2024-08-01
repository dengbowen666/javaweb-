<script setup>
import { onMounted, ref, watch } from 'vue';
import myheader from '@/second_components/myheader.vue';
import mylist from '@/second_components/mylist.vue';
import myfooter from '@/second_components/myfooter.vue';
import myanimation from '@/second_components/myanimation.vue';
import { RouterView } from 'vue-router'
import { useDataStore } from '@/stores/useDataStore';
import { inject } from 'vue';
const DataStore = useDataStore()
//测试pinia
console.log(DataStore.test)
const ToDos = ref(JSON.parse(localStorage.getItem('todos')) || [])
onMounted(() => {
})
function addTodo(todoObj) {//传给儿子，父亲能收到参数
    ToDos.value.unshift(todoObj)
}
//勾选or取消勾选
//const checkTodo=(id)=>{
//ToDos.value.forEach((toDo) => {
//  if (toDo.id==id) {
//    toDo.done=!toDo.done
//  }
//});
//}

//删除
const deleteTodo = (id) => {
    ToDos.value.forEach((toDo, index) => {
        if (toDo.id == id) {
            ToDos.value.splice(index, 1)
        }
    })
}

//用全局事件总线实现删除操作
const eventBus = inject('eventBus');

eventBus.$on('deleteTodo', (id) => {
    ToDos.value.forEach((toDo, index) => {
        if (toDo.id == id) {
            ToDos.value.splice(index, 1)
        }
    })
});

import pubsub from 'pubsub-js';
//用消息订阅与发布实现
/*需要接收数据，参数为消息名和回调函数，有人发该消息和传递参数这里回调就执行
*/
//onMounted(() => {
pubsub.subscribe('deleteTodo', (name, id) => {
    //console.log('有人发布了消息' + id);
    ToDos.value.forEach((ToDo, index) => {
        if (ToDo.id == id) {
            ToDos.value.splice(index, 1)
        }
    })
})
//} )



//清除已经完成的事件，循环判断done，这个函数传给footer调用
/* 在原始代码中，你尝试使用 forEach 循环和 splice 方法来删除数组中的元素。这种方法有几个问题：

在遍历数组时直接修改数组（如使用 splice）可能会导致跳过某些元素，因为数组的长度会随着删除操作而改变。
代码逻辑中，if (toDo.done==true) 应该使用 === 而不是 =，因为 = 是赋值操作符，而不是比较操作符。
使用 filter 方法可以避免这些问题，因为它不会修改原始数组，而是返回一个新数组，其中包含满足条件的元素。这样可以更安全、更清晰地实现删除操作。
const deleteDone = () => {
  ToDos.value.forEach((toDo, index) => {
    if (toDo.done==true) {
    ToDos.value.splice(index,1)
  }
})
}*/
const deleteDone = () => {
    ToDos.value = ToDos.value.filter((toDo) => { return !toDo.done });
};



watch(() => ToDos.value, (value) => {
    //console.log(value);
    localStorage.setItem('todos', JSON.stringify(value))
}, { deep: true })//必须要深层次监听
</script>

<template>
    

       
        <div>
            <div  class="todo-container">
                <div class="todo-wrap">
                    <div style="margin-bottom: 5px
                    ;">
    <myanimation></myanimation></div>
                    <myheader @addTodo="addTodo"></myheader>
                    <mylist :todos="ToDos" :deleteTodo="deleteTodo"></mylist>
                    <myfooter :todos="ToDos" :deleteDone="deleteDone"></myfooter>
                </div>
            </div>
        </div>

    
</template>

<style>
/*base*/

</style>
