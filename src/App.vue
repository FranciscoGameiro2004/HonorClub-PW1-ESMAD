<script>
import { RouterLink, RouterView } from 'vue-router'
import { useGameStore } from './stores/games'
export default{
  data() {
    return {
      gameStore: useGameStore()
    }
  },
  created () {
    try {
      this.gameStore.fetchGames()
    } catch (error) {
      alert(error.message)
    };
  },
}
</script>

<template>
  <RouterView/>
</template>

<style>

</style>