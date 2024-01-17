<template>
    <div class="text-center">
        <img :src="`../${team.logo}`" :alt="team.name" style="height: 100px;">
        <h2>{{team.name}}</h2>
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
        home:{
            type: Boolean,
            required: true
        },
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
        team(){
            if (this.home){
                return this.currentGame.teams.home
            } else {
                return this.currentGame.teams.away
            }
        }
    },
}
</script>

<style>

</style>