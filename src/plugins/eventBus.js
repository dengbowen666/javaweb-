// eventBus.js

import { reactive } from 'vue';

const eventBus = reactive({
  listeners: {},
  $on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  },
  $emit(event, payload) {
    const callbacks = this.listeners[event];
    if (callbacks) {
      callbacks.forEach(callback => callback(payload));
    }
  },
  $off(event, callback) {
    if (event) {
      const callbacks = this.listeners[event];
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    } else {
      // 如果没有提供事件名，则清空所有事件的监听器
      this.listeners = {};
    }
  }
});

export default eventBus;