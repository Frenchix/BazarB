<script setup>
import { useMainStore } from '../store/main';
import { inject } from 'vue';

const main = useMainStore()
const randomInt = inject("random")

function getCard(){
   randomInt()
}

</script>

<template>
    <div class="bg-white w-2/12 h-full relative">
        <div class="text-center border-b py-2">Joueurs</div>
        <div class="flex justify-between" v-for="item in main.players">
            <div class="ml-2">
                {{ item.pseudo }}
            </div>
            <div class="mr-2">
                {{ item.score }} pts
            </div>
        </div>
        <div v-if="main.isAdmin && main.mode == 'hardcore'" class="absolute bottom-0 w-full">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full" @click="getCard">Jouer</button>
        </div>
    </div>
</template>