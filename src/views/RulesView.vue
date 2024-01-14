<template>
    <div class="navbar">
  <router-link to="/home">
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
  </router-link>

    <div class="nav-links">
      <router-link to="/games">Jogos</router-link>
      <router-link to="/news">Notícias</router-link>
      <router-link to="/rules">Regras</router-link>
      <router-link to="/quiz">Quiz</router-link>
    </div>

    <div class="image-text">
      <img src="../assets/avatar.png" alt="Image"/>
      <p class="loggedUser">Olá, {{ loggedUser }}!</p>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
    export default {
        data() {
            return {
                loggedUser: sessionStorage.getItem('loggedUser') || '',
            }
        },
    }
</script>

<style scoped>

</style>