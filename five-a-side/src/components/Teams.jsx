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
				<button onClick={ this.createTeams }>Generate Teams</button>
				<div>
					<h2>{ teams.getIn([0, "teamName"]) }</h2>
					<ul>
						{ teamOnePlayers.map(players => (
							<li>
								{ players.get("playerName") }
							</li>
						))}
					</ul>
				</div>


				<div>
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