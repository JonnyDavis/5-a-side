import React from "react";

// a simple (stateless) input component, created for the purpose of mapping over in the form.
export default ({ name, label, value, onChange }) => (
	<div>
		<label htmlFor={ name }>{ label }</label>
		<input value={ value } onChange={ onChange } id={ name } />
	</div>
);