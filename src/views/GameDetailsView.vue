<template>
    <TeamButton/>
    <DetailedResults/>
    <TeamButton/>
    <SummarySection/>
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
}
</script>

<style>

</style>