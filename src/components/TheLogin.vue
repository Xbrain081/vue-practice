<script setup lang="ts">
import { ref } from 'vue'
const email = ref('email')
const password = ref('password')

const handleSubmit = () => {
  // Aquí iría la lógica para manejar el login
  alert('Formulario enviado')
}
</script>

<template>
  <div class="login">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Ingresar</button>
    </form>
    <p>¿No tienes cuenta? <RouterLink to="/register">Regístrate aquí</RouterLink></p>
  </div>
</template>

<style>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-text);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--color-primary-hover);
}

@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
