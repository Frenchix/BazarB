<script setup>
import { inject } from 'vue'
import { useMainStore } from '../store/main'

const main = useMainStore()

const counter = inject('counter')
const getCard = inject('getCard')
const endGame = inject('endGame')
const newGame = inject('newGame')

</script>

<template>
    <div class="flex w-full h-2/3 my-10 justify-around gap-5">
        <div class="h-2/3 flex items-center justify-center">
                <div v-if="main.isAdmin">
                    <button v-if="endGame" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="newGame">Rejouer</button>
                    <button v-else class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="getCard">Jouer</button>
                </div>
        </div>
        <div class="w-2/12 h-2/3 text-[180px] flex items-center justify-center">
            <div v-if="counter >= 0">
                {{ counter }}
            </div>
            <img v-else class="max-w-full max-h-full" :src="`${counter}`" alt="">
        </div>
        <div></div>
    </div>
    
</template>