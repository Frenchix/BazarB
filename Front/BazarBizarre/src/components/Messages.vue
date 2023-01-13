<script setup>
import { inject } from 'vue'

const messages = inject('messages')

</script>

<template>
    <div class="bg-white w-3/12 h-full">
        <div class="text-center border-b py-2">Messages</div>
        <div class="flex justify-center" v-for="item in messages">
            <div class="ml-2">
                {{ item.pseudo }} - <span v-if="item.reponse === 'good'" class="text-green-600">Bonne réponse!</span><span v-else class="text-red-600">Mauvaise réponse!</span>
            </div>
        </div>
    </div>
</template>