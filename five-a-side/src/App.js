import React, { Component } from 'react';
import './App.css';
import AddNames from './components/AddNames';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Insert Title Here</h1>
                <h2> Insert Description Here </h2>
                <AddNames />
            </div>
        );
    }
}

export default App;
