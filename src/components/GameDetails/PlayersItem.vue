<template>
  <div class="d-flex justify-space-around">
    <div class="d-flex" :style="`visibility: ${isHome ? 'visible' : 'hidden'};`">
        <img src="https://placehold.co/70" style="height: 70px;" alt="">
        <div class="ps-6">
            <h2>{{homePlayer.name}}</h2>
            <h4>{{homePlayer.position}}</h4>
        </div>
    </div>
    <div class="d-flex" :style="`visibility: ${isAway ? 'visible' : 'hidden'};`">
        <div class="pe-6 text-end" >
            <h2>{{awayPlayer.name}}</h2>
            <h4>{{awayPlayer.position}}</h4>
        </div>
        <img src="https://placehold.co/70" style="height: 70px;" alt="">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            home: true,
            away: true
        }
    },
    props:{
        homePlayer:{
            type:Object,
            required:false,
            default: undefined
        },
        awayPlayer:{
            type:Object,
            required:false,
            default: undefined
        }
    },
    computed: {
        isHome() {
            return this.homePlayer != undefined && this.homePlayer != null
        },
        isAway() {
            return this.awayPlayer != undefined && this.awayPlayer != null
        },
    },
}
</script>

<style>

</style>