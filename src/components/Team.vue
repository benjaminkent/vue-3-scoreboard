<template>
  <div class="team-container">
    <h2>team name</h2>
    <h2>score</h2>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'Team',
  setup() {},
})
</script>

<style lang="scss" scoped>
.team-container {
  margin: 20px;
}
</style>
