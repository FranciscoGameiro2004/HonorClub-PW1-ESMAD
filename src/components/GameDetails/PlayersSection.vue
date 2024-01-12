<template>
    <div>
      <h1>Equipa Inicial</h1>
      <PlayersItem v-for="(playersDuo, index) in startingLineups" :homePlayer="playersDuo[0]" :awayPlayer="playersDuo[1]" :key="index"/>
      <h1>Suplentes</h1>
      <PlayersItem v-for="(playersDuo, index) in substituteLineups" :homePlayer="playersDuo[0]" :awayPlayer="playersDuo[1]" :key="index"/>
    </div>
  </template>
  
  <script>
  import { useGameStore } from '@/stores/games';
  import PlayersItem from './PlayersItem.vue';
  export default {
      components: {
        PlayersItem
      },
      props:{
        gameId:{
          type: Number,
          required: true
        }
      },
      data() {
        return {
          gameStore: useGameStore(),
        }
      },
      computed: {
        currentGame() {
          return this.gameStore.getGame(this.gameId)
        },
        startingLineups(){
          return this.doStartingPlayers();
        },
        substituteLineups(){
          return this.doSubstitutePlayers();
        }
      },
      methods: {
        doStartingPlayers() {
          let startLineup = []
          const homeLen = this.currentGame.teams.home.lineups.starting.length
          const awayLen = this.currentGame.teams.away.lineups.starting.length
          let lim = 0
          if (homeLen > awayLen) {
            lim = homeLen
          } else {
            lim = awayLen
          }

          for (let i=0; i<lim; i++){
            let homePlayer = {}
            let awayPlayer = {}
            try {
              homePlayer = this.currentGame.teams.home.lineups.starting[i]
            } catch (error) {
              homePlayer = undefined
            }
            try {
              awayPlayer = this.currentGame.teams.away.lineups.starting[i]
            } catch (error) {
              awayPlayer = undefined
            }
            startLineup.push([homePlayer, awayPlayer])
          }

          return startLineup
        },
        doSubstitutePlayers() {
          let substituteLineup = []
          const homeLen = this.currentGame.teams.home.lineups.substitutes.length
          const awayLen = this.currentGame.teams.away.lineups.substitutes.length
          let lim = 0
          if (homeLen > awayLen) {
            lim = homeLen
          } else {
            lim = awayLen
          }

          for (let i=0; i<lim; i++){
            let homePlayer = {}
            let awayPlayer = {}
            try {
              homePlayer = this.currentGame.teams.home.lineups.substitutes[i]
            } catch (error) {
              homePlayer = undefined
            }
            try {
              awayPlayer = this.currentGame.teams.away.lineups.substitutes[i]
            } catch (error) {
              awayPlayer = undefined
            }
            substituteLineup.push([homePlayer, awayPlayer])
          }

          return substituteLineup
        },
      },
  }
  </script>
  
  <style>
  
  </style>