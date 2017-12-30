import React, { Component } from 'react';

class NameProfile extends Component {
	componentDidMount() {
		this.props.onLoad();
	}


	render() {
		const { playerName, onDelete } = this.props;

		return (
			<li key={ playerName.get("id") }>
				{ playerName.get("playerName") }
			</li>
		)
	}
}

export default PlayerProfile;