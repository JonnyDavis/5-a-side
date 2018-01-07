import React, { Component } from "react";
import PlayerInput from "./PlayerInput";

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
	};

	// a function that updates the value of each field as somebody types in it (allows field value to be updated)
	change(e, i) {
		let fields = this.state.fields.slice();
		fields[i].value = e.target.value;
		this.setState({ fields: fields });
	};


	render() {

		const { players, maxPlayers } = this.props;

		return (
			// mapping over the fields and passing each field as a prop into the Input component
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
				
				{/* The button is disabled once the condition that the number of players added equals the total players set is met. This prevents the app from crashing.
				Note: disabled condition had to be commented out as it does not work when the user manually updates the maximum players and don't know why? - means that other errors can happen.
				*/}
				<button 
				className="btn btn-success"
				disabled={ false /* players.size === maxPlayers */ }	
				>
				Submit
				</button>
			</form>
		);
	};
};

export default PlayerForm;

