<script>
export default {
  name: 'DefaultLayout'
};
</script>

<template>
  <div>
    <header>
      <h1>Mi Proyecto de Vue.js</h1>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/gallery">Galería</router-link>
        <router-link to="/pixel-art">Pixel Art</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>© 2023 Mi Proyecto</p>
    </footer>
  </div>
</template>

<style>
header, footer {
  text-align: center;
  padding: 20px;
  background-color: #181818;
}

main {
  padding: 20px;
}
</style>
