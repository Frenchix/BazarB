import { createPinia, defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useMainStore = defineStore('main', () => {
    const players = reactive([])
    
    return { players }
  })

const store = createPinia()

export default store
  