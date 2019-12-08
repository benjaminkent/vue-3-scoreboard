<template>
  <header>
    <h1>Vue 3 Scoreboard</h1>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppHeader',
  setup() {},
})
</script>

<style lang="scss" scoped>
header {
  padding: 2rem 1rem;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
  }
}
</style>
