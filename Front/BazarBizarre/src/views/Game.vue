<template>
    <div>
       GAME
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

onMounted(() =>{
    const namespace = route.params.id
    const socket = io(`http://localhost:3000/${namespace}`);
    socket.on("connect_error", () => {
        router.replace('/')
    })
    // socket.on("disconnect", (reason) => {
    //     console.log(reason)
    // });
})
</script>