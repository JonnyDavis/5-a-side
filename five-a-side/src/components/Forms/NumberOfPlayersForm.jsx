import React, { Component } from "react";
import NumberOfPlayersInput from "./NumberOfPlayersInput";

class NumberOfPlayersForm extends Component {
	constructor(props) {
		super(props);

		this.submit = this.submit.bind(this);
	
		this.state = {
		// maps over each field and adds a value property
			fields: props.fields.slice(),
		};

	};

	submit(e) {
		// prevents the page from refreshing when a form is submitted
		e.preventDefault(); 
		
		// a reduce function that returns the fields submitted as a single variable (data), which can be sent to update the state through the container
		let data = this.state.fields.reduce((data, field) => {
			data = field.value;
			return data;
		}, {});

		this.props.onSubmit(data);
	};

		change( e, i) {
		let fields = this.state.fields.slice();
		fields[i].value = e.target.value;
		this.setState({ fields: fields });
	}



	render() {
		return (
			// mapping over the input component within the form for every field so as to display 10 individual inputs
			<form className="form-group" onSubmit={ this.submit }>
				{ this.state.fields.map(({ name, label, value }, i) => (
					<NumberOfPlayersInput
					onChange={ (e) => this.change(e, i) }
					value={ value }
					key={ i }
					name={ name }
					label={ label }
					/>
				))}
				<button 
				className="btn btn-success"
				>Submit</button>

			</form>
		);
	};
};

export default NumberOfPlayersForm;