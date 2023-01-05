<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
let pseudo = ref()
let user = ref(false)
let isHidden = ref(true)

function play(){
    if (!pseudo.value){
        isHidden.value = false
    } else {
        localStorage.setItem("pseudo", pseudo.value)
        user.value = true
    }
}

onMounted(() =>{
    if (localStorage.getItem('pseudo')) {
        user.value = true
        const namespace = route.params.id
        const socket = io(`http://localhost:3000/${namespace}`);
        socket.on("connect_error", () => {
            router.replace('/')
        })
    }
})
</script>

<template>
    <div v-if="user">
       GAME
    </div>
    <div v-else>
        <div class="flex flex-col items-center h-screen bg-stone-600" style="background-image:linear-gradient(rgba(10, 80, 156, 0.5), rgba(135, 80, 156, 0.9)), url('./src/assets/background.jpg')">
        <div class="text-center m-10 text-white text-xl">
            Bienvenue sur le Bazar Bizarre Online!!
        </div>
        <div class="text-center m-3 text-white">
            Pseudo : 
            <input v-model="pseudo" class="border border-black text-black p-1">
        </div>
        <p class="text-red-600 text-center mb-2" :class="{hidden: isHidden}">Renseigner un pseudo</p>
        <button @click="play" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-fit">Jouer</button>
    </div>
    </div>
</template>
