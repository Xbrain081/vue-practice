<script setup lang="ts"></script>

<template>
  <div class="Gallery">
    <h1>in this page show images</h1>
    <img src="/vuegif.gif" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .Gallery {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
