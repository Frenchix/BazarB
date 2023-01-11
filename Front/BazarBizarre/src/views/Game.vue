<script setup>
import { onMounted, ref, provide } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Plateau from '../components/Plateau.vue'
import { useMainStore } from '../store/main'
import axios from 'axios'

const main = useMainStore()

const router = useRouter()
const route = useRoute()
let pseudo = ref()
let user = ref(false)
let isHidden = ref(true)
let i = ref()
provide('counter', i)

function compteARebourd(){
    i.value = 3
    const interval = setInterval(() => {
        i.value--
        if (i.value === 0) {
            clearInterval(interval)
        }
    }, 1000)
}

function play(){
    if (!pseudo.value){
        isHidden.value = false
    } else {
        localStorage.setItem("pseudo", pseudo.value)
        user.value = true
        connectToNamespace()
    }
}

async function connectToNamespace() {
    const namespace = route.params.id
    const pseudo = localStorage.getItem('pseudo')
    const response = await axios.get(`http://localhost:3000/checkPseudo?pseudo=${pseudo}&roomName=${namespace}`)
    localStorage.setItem('pseudo', response.data) 
    const socket = io(`http://localhost:3000/${namespace}`)
    main.socket = socket
    socket.on("connect", () => {
        console.log("connect")
        localStorage.setItem('id', socket.id)
    })
    socket.on("connect_error", () => {
        router.replace('/')
    })
    socket.emit("newUser", namespace, localStorage.getItem('pseudo'))
    socket.on("newUser", (data) => {
        main.players = data
    })
    socket.on("launchCAR", () => {
        compteARebourd()
    })
}

onMounted(() =>{
    if (localStorage.getItem('pseudo')) {
        user.value = true
        connectToNamespace()
    }
})
</script>

<template>
    <div v-if="user">
       <Plateau />
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
