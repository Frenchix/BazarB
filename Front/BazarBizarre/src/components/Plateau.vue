<script setup>
import Joueurs from './Joueurs.vue';
import Objets from './Objets.vue';
import Cartes from './Cartes.vue';
</script>
<template>
    <div class="bg-cyan-600 h-screen flex justify-center items-center">
        <div class="bg-blue-200 border border-black w-4/5 h-4/5 flex">
            <Joueurs />
            <div class="w-full">
                <Objets />
                <Cartes />
            </div>
        </div>
    </div>
</template>