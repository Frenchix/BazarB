<script setup>
import { onMounted, ref, provide, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Plateau from '../components/Plateau.vue'
import { useMainStore } from '../store/main'
import axios from 'axios'

const main = useMainStore()
const { hidden } = main

const router = useRouter()
const route = useRoute()
let pseudo = ref()
let user = ref(false)
let isHidden = ref(true)
let i = ref()
let messages = ref([])
let endGame = ref(false)
let nbCartesRestantes = ref(60)
let object = reactive({ sourisx: 0, fantomex: 0, bouteillex: 0, livrex: 0, canapex: 0, cartex: 0, sourisy: 0, fantomey: 0, bouteilley: 0, livrey: 0, canapey: 0, cartey: 0})

provide("object", object)
provide("random", getRandomInt)
provide('counter', i)
provide('getCard', getCard)
provide('messages', messages)
provide('endGame', endGame)
provide('newGame', newGame)
provide('nbCartesRestantes', nbCartesRestantes)

function getRandomInt() {
    const container = document.getElementById('container')
    container.style.setProperty('--cursorH', 0 + 'em')
    const maxHeigth = Math.floor((container.offsetHeight * 2) / 12)
    const maxWidth = Math.floor(container.offsetWidth / 12)
    const coordonnees = []
    const vh = container.offsetHeight - maxHeigth
    const vw = container.offsetWidth - maxWidth
    for (let i = 0; i < 6; i++){
        let same = true
        let x = 0
        let y = 0
        while (same) {
            let a = 0
            x = Math.floor(Math.random() * vw)
            y = Math.floor(Math.random() * vh)
            coordonnees.forEach(element => {
                if ((x > (element[0] - maxWidth)) && (x < (element[0] + maxWidth + 1)) && (y > (element[1] - maxHeigth)) && (y < (element[1] + maxHeigth + 1))){
                    a = 1
                }
            })
            if (a == 0){
                same = false
            }
        }
        coordonnees.push([x, y])
    }
    object.cartey = coordonnees[0][1]
    object.cartex = coordonnees[0][0]
    object.canapey = coordonnees[1][1]
    object.canapex = coordonnees[1][0]
    object.fantomey = coordonnees[2][1]
    object.fantomex = coordonnees[2][0]
    object.livrey = coordonnees[3][1]
    object.livrex = coordonnees[3][0]
    object.sourisy = coordonnees[4][1]
    object.sourisx = coordonnees[4][0]
    object.bouteilley = coordonnees[5][1]
    object.bouteillex = coordonnees[5][0]
}


async function newGame() {
    endGame.value = false
    nbCartesRestantes.value = 60
    const namespace = route.params.id
    const response = await axios.get(`${import.meta.env.VITE_HOST_API}/newGame?roomName=${namespace}`)
}

function compteARebourd(card){
    if (main.mode == 'hardcore'){
        const container = document.getElementById('container')
        container.style.setProperty('--dark', 1)
    }
    i.value = 3
    const interval = setInterval(() => {
        i.value--
        if (i.value === 0) {
            if(main.mode == 'hardcore'){
                const container = document.getElementById('container')
                container.style.setProperty('--cursorH', 5 + 'em')
            }
            clearInterval(interval)
            i.value = card
            main.pauseGame = false
        }
    }, 1000)
}

async function getCard() {
    main.pauseGame = true
    const namespace = route.params.id
    const response = await axios.get(`${import.meta.env.VITE_HOST_API}/getCard?roomName=${namespace}`)
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
    const response = await axios.get(`${import.meta.env.VITE_HOST_API}/checkPseudo?pseudo=${pseudo}&roomName=${namespace}`)
    localStorage.setItem('pseudo', response.data) 
    const socket = io(`${import.meta.env.VITE_HOST}/${namespace}`, { transports: ["websocket"] })
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
    socket.on("getCard", (card, nb) => {
        if (main.mode == 'hardcore'){
            getRandomInt()
        }
        for (const item in hidden){
            hidden[item] = true
        }
        messages.value = []
        nbCartesRestantes.value = nb
        if(card === 'Fin') {
            endGame.value = true
        } else {
            main.goodAnswer = card.goodAnswer
            compteARebourd(card.name)
        }
    })
    socket.on("messages", (pseudo) => {
        messages.value.push(pseudo)
    })
    socket.on("newGame", (players) => {
        main.players = players
    })
    socket.on("pauseGame", () => {
        main.pauseGame = true
        if (main.mode == 'hardcore'){
            const container = document.getElementById('container')
            container.style.setProperty('--dark', 0)
        }
    })
    socket.on("changeMode", (mode) => {
        main.mode = mode
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
