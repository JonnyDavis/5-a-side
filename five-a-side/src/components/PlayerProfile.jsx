import React, { Component } from 'react';

class PlayerProfile extends Component {

// a component for displaying an individual Player Name. 
// Also displays a delete button, with a function that is then dispatched through the container.
	
	constructor(props) {
		super(props);


		this.onDelete = this.onDelete.bind(this);
	}

	onDelete() {

		this.props.onDelete();
	}


	render() {

		const { name, id } = this.props;

		return (
				
			<li key={ id }
			className="list-group-item"
			style={ listItemStyles }
			>
				{ name }
				
				<button
				className="btn btn-danger"
				style={ deleteButtonStyles }
				onClick={ this.onDelete }
				>
					X
				</button>
			
			</li>

		)
	}

}

export default PlayerProfile;

const listItemStyles = {
	backgroundColor: "#00103a",
	borderColor: "#395396",
	overflow: "auto",
	borderRadius: 3,
}

const deleteButtonStyles = {
	padding: "0",
	width: 30,	
	float: "right",
}