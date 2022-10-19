<template>
  <div id="app">
    <router-link class="link" to="/home">home</router-link>
    <router-link class="link" to="/test1">test1</router-link>
    <router-link class="link" to="/test2">test2</router-link>
    <router-link class="link" to="/multiple">multiple</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.qiankunbox {
  width: 200px;
  height: 200px;
}
.link {
  margin-right: 15px;
}
</style>
