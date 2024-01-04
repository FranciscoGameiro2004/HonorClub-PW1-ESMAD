<template>
    <div v-if="isHome">
        <label for="">MM' </label>
        <label for=""><b>John Doe </b></label>
        <label for="">ACONTECIMENTO</label>
        <v-btn class="disabled">VER REGRA</v-btn>
        <v-btn>VER COMENTÁRIOS</v-btn>
    </div>
    <div v-else>
        <v-btn>VER COMENTÁRIOS</v-btn>
        <v-btn class="disabled">VER REGRA</v-btn>
        <label for="">ACONTECIMENTO </label>
        <label for=""><b>John Doe </b></label>
        <label for="">MM'</label>
    </div>
</template>

<script>
export default {
    props: {
        isHome: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>

</style>