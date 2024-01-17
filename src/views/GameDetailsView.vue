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

    <div class="nav-right" @click="logout">
      <img src="../assets/small-elements/avatar.png" alt="Image"/>
      <p class="loggedUser">Olá, {{ loggedUser }}!</p>
    </div>
  </div>
    <div class="d-flex justify-space-evenly pt-10">
      <TeamButton :gameId="gameId" :home="true"/>
      <DetailedResults :gameId="gameId" :minuteTime="minuteTime"/>
      <TeamButton :gameId="gameId" :home="false"/>
    </div>
    <div class="d-flex justify-center my-2">
      <v-btn :color="colorSummary" class="ms-4 elevation-0" @click="changeSection(0)">Resumo</v-btn>
      <v-btn :color="colorStatistics" class="ms-4 elevation-0" @click="changeSection(1)">Estatísticas</v-btn>
      <v-btn :color="colorPlayers" class="ms-4 elevation-0" @click="changeSection(2)">Jogadores</v-btn>
    </div>
    <SummarySection v-if="section === 0" :gameId="gameId" :minuteTime="minuteTime"/>
    <StatisticsSection v-else-if="section === 1" :gameId="gameId"/>
    <PlayersSection v-else-if="section === 2" :gameId="gameId"/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import DetailedResults from '@/components/GameDetails/DetailedResults.vue';
import SummarySection from '@/components/GameDetails/SummarySection.vue';
import StatisticsSection from '@/components/GameDetails/StatisticsSection.vue';
import TeamButton from '@/components/GameDetails/TeamButton.vue';
import { useGameStore } from '@/stores/games';
import PlayersSection from '@/components/GameDetails/PlayersSection.vue';
export default {
    components: {
        TeamButton,
        DetailedResults,
        SummarySection,
        StatisticsSection,
        PlayersSection,
    },
    data() {
      return {
        section: 0,
        gameStore: useGameStore(),
        loggedUser: sessionStorage.getItem('loggedUser') || '',
        minuteTime: 0,
      }
    },
    computed: {
        // TODO: ADICIONAR STORE DOS JOGOS
        gameId() {
            return this.$route.params.id
        },
        currentGame(){
          return this.gameStore.getGame(this.gameId)
        },
        colorSummary(){
          return this.section == 0 ? '#623504' : 'rgba(0,0,0,0)'
        },
        colorStatistics(){
          return this.section == 1 ? '#623504' : 'rgba(0,0,0,0)'
        },
        colorPlayers(){
          return this.section == 2 ? '#623504' : 'rgba(0,0,0,0)'
        },
    },
    methods: {
      changeSection(newSection) {
        this.section = newSection
      },
      logout() {
        alert('Logging out...');
        this.$router.push('/');
        sessionStorage.removeItem('loggedUser')
      },
    },
    created () {
      this.gameStore.changeCurrentGameId(this.gameId);
      setInterval(() => {
          this.minuteTime += 1
      }, 1000);
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

.nav-right {
  display: flex;
  align-items: center;
  color: #D4D6E3;
}

.nav-right:hover {
  text-decoration: underline;
}

.nav-right img {
  max-width: 30px;
  margin-right: 7px;
}

.loggedUser {
  white-space: nowrap;
  margin-right: 60px;
}
</style>