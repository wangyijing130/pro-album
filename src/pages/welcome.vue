<template>
    <div>
        <v-header title="welcome">
            <router-link slot="right" v-if="user.id" to="/home">{{user.name}}</router-link>
        </v-header>
        <div class="text-center" v-if="!user.id">
            <router-link to="/login">你还未登录，请先登录</router-link>
        </div>
        <div class="msg" v-if="user.id">
            <img width="50" :src="logo" alt=""> <br>
            哈哈，恭喜你已经入坑 Vue2
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import logo from '../assets/logo.png'
    export default {
        name: 'welcome',
        data() {
            return {
                logo
            }
        },
        computed: mapState({user: state => state.user}),
    }
</script>

<style scoped>
</style>
