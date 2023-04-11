import React from 'react';

export default function NewGameMenu({ handleGameStart, handleGameType }) {
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
                <button className='mark-select-btn x-side '>
                <img src="/img/player_x.svg" alt="x button" className=""/>
                </button>
                <button className='mark-select-btn o-side player-choice'>
                <img src="/img/player_o.svg" alt="o button" className=""/>
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
