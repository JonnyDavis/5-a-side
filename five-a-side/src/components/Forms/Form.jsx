import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
	constructor(props) {
		super(props);

		this.submit = this.submit.bind(this);
	
		this.state = {
		// maps over each field and adds a value property
			fields: props.fields.slice(),
			// teamSizeFields: props.teamSizeFields.slice(),
		};

	};

	submit(e) {
		// prevents the page from refreshing when a form is submitted
		e.preventDefault(); 

		// let fields = this.state.fields.concat(this.state.teamSizeFields);

		// a reduce function that returns the fields submitted as a single variable (data), which can be sent to update the state through the container
		let data = this.state.fields.reduce((data, field) => {
			data[field.name] = field.value;
			return data;
		}, {});

		this.props.onSubmit(data);
		console.log(data);
	};

	// a function that updates the value of each field as somebody types in it (allows field value to be updated)
	// Note: come back to this and consider immutability!!?
	change(e, i) {
		let fields = this.state.fields.slice();
		fields[i].value = e.target.value;
		this.setState({ fields: fields });
	};


	render() {
		return (
			// mapping over the input component within the form for every field so as to display 10 individual inputs
			<form className="form-group" onSubmit={ this.submit }>
				{ this.state.fields.map(({ name, label, value }, i) => (
					<Input
					onChange={ (e) => this.change(e, i)}
					value={ value }
					key={ i }
					name={ name }
					label={ label }
					/>
				))}
			</form>
		);
	};
};

export default Form;

