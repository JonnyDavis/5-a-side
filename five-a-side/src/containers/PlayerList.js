import { connect } from "react-redux";
import PlayerList from "../components/PlayerList";

// returns an object (players), which gets passed in as props to the connected component
const mapStateToProps = state => {
	return {
		players: state.get("players"),
		maxPlayers: state.get("maxPlayers"),
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onLoad: () => dispatch(setPlayers)
// 	}
// }


export default connect(mapStateToProps)(PlayerList);