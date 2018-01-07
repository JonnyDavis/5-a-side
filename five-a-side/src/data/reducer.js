import { Map, List } from "immutable";

let lastID = 0;

const createPlayer = ({ playerName }) => {
	// ID increases by one each time, ensures each player has a unique ID
	lastID += 1;

	return Map({
		id: lastID,
		playerName: playerName,
	});
};

const commitPlayer = (state, data) => {
	
	// limits number of players that can be added to the maxPlayers variable set by the user
	if (state.get("players").size < state.get("maxPlayers")) {
		// pushes each new player into the players array stored in the state
		return state.update("players", players => players.push(createPlayer(data)));
	}
}

const deletePlayer = (state, { id }) => {
	// returns every player except the one whos ID has been passed in as an argument
	return state.update("players", players => players.filter(( player ) => player.get("id") !== +id));
}

const setNumberOfPlayers = (state, data) => {
	// turns the values of the data object into an array, taking the value of maxPlayers and setting it equal to the state 
	let numberOfPlayersArr = Object.values(data);
	let numberOfPlayers = numberOfPlayersArr[1];
	return state.update("maxPlayers", maxPlayers => maxPlayers = numberOfPlayers);
}


 const createTeams = ( players, maxPlayers ) => {
 	// variables to track team size
	let teamOneSize = 0;
	let teamTwoSize = 0;

	// setting maxTeamSize to half of the max players
	const maxTeamSize = maxPlayers / 2;

	// mapping over each player and assigning a teamID based on a few conditions
	const playersToTeam = players.map(player => {
		
		// generates random number between 1 and 2 to be used as a TeamID
		const RandIdGen = Math.floor(Math.random() * 2) + 1;
		
		//should neither team be full, the player is assigned a TeamID randomly, based on the random ID generator.
		if (teamOneSize < maxTeamSize && teamTwoSize < maxTeamSize) {
			RandIdGen === 1 ? teamOneSize += 1 : teamTwoSize += 1;
			return player.set('teamID', RandIdGen);
		}

		//ensures that teams are set evenly as should one team be full, the player will be assigned to the other team.
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
	// filters out the players with a team ID of 1 and stores them in a variable, and vice versa
	const teamOnePlayers = playersToTeam.filter(player => player.get('teamID') === 1);
	const teamTwoPlayers = playersToTeam.filter(player => player.get('teamID') === 2);

		return List([
		teamOnePlayers,
		teamTwoPlayers,
	]);
}

const setTeams = (state) => {
	// passes in the necessary data from the state to the createTeams function declared above
	const teams = createTeams(state.get('players'), state.get('maxPlayers'));

	// finds the players with the ID of the correct team and splits them into two variables
	const teamOnePlayers = teams.find(team => team.find(player => player.get('teamID') === 1));
	const teamTwoPlayers = teams.find(team => team.find(player => player.get('teamID') === 2));

	// updates the state of teams with the correct players, using a conditional to check the team ID
	return state.update('teams', teams => teams.map(team => {

		if(team.get('id') === 1) {
			return team.set('players', teamOnePlayers);
		} else {
			return team.set('players', teamTwoPlayers);
		}

	}));

}



// links the functions above to the correct action types so they may be called within the app
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