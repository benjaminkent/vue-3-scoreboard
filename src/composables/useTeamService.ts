import { reactive, toRefs } from '@vue/composition-api'

interface Team {
  name: string
  score: number
}

const addTeam = state => (teamName: string) => {
  const team = { name: teamName, score: 0 }
  state.teams.value.push(team)
}

export default function useTeamService() {
  const state = toRefs(
    reactive({
      teams: [] as Team[],
    })
  )

  return {
    state,
    addTeam: addTeam(state),
  }
}
