import React, { Component } from "react";


class PlayerProfiles extends Component {

// consider combining this with the Submit Player Component (list may not be needed)
	render() {
		const { players } = this.props;

		return (

			<div>
				{ players.size < 10 ?
					<p> { 10 - players.size } more players needed </p>
					: <p> Congrats! All players submitted </p> 
				}

				{players.count() ?
					<ul>
						{players.map(player => (
							<li key={ player.get("id") }>
								{player.get("playerName")}
							</li>
						))}
					</ul>
					:
					<p>No Players Added</p>
				}
			</div>
		)
	}
}


export default PlayerProfiles;