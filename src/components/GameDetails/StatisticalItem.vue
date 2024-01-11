<template>
    <br>
    <div class="d-flex justify-space-between">
        <h4>{{ home }}</h4>
        <h3>{{label}}</h3>
        <h4>{{ away }}</h4>
    </div>
    <div class="d-flex justify-center">
        <v-progress-linear model-value="20" :height="10"></v-progress-linear>
        <v-progress-linear model-value="20" reverse :height="10"></v-progress-linear>
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
    }
}
</script>

<style>

</style>