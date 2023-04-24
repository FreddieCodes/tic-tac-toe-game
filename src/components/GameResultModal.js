import React from 'react'

export default function GameResultModal({gameResult, handleRestart, handleCancel, handleQuit, handleNextRound}) {

  const handleCancelClick = () => {
    handleCancel();
  }

  const handleRestartClick = () => {
    handleRestart();
  }

  const handleNextRoundClick = () => {
    handleNextRound();
  }

  const handleQuitCLick = () => {
    handleQuit();
  }

  // alternatively I could create a function to handle the modal messages and buttons based on gameResult 
  // instead of having the logic in the return statement
  return (
    <div className="game-result-modal-cntnr">
      <div className="game-result-modal">
        { (gameResult === "x" || gameResult === "o") && <div className="top-modal-msg">
          You Won
        </div>
        }
        <div className="main-modal-msg">
          { (gameResult === "x" || gameResult === "o") && <div className={`${gameResult}-msg`}>
              <div className="modal-svg-cntnr">
                <img src={`/img/modal-${gameResult}.svg`} alt={gameResult} className=""/>
              </div>TAKES THE ROUND
            </div>
          }
          {
            (gameResult === "draw") && <div className="draw-msg">
              ROUND TIED
            </div>
          }
          {
            (gameResult === "restart") && <div className="restart-msg">
              RESTART GAME?
            </div>
          }
        </div>
          {
            (gameResult === "restart") && <div className="restart-btns">
              <button className="modal-btn left-btn" onClick={handleCancelClick}>NO, CANCEL</button>
              <button className="modal-btn right-btn" onClick={handleRestartClick}>YES, RESTART</button>
            </div>
          }
          {
            (gameResult === "x" || gameResult === "o" || gameResult === "draw") && <div>
              <button className="modal-btn left-btn" onClick={handleQuitCLick}>Quit</button>
              <button className="modal-btn right-btn" onClick={handleNextRoundClick}>Next Round</button>
            </div>
          }
      </div>
    </div>
  )
}
