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

const commitPlayer = (state, data) => state.update("players", players => players.push(createPlayer(data)));




const reducer = (state, action) => {
    switch (action.type) {
    	case "commitPlayer": return commitPlayer(state, action);
        default: return state;
    }
};


export default reducer;