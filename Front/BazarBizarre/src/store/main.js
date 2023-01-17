import { createPinia, defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useMainStore = defineStore('main', () => {
    const players = reactive([])
    const socket = {}
    const goodAnswer = ''
    const pauseGame = ref(true)
    const hidden = reactive({
      isHiddenfantomeGood: true,
      isHiddenfantomeBad: true,
      isHiddencanapeGood: true,
      isHiddencanapeBad: true,
      isHiddenlivreGood: true,
      isHiddenlivreBad: true,
      isHiddenbouteilleGood: true,
      isHiddenbouteilleBad: true,
      isHiddensourisGood: true,
      isHiddensourisBad: true
    })
    const isAdmin = false

    return { players, socket, goodAnswer, pauseGame, hidden, isAdmin }
  })

const store = createPinia()

export default store
  