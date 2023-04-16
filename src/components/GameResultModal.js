import React from 'react'

export default function GameResultModal({gameResult}) {
  
  return (
    <div className="game-result-modal-cntnr">
      <div className="game-result-modal">
        <div className="top-modal-msg">
          You Won
        </div>
        <div className="main-modal-msg">
          { gameResult.winner && <div className={`${gameResult.winner}-msg`}>
              <div className="modal-svg-cntnr">
                <img src={`/img/modal-${gameResult.winner}.svg`} alt={gameResult.winner} className=""/>
              </div>TAKES THE ROUND
            </div>
          }
        </div>
        <div>
          <button className="modal-btn left-btn">Quit</button>
          <button className="modal-btn right-btn">Next Round</button>
        </div>
      </div>
    </div>
  )
}
