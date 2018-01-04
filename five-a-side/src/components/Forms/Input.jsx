import React from "react";

// a simple (stateless) input component, created for the purpose of mapping over in the form.
export default ({ name, label, value, onChange }) => (
	<div style={ inputContainerStyle }>
		<label htmlFor={ name }>{ label }</label>
		<input className="form-control" style={ inputStyle } value={ value } onChange={ onChange } id={ name } />
		<button className="btn btn-success">Submit</button>
	</div>
);


const inputContainerStyle = {
	// lineHeight: "100%",
}
const inputStyle = {
	backgroundColor: "#001956",
	width: "70%",
	margin: "0 auto",
	color: "#F2F2F2"

}