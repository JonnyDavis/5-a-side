import { connect } from "react-redux";
import SubmitPlayer from "../components/SubmitPlayer";
import { commitPlayer } from "../data/actions";

const mapDispatchToProps = dispatch => {
	return {
		// function which dispatches an action 'commitNames' taking 'player' as an argument
		onSubmit: data => dispatch(commitPlayer(data)),
		
	};
};


export default connect(null, mapDispatchToProps)(SubmitPlayer);