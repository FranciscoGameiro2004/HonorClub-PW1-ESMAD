<template>
  <div class="text-center">
    <h3>{{gameState}}</h3>
    <div v-if="showPontuation">
      <h2>{{ currentGame.scores.home }} - {{ currentGame.scores.away }}</h2>
      <h4 v-if="showFirstPoints">{{ currentGame.periods.first.home }} - {{ currentGame.periods.first.away }}</h4>
      <h4 v-if="showSecondPoints">{{ currentGame.periods.second.home }} - {{ currentGame.periods.second.away }}</h4>
    </div>
    <div v-else>
      <h2>-</h2>
    </div>
    <h5>{{date}} às {{hour}}</h5>
    <h3 v-if="minuteTime<80">{{ minuteTime }}'</h3>
  </div>
</template>

<script>
import { useGameStore } from '@/stores/games'
export default {
  props:{
    gameId:{
      type: Number,
      required: true
    },
    minuteTime:{
      type:Number,
      required:true
    }
  },
  // TODO: ADICIONAR v-data RELACIONADOS A CADA INFORMAÇÃO NECESSÁRIA
  data() {
    return {
      gameStore: useGameStore()
    }
  },
  computed: {
    currentGame() {
      return this.gameStore.getGame(this.gameId)
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
    showPontuation(){
      return this.currentGame.status.short != 'NS'
    },
    showFirstPoints(){
      return this.currentGame.status.short == '2H' || this.currentGame.status.short == 'FT'
    },
    showSecondPoints(){
      return this.currentGame.status.short == '2H' || this.currentGame.status.short == 'FT'
    },
    date(){
      return `${this.currentGame.date.slice(8,10)}-${this.currentGame.date.slice(5,7)}-${this.currentGame.date.slice(0,4)}`
    },
    hour(){
      return this.currentGame.date.slice(11,16)
    }
  },
}
</script>

<style>
  
</style>