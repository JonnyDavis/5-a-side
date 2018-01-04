import React, { Component } from 'react';

class Teams extends Component {

	constructor(props) {
		super(props);


		this.createTeams = this.createTeams.bind(this);
	}


	createTeams() {	
		this.props.createTeams();
	}

	render() {

		const { teams } = this.props;

		const teamOnePlayers = teams.getIn([0, "players"]);
		const teamTwoPlayers = teams.getIn([1, "players"]);


		return (
			<div>
				<button type="button" className="btn btn-success" onClick={ this.createTeams }>Generate Teams</button>
				<br/>
				<div style={ teamOneContainerStyles }>
					<h2>{ teams.getIn([0, "teamName"]) }</h2>
					<ul>
						{ teamOnePlayers.map(players => (
							<li>
								{ players.get("playerName") }
							</li>
						))}
					</ul>
				</div>


				<div style={ teamTwoContainerStyles }>
					<h2>{ teams.getIn([1, "teamName"]) }</h2>
					<ul>
						{ teamTwoPlayers.map(players => (
							<li>
								{ players.get("playerName") }
							</li>
						))}
					</ul>	
				</div>




			</div>


		)
	}
}

export default Teams;

const teamOneContainerStyles = {
	display: "inline-block",
	width: "50%",
	backgroundColor: "red",
}

const teamTwoContainerStyles = {
	display: "inline-block",
	width: "50%",
	backgroundColor: "blue",
}