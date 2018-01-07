import { connect } from "react-redux";
import PlayerList from "../components/PlayerList";

// returns two objects (players, maxPlayers), which gets passed in as props to the connected component
const mapStateToProps = state => {
	return {
		players: state.get("players"),
		maxPlayers: state.get("maxPlayers"),
	};
};




export default connect(mapStateToProps)(PlayerList);