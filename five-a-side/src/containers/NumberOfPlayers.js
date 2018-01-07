import { connect } from "react-redux";
import NumberOfPlayers from "../components/NumberOfPlayers";
import { setNumberOfPlayers } from "../data/actions";


const mapStateToProps = state => {
	return {
		maxPlayers: state.get("maxPlayers"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		// function which dispatches an action that will set the maximum number of players, taking data from the form as an argument
		onSubmit: data => dispatch(setNumberOfPlayers(data)),
		
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(NumberOfPlayers);