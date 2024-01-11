<template>
    <br>
  <h3>{{label}}</h3>
  <h4>{{ home }} - {{ away }}</h4>
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