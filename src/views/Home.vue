<template>
  <div class="home">
    <nav>
      <ul>
        <li>
          <router-link to="scoreboard">Scoreboard</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'Home',
  setup() {},
})
</script>

<style lang="scss" scoped>
nav {
  ul {
    list-style-type: none;
    margin: 20px;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      padding: 0.5rem 0;
      a {
        color: #db4c40;
      }
    }
  }
}
</style>
