import React from "react";
import Form from "./Forms/Form";

// storing the fields for the Form component in a prop
const fields = [
	{ name: "playerName", label: "Player Name", value: "" },
	// { name: "player2", label: "player 2", value: "" },
	// { name: "player3", label: "player 3", value: "" },
	// { name: "player4", label: "player 4", value: "" },
	// { name: "player5", label: "player 5", value: "" },
	// { name: "player6", label: "player 6", value: "" },
	// { name: "player7", label: "player 7", value: "" },
	// { name: "player8", label: "player 8", value: "" },
	// { name: "player9", label: "player 9", value: "" },
	// { name: "player10", label: "player 10", value: "" },

];

// the AddNames component.. passing through onSubmit to the form
const SubmitPlayer = ({ onSubmit }) => (
	<Form onSubmit={ onSubmit } fields={ fields } />
);


export default SubmitPlayer;