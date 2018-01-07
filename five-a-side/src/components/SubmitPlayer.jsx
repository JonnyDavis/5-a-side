import React, { Component } from "react";
import PlayerForm from "./Forms/PlayerForm";

// storing the fields for the Form component in a prop
const fields = [
	{ name: "playerName", label: "Add Player", value: "" },
];


// the Submit Player component, used to display the form for submitting players and pass down props from the state into the form
class SubmitPlayer extends Component {
	render() {

		const { onSubmit, players, maxPlayers } = this.props;

		return (	
		<div>
			<PlayerForm
			onSubmit={ onSubmit }
			players={ players } 
			maxPlayers={ maxPlayers } 
			fields={ fields } />
		</div>
		)
	}
}


export default SubmitPlayer;