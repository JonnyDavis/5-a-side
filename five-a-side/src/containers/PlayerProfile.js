import { connect } from "react-redux";
import { deletePlayer } from "../data/actions";
import PlayerProfile from "../components/PlayerProfile";

const mapDispatchToProps = (dispatch, { id } ) => {
	return {
		onDelete: () => dispatch(deletePlayer(id)),
	}

}

export default connect(null, mapDispatchToProps)(PlayerProfile);

 // dispatch(deletePlayer(id))