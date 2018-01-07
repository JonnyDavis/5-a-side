import { connect } from "react-redux";
import SubmitPlayer from "../components/SubmitPlayer";
import { commitPlayer } from "../data/actions";

const mapStateToProps = state => {
	return {
		players: state.get("players"),
		maxPlayers: state.get("maxPlayers"),
	}
}

const mapDispatchToProps = dispatch => {
	return {
		// function which dispatches an action 'commitNames' taking 'player' as an argument
		onSubmit: data => dispatch(commitPlayer(data)),
		
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(SubmitPlayer);