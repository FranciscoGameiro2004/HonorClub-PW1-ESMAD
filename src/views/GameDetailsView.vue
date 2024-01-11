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
    <div class="d-flex justify-space-evenly pt-10">
      <TeamButton :teamId="0"/>
      <DetailedResults :gameId="0"/>
      <TeamButton :teamId="1"/>
    </div>
    <SummarySection v-if="section === 0" :gameId="0"/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import DetailedResults from '@/components/GameDetails/DetailedResults.vue';
import SummarySection from '@/components/GameDetails/SummarySection.vue';
import TeamButton from '@/components/GameDetails/TeamButton.vue';
export default {
    components: {
        TeamButton,
        DetailedResults,
        SummarySection,
    },
    data() {
      return {
        section: 0
      }
    },
    computed: {
        // TODO: ADICIONAR STORE DOS JOGOS
        gameId() {
            return this.$route.params.id
        }
    },
}
</script>

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
</style>