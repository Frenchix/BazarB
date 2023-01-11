import { createPinia, defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useMainStore = defineStore('main', () => {
    const players = reactive([])
    const socket = {}
    const goodAnswer = ''
    const pauseGame = ref(false)

    return { players, socket, goodAnswer, pauseGame }
  })

const store = createPinia()

export default store
  