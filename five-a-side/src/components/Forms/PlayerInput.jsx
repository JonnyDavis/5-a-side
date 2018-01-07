import React from "react";

// a simple (stateless) input component, created for the purpose of mapping over in the form.
export default ({ name, label, value, onChange }) => (
	<div style={ inputContainerStyle }>
		<label htmlFor={ name }>{ label }</label>
		<input className="form-control" style={ inputStyle } value={ value } onChange={ onChange } id={ name } />
	</div>
);


const inputContainerStyle = {
	marginBottom: 15,
}
const inputStyle = {
	backgroundColor: "#001956",
	width: "70%",
	margin: "0 auto",
	color: "#F2F2F2"

}