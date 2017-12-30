import { connect } from "react-redux";
import PlayerProfile from "../components/PlayerProfile";


const mapDispatchToProps = (dispatch, { playerName } ) => {
	return {
		onLoad: () => dispatch(fetchPlayer(playerName.get("id"))),
	}
}

export default connect(null, mapDispatchToProps)(PlayerProfile);