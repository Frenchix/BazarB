<script setup>
import Joueurs from './Joueurs.vue';
import Objets from './Objets.vue';
import Cartes from './Cartes.vue';
import Messages from './Messages.vue';
import Hardcore from './hardcore.vue';
import background from '@/assets/background_fantome.jpg'
import { ref } from 'vue'
import { inject } from 'vue'
import { useMainStore } from '../store/main'

const main = useMainStore()

const nbCartesRestantes = inject('nbCartesRestantes')

const url = window.location.href
let copied = ref(false)

function copyClipboard(){
    navigator.clipboard.writeText(url).then(
        () => {
            copied.value = true
            setTimeout(function() {
                copied.value = false
            }, 3000)
        },
        () => {
        /* clipboard write failed */
        }
    );
}

</script>
<template>
    <!-- <div class="bg-cyan-600 h-screen flex justify-center items-center"> -->
    <div class="h-screen flex justify-center items-center" :style="{backgroundImage: `url(${background})`}">
        <div class="bg-blue-200 border border-black w-11/12 h-4/5 flex">
            <Joueurs />
            <div v-if="main.mode == 'classique'" class="w-full relative">
                <Objets />
                <Cartes />
                <div class="absolute bottom-2 left-5">
                    <span id="url" class="border border-black bg-white rounded-xl p-2 mr-2">
                        {{ url }}
                    </span>
                    <div class="relative inline-block">
                        <div v-if="copied" class="bg-white text-lime-500 font-bold py-2 px-4 rounded-2xl w-fit mb-2 absolute left-28 bottom-10">
                            Copié!
                        </div>
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl w-fit" @click="copyClipboard">
                            Donne le lien à un ami
                        </button>
                    </div>
                </div>
                <div class="absolute bottom-5 right-14">
                        Nombre de cartes restantes : {{ nbCartesRestantes }}
                </div>
            </div>
            <div v-else  class="w-full">
                <Hardcore />
            </div>
            <Messages />
        </div>
    </div>
</template>