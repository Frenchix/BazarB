import { createPinia, defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', {
    state: () => ({
        rooms: ref([]),
      }),
      actions: {
        addRoom(name) {
            this.rooms.push({
                name: name,
                players: []
            });
            console.log(this.rooms);
        },
      },
})

const store = createPinia()

export default store
  