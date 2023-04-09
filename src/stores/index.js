import { ref } from 'vue'
import { defineStore } from ' pinia'

export const store = defineStore('store', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }

  return { count}
})
