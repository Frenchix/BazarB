<script setup>
import { inject } from 'vue'
import { useMainStore } from '../store/main'

const main = useMainStore()

const messages = inject('messages')

function changeMode(){
    if(main.mode == 'classique'){
        main.mode = 'hardcore'
    } else {
        main.mode = 'classique'
    }
}

</script>

<template>
    <div class="relative bg-white w-3/12 h-full">
        <div class="text-center border-b py-2">Messages</div>
        <div class="flex justify-center" v-for="item in messages">
            <div class="ml-2">
                {{ item.pseudo }} - <span v-if="item.reponse === 'good'" class="text-green-600">Bonne réponse!</span><span v-else class="text-red-600">Mauvaise réponse!</span>
            </div>
        </div>
        <div v-if="main.isAdmin" class="absolute bottom-0 w-full">
            <button class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 w-full" @click="changeMode">Mode {{ main.mode == 'classique' ? 'Hardcore' : 'Classique' }}</button>
        </div>
    </div>
</template>