<template>
  <div>
    
 <transition 
 name="animate__animated animate__bounce" 
 :appear="true"
 enter-active-class="animate__lightSpeedInRight"
 >
<h1 v-show="show" style="color: chocolate;size: 20px;font-weight: bold;font-style: italic;letter-spacing: 2px;" >这是我的待办清单</h1>
</transition>


  </div>
</template>
<script setup>
import 'animate.css'
import { computed, ref } from 'vue';
const show= ref(true);
</script>
<style scoped>
/*
.hello-enter-active{
    animation: todoList 1s linear
}
.hello-leave-active{
    animation:  todoList 1s reverse linear
}

@keyframes todoList {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}*/
</style>