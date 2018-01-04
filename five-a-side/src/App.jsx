import React, { Component } from 'react';
import './App.css';
import SubmitPlayer from './containers/SubmitPlayer';
import PlayerProfiles from './containers/PlayerProfiles';
import Teams from './containers/Teams';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>5-a-side</h1>
                <p>Add the name of each player you wish to play and select 'Generate Teams' when finished</p>
                <SubmitPlayer />
                <PlayerProfiles />
                <Teams />
            </div>
        );
    }
}

export default App;
