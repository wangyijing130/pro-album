<template>
    <div>
        <v-header title="登录">
            <router-link slot="left" to="/">返回</router-link>
        </v-header>
        <form class="login" v-on:submit.prevent="submit">
            <div class="line">
                <div v-show="btn && !form.id">id 不能为空</div>
                <input type="number" placeholder="输入你的 id" v-model="form.id">
            </div>
            <div class="line">
                <div v-show="btn && !form.name">用户名不能为空</div>
                <input type="text" placeholder="输入你的用户名" v-model="form.name">
            </div>
            <v-button-radius title="登录"></v-button-radius>
        </form>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
    import {USER_SIGNIN} from '../store/user'

    export default {
        name: 'Login',
        data() {
            return {
                btn: false, //true 已经提交过， false 没有提交过
                form: {
                    id: '',
                    name: ''
                }
            }
        },
        methods: {
            ...mapActions([USER_SIGNIN]),
            submit() {
                this.btn = true
                if (!this.form.id || !this.form.name) return
                this.USER_SIGNIN(this.form)
                this.$router.replace({path: '/home'})
            }
        }
    }
</script>
<style lang="scss" scoped>
    .login {
        padding: 50px;
        text-align: center;
        .line {
            padding: 5px;
            input {
                padding: 0 10px;
                line-height: 28px;
            }
        }
    }
</style>