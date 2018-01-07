import { Map, List } from "immutable";

let lastID = 0;

const createPlayer = ({ playerName }) => {
	// ID increases by one each time
	lastID += 1;

	return Map({
		id: lastID,
		playerName: playerName,
	});
};

const commitPlayer = (state, data) => {
	
	// limits number of players that can be added to 10
	if (state.get("players").size < state.get("maxPlayers")) {
		return state.update("players", players => players.push(createPlayer(data)));
	}
}

const deletePlayer = (state, { id }) => {
	return state.update("players", players => players.filter(( player ) => player.get("id") !== +id));
}

const setNumberOfPlayers = (state, data) => {
	//let playerNumbers = data.get("playerNumbers");
	let numberOfPlayersArr = Object.values(data);
	let numberOfPlayers = numberOfPlayersArr[1];
	return state.update("maxPlayers", maxPlayers => maxPlayers = numberOfPlayers);
}


 const createTeams = ( players, maxPlayers ) => {

	let teamOneSize = 0;
	let teamTwoSize = 0;

	const maxTeamSize = maxPlayers / 2;


	const playersToTeam = players.map(player => {
		
		// generates random number between 1 and 2
		const RandIdGen = Math.floor(Math.random() * 2) + 1;
		
		if (teamOneSize < maxTeamSize && teamTwoSize < maxTeamSize) {
			RandIdGen === 1 ? teamOneSize += 1 : teamTwoSize += 1;
			return player.set('teamID', RandIdGen);
		}

		if (teamOneSize === maxTeamSize) {
			teamTwoSize += 1;
			return player.set('teamID', 2);
		}
		
		if (teamTwoSize === maxTeamSize) {
			teamOneSize += 1;
			return player.set('teamID', 1);
		}
		
		return player;
	});

	const teamOnePlayers = playersToTeam.filter(player => player.get('teamID') === 1);
	const teamTwoPlayers = playersToTeam.filter(player => player.get('teamID') === 2);

		return List([
		teamOnePlayers,
		teamTwoPlayers,
	]);
}

const setTeams = (state) => {

	const teams = createTeams(state.get('players'), state.get('maxPlayers'));

	const teamOnePlayers = teams.find(team => team.find(player => player.get('teamID') === 1));
	const teamTwoPlayers = teams.find(team => team.find(player => player.get('teamID') === 2));

	return state.update('teams', teams => teams.map(team => {

		if(team.get('id') === 1) {
			return team.set('players', teamOnePlayers);
		} else {
			return team.set('players', teamTwoPlayers);
		}

	}));

}




const reducer = (state, action) => {
    switch (action.type) {
    	case "commitPlayer": return commitPlayer(state, action);
    	case "deletePlayer": return deletePlayer(state, action);
    	case "setNumberOfPlayers": return setNumberOfPlayers(state, action);
    	case "setTeams": return setTeams(state);
        default: return state;
    }
};


export default reducer;