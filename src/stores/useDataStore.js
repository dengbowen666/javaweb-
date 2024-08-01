// src/store/useDataStore.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia';

export const useDataStore = defineStore('useDataStore', ()=>{
  
    const ToDos= ref(JSON.parse(localStorage.getItem('todos')) || [])
    const test = ref('1'
   );
    return {
        ToDos,
        test
        
}
});