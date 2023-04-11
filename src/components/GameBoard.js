import React from 'react';

export default function GameBoard(props) {
  return (
    <div className="game-board-cntnr">
      <div className="game-board">
        <div className="infobar">
          <div className="gb-logo-cntnr">
            <img src="/img/logo.svg" alt="logo" className="logo"/>
          </div>
          <div className="turn-indicator">
            <img src="/img/turn-o-grey-small.svg" alt="X" className=""/>
            <h2>TURN</h2>
          </div>
          <div className="restart-btn">
            <img src="/img/restart-sign.svg" alt="restart" className="restart"/>
          </div>
        </div>
        <div className="board"></div>
        <div className="statbar"></div>
      </div>
    </div>
  )
}
