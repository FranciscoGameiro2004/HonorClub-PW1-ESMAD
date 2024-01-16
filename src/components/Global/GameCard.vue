<template>
  <div class="game-card" @click="toGameDetails">
  <h3>{{ gameState }}</h3>
  <hr>
  <div class="team-info">
    <div class="team-a">
      <img :src="homeTeam.logo" :alt="homeTeam.name">
      <h4>{{homeTeam.name}}</h4>
    </div>
    <div class="game-details">
      <h2>{{ currentGame.scores.home }} - {{ currentGame.scores.away }}</h2>
      <h4>{{ currentGame.periods.first.home }} - {{ currentGame.periods.first.away }}</h4>
      <h4>{{ currentGame.periods.second.home }} - {{ currentGame.periods.second.away }}</h4>
      <h5>{{date}} às {{hour}}</h5>
    </div>
    <div class="team-b">
      <img :src="awayTeam.logo" :alt="awayTeam.name">
      <h4>{{awayTeam.name}}</h4>
    </div>
  </div>
  </div>
</template>

<script>
import { useGameStore } from '@/stores/games';
export default {
data() {
  return {
    gameStore: useGameStore(),
  }
},
props: {
  gameId: {
    type: Number,
    default: 0
  },
},
computed: {
    currentGame(){
      return this.gameStore.getGame(this.gameId)
    },
    homeTeam(){
      return this.currentGame.teams.home
    },
    awayTeam(){
      return this.currentGame.teams.away
    },
    gameState(){
      if (this.currentGame.status.short == 'NS'){
        return 'Agendado'
      } else if (this.currentGame.status.short == '1H' || this.currentGame.status.short == '2H'){
        return 'AO VIVO'
      } else if (this.currentGame.status.short == 'FT'){
        return 'Terminado'
      }
    },
    date(){
      return `${this.currentGame.date.slice(8,10)}-${this.currentGame.date.slice(5,7)}-${this.currentGame.date.slice(0,4)}`
    },
    hour(){
      return this.currentGame.date.slice(11,16)
    }
},
created () {
  this.gameStore.changeCurrentGameId(this.gameId);
},
methods: {
  toGameDetails() {
    this.$emit('seeGameDetails', this.gameId)
  }
},
}
</script>

<style>
.game-card {
border: 1px solid #2C4130;
padding: 20px;
width: 375px;
margin: 20px auto;
background-color: #D4D6E3;
cursor: pointer;
}

h3 {
margin-bottom: 10px;
}

hr {
border: none;
border-top: 1px solid #2C4130;
margin-bottom: 10px;
}

.team-info {
display: flex;
justify-content: space-between;
align-items: center;
}

.team-a,
.team-b {
width: 30%;
text-align: center;
}

.team-a img,
.team-b img {
max-width: 100px;
}

.game-details {
width: 50%;
text-align: center;
}

.game-details h5 {
margin-top: 10px;
text-align: center;
}
</style>