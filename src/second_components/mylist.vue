<template>
  <div><ul class="todo-main">
                  <item v-for="todo in todos" :key="todo.id" 
                  :todoObj="todo"
                  :deleteTodo="deleteTodo"
                  ></item >
                </ul></div>
</template>
<script setup>
import { computed, ref } from 'vue';
import item from './item.vue';

defineProps({
  todos: Array,
  deleteTodo:Function
})




</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>