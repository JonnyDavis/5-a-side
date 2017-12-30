import React from "react";
import Form from "./Forms/Form";

// storing the fields for the Form component in a prop
const fields = [
	{ name: "player 1", label: "player 1", value: "" },
	{ name: "player 2", label: "player 2", value: "" },
	{ name: "player 3", label: "player 3", value: "" },
	{ name: "player 4", label: "player 4", value: "" },
	{ name: "player 5", label: "player 5", value: "" },
	{ name: "player 6", label: "player 6", value: "" },
	{ name: "player 7", label: "player 7", value: "" },
	{ name: "player 8", label: "player 8", value: "" },
	{ name: "player 9", label: "player 9", value: "" },
	{ name: "player 10", label: "player 10", value: "" },

];

// the AddNames component.. passing through onSubmit to the form
const AddNames = ({ onSubmit }) => (
	<Form onSubmit={ onSubmit } fields={ fields } />
);


export default AddNames;