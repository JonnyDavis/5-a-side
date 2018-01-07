import React from "react";
import NumberOfPlayersForm from "./Forms/NumberOfPlayersForm";

// storing the fields for the Form component in a prop
const fields = [
	{ name: "teamSize", label:"Team Size", value:""},
];

// the AddNames component.. passing through onSubmit to the form
const NumberOfPlayers = ({ onSubmit }) => (
	<div>
		<NumberOfPlayersForm onSubmit={ onSubmit } fields={ fields } />
	</div>
);


export default NumberOfPlayers;