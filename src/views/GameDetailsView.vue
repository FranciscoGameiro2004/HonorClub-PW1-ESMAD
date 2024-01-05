<template>
    <div>
        <TeamButton :teamId="0"/>
        <DetailedResults :gameId="0"/>
        <TeamButton :teamId="1"/>
    </div>
    <SummarySection :gameId="0"/>
</template>

<script>
import DetailedResults from '@/components/GameDetails/DetailedResults.vue';
import SummarySection from '@/components/GameDetails/SummarySection.vue';
import TeamButton from '@/components/GameDetails/TeamButton.vue';
export default {
    components: {
        TeamButton,
        DetailedResults,
        SummarySection,
    },
    computed: {
        // TODO: ADICIONAR STORE DOS JOGOS
        gameId() {
            return this.$route.params.id
        }
    },
}
</script>

<style>

</style>