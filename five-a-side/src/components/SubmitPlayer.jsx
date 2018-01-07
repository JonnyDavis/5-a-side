import React from "react";
import Form from "./Forms/Form";

// storing the fields for the Form component in a prop
const fields = [
	{ name: "playerName", label: "Player Name", value: "" },
];

// const teamSizeFields = [
// 	{ name: "teamSize", label:"Team Size", value:""},
// ];

// the AddNames component.. passing through onSubmit to the form
const SubmitPlayer = ({ onSubmit }) => (
	<div>
		<Form onSubmit={ onSubmit } fields={ fields } /*teamSizeFields={ teamSizeFields }*//>
	</div>
);


export default SubmitPlayer;