<template>
  <div class="text-center">
    <h3>ESTADO</h3>
    <div v-if="showPontuation">
      <h2>NN - NN</h2>
      <h4 v-if="showFirstPoints">NN - NN</h4>
      <h4 v-if="showSecondPoints">NN - NN</h4>
    </div>
    <div v-else>
      <h2>-</h2>
    </div>
    <h5>DD-MM-AAAA às HH:MM</h5>
    <h5>LOCAL</h5>
  </div>
</template>

<script>
export default {
  props:{
    gameId:{
      type: Number,
      required: true
    }
  },
  // TODO: ADICIONAR v-data RELACIONADOS A CADA INFORMAÇÃO NECESSÁRIA
  data() {
    return {
      showPontuation: true,
      showFirstPoints: true,
      showSecondPoints: true,
    }
  },
}
</script>

<style>
  
</style>