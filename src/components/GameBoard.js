import React from 'react';
import Cell from './Cell';

export default function GameBoard(props) {

  const handlePlayerClick = (e) => {
    props.handleCellPlayed(e);
  }

  const handleRestartClick = () => {
    props.handleRestartBtn();
  }
  

  return (
    <div className="game-board-cntnr">
      <div className="game-board">
        <div className="infobar">
          <div className="gb-logo-cntnr">
            <img src="/img/logo.svg" alt="logo" className="logo"/>
          </div>
          <div className="turn-indicator">
            { props.currentTurn === "x" && <img src="/img/turn-x-grey-small.svg" alt="X" className=""/> }
            { props.currentTurn === "o" && <img src="/img/turn-o-grey-small.svg" alt="O" className=""/> }
            <h2>TURN</h2>
          </div>
          <div className="restart-btn">
            <img src="/img/restart-sign.svg" alt="restart" className="restart" onClick={handleRestartClick}/>
          </div>
        </div>
        <div className="board">         
          { props.gameState.map((cell, index) => {
            return < Cell 
              key={index}
              cell={cell}
              cellIndex={index}
              currentTurn={props.currentTurn}
              handlePlayerClick={handlePlayerClick}
            />
            })
          }
        </div>
        <div className="statbar">
          <div className="sb-card x">
            <div className="sb-title">X (YOU)</div>
            <div className="score">{props.score["x"]}</div>
          </div>
          <div className="sb-card ties">
            <div className="sb-title">TIES</div>
            <div className="score">{props.score["draw"]}</div>
          </div>
          <div className="sb-card o">
            <div className="sb-title">O (CPU)</div>
            <div className="score">{props.score["o"]}</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
