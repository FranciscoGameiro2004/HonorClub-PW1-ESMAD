<template>
    <div v-if="isHome">
        <label for="">{{time}}' </label>
        <label for=""><b>{{playerName}} </b></label>
        <label for="">{{momentType}} </label>
        <v-btn class="disabled">VER REGRA</v-btn>
        <v-btn>VER COMENTÁRIOS</v-btn>
    </div>
    <div v-else>
        <v-btn>VER COMENTÁRIOS</v-btn>
        <v-btn class="disabled">VER REGRA</v-btn>
        <label for=""> {{momentType}} </label>
        <label for=""><b>{{playerName}} </b></label>
        <label for="">{{ time }}'</label>
    </div>
</template>

<script>
export default {
    props: {
        isHome: {
            type: Boolean,
            default: true,
            required: true
        },
        time: {
            type: Number,
            default: 1,
            required: true
        },
        playerName: {
            type: String,
            default: 'John Doe',
            required: true
        },
        momentType: {
            type: String,
            default: 'Try',
            required: true
        }
    }
}
</script>

<style>

</style>