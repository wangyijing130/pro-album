<template>
  <div class="card">
    <div class="card-block p-4">
      <div class="text-white">{{msg}}</div>
      <a class="btn btn-sm bg-green" href="/#/">back</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .text-white {
    border: 1px solid #00cc99;
    background-color: $pink;
  }
</style>
