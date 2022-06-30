<template>
  <div id="app">
    test1
    <btn label="mf test"></btn>
    <mfcontent></mfcontent>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    btn: () => import('mf/Btn'),
    mfcontent: () => import('mf/Content'),
  },
  data() {
    return {
      lottieAnimationItem: null
    }
  },
}
</script>

<style>
</style>
