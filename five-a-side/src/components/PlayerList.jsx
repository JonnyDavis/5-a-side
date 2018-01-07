import React, { Component } from "react";
import PlayerProfile from '../containers/PlayerProfile';


class PlayerList extends Component {

	// constructor(props) {
	// 	super(props);


	// 	this.onDelete = this.onDelete.bind(this);
	// }

	// onDelete() {	
	// 	this.props.onDelete();
	// }

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
							<PlayerProfile 
							key={ player.get("id") }
							id={ player.get("id")}
							name={ player.get("playerName")}  
							/>


							// <li key={ player.get("id") }>
							// 	{player.get("playerName")}
							// 	<button className="btn btn-danger" onClick={ this.onDelete }>
							// 		X
							// 	</button>
							// </li>
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