import { createPinia, defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useMainStore = defineStore('main', () => {
    const players = reactive([])
    const socket = {}
    return { players, socket }
  })

const store = createPinia()

export default store
  