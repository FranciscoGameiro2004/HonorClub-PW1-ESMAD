<template>
    <div class="d-flex justify-start" v-if="isHome">
        <label for="" class="pr-2">{{time}}' </label>
        <label for="" class="pr-2"><b>{{playerName}} </b></label>
        <label for="" class="pr-2">{{momentType}} </label>
        <v-btn class="disabled">VER REGRA</v-btn>
        <v-btn>VER COMENTÁRIOS</v-btn>
    </div>
    <div class="d-flex justify-end" v-else>
        <v-btn>VER COMENTÁRIOS</v-btn>
        <v-btn class="disabled">VER REGRA</v-btn>
        <label for="" class="pl-2"> {{momentType}} </label>
        <label for="" class="pl-2"><b>{{playerName}} </b></label>
        <label for="" class="pl-2">{{ time }}'</label>
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