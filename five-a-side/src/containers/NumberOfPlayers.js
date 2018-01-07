import { connect } from "react-redux";
import NumberOfPlayers from "../components/NumberOfPlayers";
import { setNumberOfPlayers } from "../data/actions";

const mapDispatchToProps = dispatch => {
	return {
		// function which dispatches an action 'commitNames' taking 'player' as an argument
		onSubmit: data => dispatch(setNumberOfPlayers(data)),
		
	};
};


export default connect(null, mapDispatchToProps)(NumberOfPlayers);