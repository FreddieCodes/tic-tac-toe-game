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
        <div className="board">
          <div className="cell"><img src="/img/o-mark-small.svg" alt="o-mark" className=""/></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </div>
        <div className="statbar">
          <div className="sb-card x">
            <div className="sb-title">X (YOU)</div>
            <div className="score">0</div>
          </div>
          <div className="sb-card ties">
            <div className="sb-title">TIES</div>
            <div className="score">0</div>
          </div>
          <div className="sb-card o">
            <div className="sb-title">O (CPU)</div>
            <div className="score">0</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
