<script setup>
import { useRoute } from 'vue-router'
import { useMainStore } from '../store/main'
import { inject } from 'vue'

const counter = inject('counter')

const main = useMainStore()

const route = useRoute()

function removeCard(event) {
    const namespace = route.params.id
    const socket = main.socket
    socket.emit("removeCard", namespace)
}
</script>

<template>
    <div class="flex w-full h-2/3 my-10 justify-center gap-5">
        <div class="border border-black w-2/12 h-2/3 text-[180px] flex items-center justify-center" @click="compteARebourd">
            {{ counter }}
        </div>
    </div>
    
</template>