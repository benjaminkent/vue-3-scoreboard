<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import AppHeader from '@/components/AppHeader'

export default createComponent({
  name: 'App',
  components: { AppHeader },
  setup() {},
})
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
}
body {
  margin: 0;
}
</style>
