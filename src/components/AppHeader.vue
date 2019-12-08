<template>
  <header>
    <h1>Vue 3 Scoreboard</h1>
  </header>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
export default createComponent({
  name: 'AppHeader',
  setup() {},
})
</script>

<style lang="scss" scoped>
header {
  padding: 2rem 1rem;
  background-color: #f0c987;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
  }
}
</style>
