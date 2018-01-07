import React, { Component } from "react";
import NumberOfPlayersForm from "./Forms/NumberOfPlayersForm";

// storing the fields for the Form component in a variable that can be passed down as a prop
const fields = [
	{ name: "teamSize", label:"Select Number of Players", value:""},
];


class NumberOfPlayers extends Component {
	render() {
		// passing through maxPlayers as a prop (set by the container through mapStateToProps)
		const { onSubmit, maxPlayers } = this.props;
	
		return (

			<div>
			
			{/* displaying the form component */}
				<NumberOfPlayersForm
				onSubmit={ onSubmit }
				fields={ fields }
				maxPlayers={ maxPlayers }
				/>
			
			</div>


		)

	}
} 

export default NumberOfPlayers;