<script>
import { RouterLink, RouterView } from 'vue-router'
import GameCard from '@/components/Global/GameCard.vue';
export default {
  components: {
    GameCard,
  }
}
</script>

<template>
  <div class="navbar">
    <router-link to="/">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
    </router-link>

    <div class="nav-links">
      <router-link to="/games">Jogos</router-link>
      <router-link to="/news">Notícias</router-link>
      <router-link to="/rules">Regras</router-link>
    </div>

    <div class="image-text">
      <img src="../assets/avatar.png" alt="Image"/>
      <p class="loggedUser">Olá, {{ loggedUser }}!</p>
    </div>
  </div>

  <div class="button-container">
    <router-link to="/games" class="btn" :class="{ 'active': $route.path === '/games'}">Jogos</router-link>
    <router-link to="/games" class="btn" :class="{ 'active': $route.path === '/standings' }">Classificação</router-link>
  </div>

  <div class="game-cards-container">
    <div v-for="index in 5" :key="index">
      <GameCard/>
    </div>
  </div>
</template>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C4130;
  color: #D4D6E3;
}

.logo img {
  max-width: 140px;
  height: auto;
  margin-left: 25px;
  margin-top: 5px;
}

.nav-links {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  color: #D4D6E3;
}

.nav-links a {
  margin: 0 10px;
  color: #D4D6E3;
}

.image-text {
  display: flex;
  align-items: center;
  color: #D4D6E3;
}

.image-text img {
  max-width: 30px;
  margin-right: 7px;
}

.loggedUser {
  white-space: nowrap;
  margin-right: 60px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 70px;
  left: 52%;
  transform: translateX(-50%);
}

.btn {
  padding: 10px 20px;
  margin: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #2C4130;
  color: #D4D6E3;
  cursor: pointer;
}

.active {
  background-color: #623504 !important;
}

.btn:not(.active) {
  background-color: transparent !important;
  color: #2C4130;
}

/*Ainda falta estilizar aqui! */
.game-cards-container {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-7%);
  gap: 10px;
}
</style>