<script setup>
import { useRoute } from 'vue-router'
import { useMainStore } from '../store/main'
import { inject } from 'vue'

const counter = inject('counter')
const getCard = inject('getCard')

const main = useMainStore()

const route = useRoute()

// function launchGetCard() {
//     const namespace = route.params.id
//     const socket = main.socket
//     socket.emit("launchCAR", namespace)
// }
// function removeCard(event) {
//     const namespace = route.params.id
//     const socket = main.socket
//     socket.emit("removeCard", namespace)
// }
</script>

<template>
    <div class="flex w-full h-2/3 my-10 justify-around gap-5">
        <div class="h-2/3 flex items-center justify-center">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="getCard">Jouer</button>
        </div>
        <div class="border border-black w-2/12 h-2/3 text-[180px] flex items-center justify-center">
            <!-- {{ counter }} -->
            <img class="max-w-fit max-h-fit" src="../assets/1.jpg" alt="">
        </div>
        <div></div>
    </div>
    
</template>