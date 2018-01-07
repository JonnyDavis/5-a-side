import React, { Component } from "react";
import PlayerForm from "./Forms/PlayerForm";

// storing the fields for the Form component in a prop
const fields = [
	{ name: "playerName", label: "Player Name", value: "" },
];

const numberOfPlayersFields = [
	{ name: "teamSize", label:"Team Size", value:""},
];

// the AddNames component.. passing through onSubmit to the form
class SubmitPlayer extends Component {
	render() {

		const { onSubmit, players, maxPlayers } = this.props;

		return (	
		<div>
			<PlayerForm onSubmit={ onSubmit } players={ players } maxPlayers={ maxPlayers } fields={ fields } numberOfPlayersFields={ numberOfPlayersFields }/>
			<p> { players.size } needed </p>
			<p> { maxPlayers } needed </p>
		</div>
		)
	}
}


export default SubmitPlayer;