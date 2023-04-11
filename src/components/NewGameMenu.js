import React from 'react';

export default function NewGameMenu({ handleGameStart, handleGameType, handleMarkSelect }) {
  const handleMarkClick = (e) => {
    if (e.target.classList.contains("player-choice")) return;
    e.target.classList.toggle("player-choice");
    // if the class contains 'x-side' then call handleMarkSelect with 'x' as the argument
    e.target.classList.contains("x-side") ? handleMarkSelect('x') : handleMarkSelect('o');
  }

  const handleClick = (e) => {
    handleGameStart();
    // if the class contains 'cpu' then call handleGameType with 'cpu' as the argument
    e.target.classList.contains("cpu") ? handleGameType('cpu') : handleGameType('player');
  }

  return (
    <div className="new-game-cntnr">
      <div className="new-game-menu">
          <div className="logo-cntnr">
            <img src="/img/logo.svg" alt="logo" className="logo"/>
          </div>
          <div className="mark-cntnr">
            <h2 className='player-name'>Pick Player 1's Mark</h2>
            <div className="mark-select">
                <button className='mark-select-btn x-side' onClick={handleMarkClick}>
                  <img src="/img/player_x.svg" alt="x-side"/>
                </button>
                <button className='mark-select-btn o-side player-choice' onClick={handleMarkClick}>
                  <img src="/img/player_o.svg" alt="o-side"/>
                </button>
            </div>
            <p>REMEMBER : X GOES FIRST</p>
          </div>
          <div className='game-type-cntnr'>
            <button className="new-game-btn cpu" onClick={handleClick}>New Game (vs CPU)</button>
            <button className="new-game-btn player" onClick={handleClick}>New Game (vs Player)</button>
          </div>
        </div>
      </div>
  )
}
