<template>
  <div v-if="firstPeriodSummary.length != 0">
    <h1>1ª PARTE</h1>
    <!--TODO: Colocar um v-for em cada GameMoment e separar cada parte do jogo-->
    <GameMoment v-for="moment in firstPeriodSummary" :key="moment.minute" :isHome="moment.homeTeam" :momentType="moment.type" :playerName="moment.player" :time="moment.minute"/>
  </div>
  <div class="pt-6" v-if="secondPeriodSummary.length != 0">
    <h1>2ª PARTE</h1>
    <!--TODO: Colocar um v-for em cada GameMoment e separar cada parte do jogo-->
    <GameMoment  v-for="moment in secondPeriodSummary" :key="moment.minute" :isHome="moment.homeTeam" :momentType="moment.type" :playerName="moment.player" :time="moment.minute"/>
  </div>
</template>

<script>
import { useGameStore } from '@/stores/games'
import GameMoment from './GameMoment.vue'
export default {
    components: {
        GameMoment,
    },
    props:{
      gameId:{
        type: Number,
        required: true
      }
    },
    data() {
      return {
        gameStore: useGameStore()
      }
    },
    computed: {
      currentGame() {
            return this.gameStore.getGame(this.gameId)
      },
      firstPeriodSummary(){
        return this.currentGame.summary.filter(moment => moment.period == 'first')
      },
      secondPeriodSummary(){
        return this.currentGame.summary.filter(moment => moment.period == 'second')
      }
    },
}
</script>

<style>

</style>