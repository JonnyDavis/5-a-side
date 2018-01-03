// action creators: simple functions that return ready made actions that can then be called in containers. (means that you can avoid retyping them elsewhere in your code).

export const commitPlayer = ({ playerName }) => {
	return {
		type: "commitPlayer",
		playerName: playerName,
	}
}

export const setTeams = teams => {
	return {
		type: "setTeams",
		teams: teams,
	}
}