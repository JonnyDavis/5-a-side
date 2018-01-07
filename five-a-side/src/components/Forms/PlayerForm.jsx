import React, { Component } from "react";
import PlayerInput from "./PlayerInput";
import NumberOfPlayersInput from "./NumberOfPlayersInput";

class PlayerForm extends Component {
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

		changeNumberOfPlayers( e, i) {
		let fields = this.state.numberOfPlayersFields.slice();
		fields[i].value = e.target.value;
		this.setState({ numberOfPlayersFields: fields });
	}


	render() {

		const { players, maxPlayers } = this.props;

		return (
			// mapping over the input component within the form for every field so as to display 10 individual inputs
			<form className="form-group" onSubmit={ this.submit }>
				{ this.state.fields.map(({ name, label, value }, i) => (
					<PlayerInput
					onChange={ (e) => this.change(e, i)}
					value={ value }
					key={ i }
					name={ name }
					label={ label }
					/>
				))}
				<button 
				className="btn btn-success"
				disabled={ players.size === maxPlayers }
				>
				Submit
				</button>
			</form>
		);
	};
};

export default PlayerForm;

