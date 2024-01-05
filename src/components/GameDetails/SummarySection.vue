<template>
  <div>
    <h1>Xª PARTE</h1>
    <!--TODO: Colocar um v-for em cada GameMoment e separar cada parte do jogo-->
    <GameMoment :isHome="true" :momentType="'Conversion'" :playerName="'John Doe'" :time="1"/>
    <GameMoment :isHome="false" :momentType="'Penalty'" :playerName="'John Appleseed'" :time="10"/>
  </div>
</template>

<script>
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
    }
}
</script>

<style>

</style>