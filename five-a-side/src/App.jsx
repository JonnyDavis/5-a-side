import React, { Component } from 'react';
import './App.css';
import SubmitPlayer from './containers/SubmitPlayer';
import PlayerList from './containers/PlayerList';
import Teams from './containers/Teams';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>5-a-side</h1>
                <p>Add the name of each player you wish to play and select 'Generate Teams' when finished</p>
                <SubmitPlayer />
                <PlayerList />
                <Teams />
            </div>
        );
    }
}

export default App;
