import React, { Component } from 'react';

class PlayerProfile extends Component {

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
			<li key={ id }>
				{ name }
				<button className="btn btn-danger" onClick={ this.onDelete }>
					X
				</button>
			</li>

		)
	}

}

export default PlayerProfile;