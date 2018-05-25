<style lang="scss" scoped>
    .button {
        background-color: $theme;
        text-align: center;
        border: 1px solid $theme;
        width: 3.75rem;
        height: 3.75rem;
        // line-height: 10rem;
        border-radius: 50%;
        color: white;
    }
</style>
<template>
    <button type="btn button" class="button" v-on:click="$emit('click')">
        {{title}}
    </button>
</template>
<script>
    export default {
        name: 'button-radius',
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>