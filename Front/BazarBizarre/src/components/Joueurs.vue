<script setup>
import { useMainStore } from '../store/main';

const main = useMainStore()

</script>

<template>
    <div class="bg-white w-2/12 h-full">
        <div class="text-center border-b py-2">Joueurs</div>
        <div class="flex justify-between" v-for="item in main.players">
            <div class="ml-2">
                {{ item.pseudo }}
            </div>
            <div class="mr-2">
                {{ item.score }} pts
            </div>
        </div>
    </div>
</template>