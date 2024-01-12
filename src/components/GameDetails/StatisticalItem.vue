<template>
    <br>
    <div class="d-flex justify-space-between">
        <h4>{{ home }}</h4>
        <h3>{{label}}</h3>
        <h4>{{ away }}</h4>
    </div>
    <div class="d-flex justify-center">
        <v-progress-linear :model-value="homeValue*100/total" :height="10"></v-progress-linear>
        <v-progress-linear :model-value="awayValue*100/total" reverse :height="10"></v-progress-linear>
    </div>
</template>

<script>
export default {
    props:{
        label:{
            type: String,
            required: true
        },
        home:{
            type: Number,
            required: true
        },
        away:{
            type: Number,
            required: true
        },
    },
    computed: {
        total() {
            if (this.home + this.away == 0) {
                return 100
            } else {
                return this.home + this.away
            }
        },
        homeValue() {
            if (this.home + this.away == 0) {
                return 50
            } else {
                return this.home
            }
        },
        awayValue() {
            if (this.home + this.away == 0) {
                return 50
            } else {
                return this.away
            }
        }
    },
}
</script>

<style>

</style>