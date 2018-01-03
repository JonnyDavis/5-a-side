import React, { Component } from 'react';
import './App.css';
import SubmitPlayer from './containers/SubmitPlayer';
import PlayerProfiles from './containers/PlayerProfiles';
import Teams from './containers/Teams';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Insert Title Here</h1>
                <h2> Insert Description Here </h2>
                <SubmitPlayer />
                <PlayerProfiles />
                <Teams />
            </div>
        );
    }
}

export default App;
