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
        placeholder="E.g. Cubs"
      />
      <button type="submit">Create Team</button>
    </form>
    <div class="teams-container">
      <Team
        v-for="(team, index) in teams"
        :key="index"
        :teamInfo="team"
        :index="index"
        @addPoint="add"
        @subtractPoint="subtract"
      />
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
      if (state.teamName === '') return
      await this.newTeam(state.teamName)
      state.teamName = ''
      state.addingTeam = false
    }

    function handleAddTeam() {
      state.addingTeam = true
    }

    function add(index) {
      teamService.state.teams.value[index].score++
    }

    function subtract(index) {
      if (teamService.state.teams.value[index].score <= 0) return
      teamService.state.teams.value[index].score--
    }

    return {
      state,
      handleCreateTeam,
      handleAddTeam,
      add,
      subtract,
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
  justify-content: center;
}
.add-team {
  margin: 20px;
  height: 107px;
  display: flex;
  align-items: center;
  button {
    padding: 10px 16px;
    border: 1px solid $purple;
    background-color: $purple;
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
    border: 1px solid $purple;
    background-color: $purple;
    border-radius: 5px;
    color: $white;
  }
}
</style>
