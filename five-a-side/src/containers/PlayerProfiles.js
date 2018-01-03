import { connect } from "react-redux";

import PlayerProfiles from "../components/PlayerProfiles";

// returns an object (players), which gets passed in as props to the connected component
const mapStateToProps = state => {
	return {
		players: state.get("players"),
	}
}



export default connect(mapStateToProps)(PlayerProfiles);