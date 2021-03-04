<template>
  <div id="app">

    <h1> Let's go somewhere !</h1>
    <router-view></router-view>

    <ul>
      <li><router-link to= '/'>Home</router-link></li>
      <li><router-link to='/users'>Users</router-link></li>
      <li><router-link to='/users/10'>Users 10</router-link></li>
      <li><router-link to='/users/12'>Users 12</router-link></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
