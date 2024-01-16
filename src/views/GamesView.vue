<script>
import { RouterLink, RouterView } from 'vue-router'
import GameCard from '@/components/Global/GameCard.vue';
import { useGameStore } from '@/stores/games';
export default {
  components: {
    GameCard,
  },
  data() {
    return {
      loggedUser: sessionStorage.getItem('loggedUser') || '',
      gameStore: useGameStore(),
    }
  },
  computed: {
    gameId() {
        return this.$route.params.id
      },
      games(){
        return this.gameStore.getGames
      },
  },
  created () {
    this.gameStore.changeCurrentGameId(this.gameId);
  },
  methods: {
  toGameDetails(gameId) {
    this.$router.push({name: 'gameDetails', params: {id: gameId}})
  }
},
}
</script>

<template>
  <div class="navbar">
    <router-link to="/home">
      <div class="logo">
        <img src="../assets/small-elements/logo.png" alt="Logo" />
      </div>
    </router-link>

    <div class="nav-links">
      <router-link to="/games">Jogos</router-link>
      <router-link to="/news">Notícias</router-link>
      <router-link to="/rules">Regras</router-link>
      <router-link to="/quiz">Quiz</router-link>
    </div>

    <div class="image-text">
      <img src="../assets/small-elements/avatar.png" alt="Image"/>
      <p class="loggedUser">Olá, {{ loggedUser }}!</p>
    </div>
  </div>

  <h1 class="title">Jogos</h1>

  <div class="game-cards-container">
    <GameCard v-for="game in games" :key="game.id" @seeGameDetails="toGameDetails"/>
  </div>
</template>

<style scoped>
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

.title {
  display: flex;
  position: absolute;
  top: 10%;
  font-family: 'K2D-ExtraBold', sans-serif;
  font-size: 37px;
}

.game-cards-container {
  display: flex;
  position: absolute;
  top: 30%;
  left: 25%;
}
</style>