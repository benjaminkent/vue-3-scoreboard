<template>
  <div class="team-container">
    <h2 class="team-name">{{ teamInfo.name }}</h2>
    <h2 class="score">{{ teamInfo.score }}</h2>
    <div class="buttons">
      <button @click="handleAddPoint(index)" class="add">+</button>
      <button @click="handleSubtractPoint(index)" class="subtract">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'Team',
  props: {
    teamInfo: Object,
    index: Number,
  },
  setup() {
    return {
      handleAddPoint(index: number) {
        this.$emit('addPoint', index)
      },
      handleSubtractPoint(index: number) {
        this.$emit('subtractPoint', index)
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.team-container {
  margin: 20px;
  box-shadow: 0 2px 5px 2px $light-gray;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .team-name {
    margin: 0;
  }
  .score {
    font-weight: normal;
  }
  .buttons {
    width: 5.5rem;
    display: flex;
    justify-content: space-between;
    button {
      font-size: 1.5rem;
      border-radius: 5px;
      height: 2.5rem;
      width: 2.5rem;
      color: $white;
    }
    .add {
      border: 1px solid $green;
      background-color: $green;
    }
    .subtract {
      border: 1px solid $red;
      background-color: $red;
    }
  }
}
</style>
