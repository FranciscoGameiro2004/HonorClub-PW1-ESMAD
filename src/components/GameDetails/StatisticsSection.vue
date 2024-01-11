<template>
    <div>
      <StatisticalItem v-for="information in currentGame.statistics" v-bind:key="information.name" :label="information.name" :home="information.home" :away="information.away"/>
    </div>
  </template>
  
  <script>
import { useGameStore } from '@/stores/games';
  import StatisticalItem from './StatisticalItem.vue';
  export default {
      components: {
        StatisticalItem
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
        
      },
  }
  </script>
  
  <style>
  
  </style>