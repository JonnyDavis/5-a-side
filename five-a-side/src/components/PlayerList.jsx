import React, { Component } from "react";
import PlayerProfile from '../containers/PlayerProfile';


class PlayerList extends Component {
// a component which lists out each player name by mapping over the PlayerProfile component with player data taken from the state.

	render() {

		const { players, maxPlayers } = this.props;

		return (

			<div>
				{ /* a text hint which informs the user how many more players are needed to meet the total number of players set by the user */}
				{ players.size < maxPlayers ?
					<p> { maxPlayers - players.size } more players needed </p>
					: <p> Congrats! All players submitted </p> 
				}
				{ /* the map only runs if the condition that there is existing data on players has been met */}
				{players.count() ?
					<ul className="list-group" style={ listGroupStyles }>
						{players.map(player => (
							<PlayerProfile 
							key={ player.get("id") }
							id={ player.get("id")}
							name={ player.get("playerName")}  
							/>
						))}
					</ul>

					:
					<p>No Players Added</p>			
				}
			</div>
		)
	}
}


export default PlayerList;

const listGroupStyles = {
	height: 230,
	width: "70%",
	margin: "0px auto",
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
	flexWrap: "wrap",
}