import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="new-game-menu">
        <div className="logo-cntnr">
          <img src="/img/logo.svg" alt="logo" className="logo"/>
        </div>
        <div className="mark-cntnr">
          <h2 className='player-name'>Pick Player 1's Mark</h2>
          <div className="mark-select"></div>
          <p>REMEMBER : X GOES FIRST</p>
        </div>
        <div className='game-type-cntnr'>
          <button className="new-game-btn cpu">New Game (vs CPU)</button>
          <button className="new-game-btn player">New Game (vs Player)</button>
        </div>
      </div>

    </div>
  );
}

export default App;
