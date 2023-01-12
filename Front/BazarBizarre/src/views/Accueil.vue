<template>
    <div class="flex flex-col items-center h-screen bg-stone-600" style="background-image:linear-gradient(rgba(10, 80, 156, 0.5), rgba(135, 80, 156, 0.9)), url('./src/assets/background.jpg')">
        <div class="text-center m-10 text-white text-xl">
            Bienvenue sur le Bazar Bizarre Online!!
        </div>
        <div class="text-center m-3 text-white">
            Pseudo : 
            <input v-model="pseudo" class="border border-black text-black p-1">
        </div>
        <p class="text-red-600 text-center mb-2" :class="{hidden: isHidden}">Renseigner un pseudo</p>
        <button @click="newSalon" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit">Créer un nouveau salon</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const pseudo = ref()
let isHidden = ref(true)

function newSalon(){
    if (!pseudo.value){
        isHidden.value = false
    } else {
        localStorage.setItem("pseudo", pseudo.value)
        axios
            .get(`${import.meta.env.VITE_HOST_API}/newNamespace`)
            .then(response => {
                router.replace(response.data)
            })
    }
}
</script>