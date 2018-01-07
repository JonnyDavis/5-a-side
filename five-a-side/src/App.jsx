import React, { Component } from 'react';
import './App.css';
import SubmitPlayer from './containers/SubmitPlayer';
import PlayerList from './containers/PlayerList';
import Teams from './containers/Teams';
import NumberOfPlayers from './containers/NumberOfPlayers';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>5-a-side</h1>
                <p>Add the name of each player you wish to play and select 'Generate Teams' when finished. 
                	<br/>
                	You may also change the number of players with the dropdown menu below.
                </p>
                <NumberOfPlayers />
                <SubmitPlayer />
                <PlayerList />
                <Teams className="Teams" />
            </div>
        );
    }
}

export default App;
