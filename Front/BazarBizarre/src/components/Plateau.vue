<script setup>
import Joueurs from './Joueurs.vue';
import Objets from './Objets.vue';
import Cartes from './Cartes.vue';
import Messages from './Messages.vue';
</script>
<template>
    <!-- <div class="bg-cyan-600 h-screen flex justify-center items-center"> -->
    <div class="h-screen flex justify-center items-center" style="background-image:linear-gradient(rgba(255, 255, 255, 0), rgba(135, 80, 156, 0)), url('./src/assets/background_fantome.jpg')">
        <div class="bg-blue-200 border border-black w-11/12 h-4/5 flex">
            <Joueurs />
            <div class="w-full">
                <Objets />
                <Cartes />
            </div>
            <Messages />
        </div>
    </div>
</template>