import { connect } from "react-redux";
import { deletePlayer } from "../data/actions";
import PlayerProfile from "../components/PlayerProfile";

const mapDispatchToProps = (dispatch, { id } ) => {
	return {
		// dispatching an action for deleting individual players, taking player ID as an argument
		onDelete: () => dispatch(deletePlayer(id)),
	};

};

export default connect(null, mapDispatchToProps)(PlayerProfile);
