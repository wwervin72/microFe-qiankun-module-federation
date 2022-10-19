<template>
  <div>
    <div class="qiankunbox" id="qianKunBox3"></div>
    <div class="qiankunbox" id="qianKunBox4"></div>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'
export default {
  name: 'multipleCpt',
  data() {
    return {}
  },
  created() {
    loadMicroApp({
      name: 'test3',
      entry: 'http://localhost:8084/',
      container: '#qianKunBox3',
    })
    loadMicroApp({
      name: 'test4',
      entry: 'http://localhost:8085/',
      container: '#qianKunBox4',
    })
  }
}
</script>

<style>
.qiankunbox {
  width: 200px;
  height: 200px;
}
</style>
