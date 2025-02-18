<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Esta plataforma demostrativa fue creada con Vue.js para explorar las capacidades del framework
      en el desarrollo de interfaces modernas y reactivas. El proyecto integra componentes
      dinámicos, gestión de estado con Pinia, enrutamiento mediante Vue Router y consumo de APIs
      externas. Diseñada como un ejemplo educativo, incluye funcionalidades CRUD, filtros
      personalizados y un diseño adaptable que prioriza la experiencia de usuario. El código utiliza
      Vue 3 con Composition API, TypeScript y herramientas como Vite para optimizar el rendimiento.
      ¡Bienvenido/a a este espacio de práctica donde la tecnología se combina con usabilidad!
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
