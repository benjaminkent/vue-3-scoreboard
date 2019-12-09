<template>
  <div class="sb-container">
    <div class="home-link">
      <router-link to="/">Home</router-link>
    </div>
    <div v-if="!state.addingTeam" class="add-team">
      <button @click="handleAddTeam">Add Team</button>
    </div>
    <form v-else @submit.prevent="handleCreateTeam">
      <label for="teamName">Team Name</label>
      <input
        v-model="state.teamName"
        type="text"
        id="teamName"
        placeholder="Cubs"
      />
      <button type="submit">Create Team</button>
    </form>
    <div class="teams-container">
      <Team v-for="(team, index) in teams" :key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import useTeamService from '@/composables/useTeamService'
import Team from '@/components/Team.vue'

export default createComponent({
  name: 'Scoreboard',
  components: { Team },
  setup() {
    const state = reactive({
      teamName: '',
      addingTeam: false,
    })

    const teamService = useTeamService()

    async function handleCreateTeam() {
      await this.newTeam(state.teamName)
      state.teamName = ''
      state.addingTeam = false
    }

    function handleAddTeam() {
      state.addingTeam = true
    }

    return {
      state,
      handleCreateTeam,
      handleAddTeam,
      teams: teamService.state.teams,
      newTeam: teamService.addTeam,
    }
  },
})
</script>

<style lang="scss" scoped>
.home-link {
  margin: 5px 20px;
}
.teams-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.add-team {
  margin: 20px;
  height: 107px;
  display: flex;
  align-items: center;
  button {
    padding: 10px 16px;
    border: 1px solid $red;
    background-color: $red;
    color: $white;
    font-size: 1rem;
    border-radius: 5px;
  }
}
form {
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 107px;
  input {
    padding: 8px 0;
    text-indent: 5px;
    font-size: 0.8rem;
    margin: 5px 0 10px 0;
    border: 1px solid $light-gray;
    background-color: $light-gray;
  }
  button {
    font-size: 0.8rem;
    padding: 8px 0;
    border: 1px solid $red;
    background-color: $red;
    border-radius: 5px;
    color: $white;
  }
}
</style>
