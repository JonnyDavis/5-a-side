import { connect } from "react-redux";

import Teams from "../components/Teams";

import { setTeams } from "../data/actions";

// returns an object (players), which gets passed in as props to the connected component
const mapStateToProps = state => {
	return {
		teams: state.get("teams"),
		players: state.get("players"),
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createTeams: () => dispatch(setTeams()),
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Teams);