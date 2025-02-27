<script setup>
import { ref, onMounted } from 'vue';

const imageUrl = ref(''); // Guardará la imagen de pixel art

onMounted(() => {
  setTimeout(() => {
    imageUrl.value = '/Scorned-art.png'; // Simula carga
  }, 1000); // Espera 1 segundo antes de mostrar la imagen
});
</script>

<template>
  <div class="pixel-art-container">
    <h2>Pixel Art Preview</h2>
    <img v-if="imageUrl" :src="imageUrl" alt="Pixel Art" class="pixel-art-image" />
    <p v-else>Cargando imagen...</p>
  </div>
</template>

<style scoped>
.pixel-art-container {
  text-align: center;
  padding: 20px;
}

.pixel-art-image {
  width: 200px;
  image-rendering: pixelated; /* Muestra la imagen como pixel art */
  border: 4px solid black;
}
</style>
