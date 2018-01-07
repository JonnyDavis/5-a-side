import React, { Component } from 'react';

class Teams extends Component {
// a component which maps out each team as list items and also displays the button used to generate said teams


	constructor(props) {
		super(props);


		this.createTeams = this.createTeams.bind(this);
	}


	createTeams() {	
		this.props.createTeams();
	}

	render() {

		const { teams, maxPlayers, players } = this.props;

		// variables containing two arrays which hold the data on how the teams are split within the state
		const teamOnePlayers = teams.getIn([0, "players"]);
		const teamTwoPlayers = teams.getIn([1, "players"]);



		return (
			<div style={teamsContainerStyles} >
				{/* The button is only enabled once the condition that the number of players added equals the total players set is met. This prevents the app from crashing */}
				<button 
				style={ buttonStyles } 
				type="button" 
				className="btn btn-success" 
				onClick={ this.createTeams }
				disabled={ players.size !== maxPlayers }  
				>
				Generate Teams
				</button>
				
				<br/>
				
				<div style={ teamOneContainerStyles }>
					<h2>{ teams.getIn([0, "teamName"]) }</h2>
					<ul className="list-group">
						{ teamOnePlayers.map(players => (
							<li className="list-group-item" style={ listItemStyles }>
								{ players.get("playerName") }
							</li>
						))}
					</ul>
				</div>


				<div style={ teamTwoContainerStyles }>
					<h2>{ teams.getIn([1, "teamName"]) }</h2>
					<ul className="list-group">
						{ teamTwoPlayers.map(players => (
							<li className="list-group-item" style={ listItemStyles }>
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
	width: "40%",
	borderRadius: 10,
	backgroundColor: "#2e4889",
	marginRight: "2.5%",
	border: "2px solid #395396",
}

const teamTwoContainerStyles = {
	display: "inline-block",
	width: "40%",
	borderRadius: 10,
	backgroundColor: "#2e4889",
	marginLeft: "2.5%",
	border: "2px solid #395396",
}

const buttonStyles = {
	marginBottom: 20,
}


const listItemStyles = {
	backgroundColor: "#2e4889",
	borderColor: "#395396",
	borderRadius: 3,
}

const teamsContainerStyles = {
	marginTop: 20,
	marginBottom: 50,
}