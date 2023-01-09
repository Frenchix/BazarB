<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()
const route = useRoute()

const players = inject(route.params.id)

</script>

<template>
    <div class="bg-white w-2/12 h-full">
        <div class="text-center border-b py-2">Joueurs</div>
        <div v-for="item in players">{{ item.pseudo }}</div>
    </div>
</template>