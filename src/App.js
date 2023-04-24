import { useState, useEffect } from 'react';
import NewGameMenu from './components/NewGameMenu';
import GameBoard from './components/GameBoard';
import GameResultModal from './components/GameResultModal';
import resultValidator from './utils';
import './App.css';

function App() {
  const [newGame, setNewGame] = useState(true);
  const [gameType, setGameType] = useState(null);
  const [player1, setPlayer1] = useState("x");
  const [player2, setPlayer2] = useState("o");
  const [currentTurn, setCurrentTurn] = useState("x");
  const [gameState, setGameState] = useState(["", "", "", "", "", "", "", "", ""]);
  const [gameActive, setGameActive] = useState(true);
  const [gameResult, setGameResult] = useState(null);

  // player1 = {
  //  mark: "x",
  // }

  useEffect(() => {
    if (typeof resultValidator(gameState) !== "string" ) return;
    let result = resultValidator(gameState);

    if (result === "x" || result === "o" ) {
      setGameActive(false);
      setCurrentTurn(result); // this is to show the winner's mark on the board as the last move

      // let gameResObj = {
      //   winner: result,
      //   loser: result === "x" ? "o" : "x"
      // }

      setGameResult(result);
      // increase winner score
    }

    if (result === "draw") {
      setGameActive(false);
      setGameResult(result);
      // increase ties score
    }
    // handle turn maybe to go here
  }, [gameState]);
  
  const handleMarkSelect = (mark) => {
    setPlayer1(mark);
    mark === 'x' ? setPlayer2('o') : setPlayer2('x');
  }

  const handleGameStart = () => {
    setNewGame(false);
  }

  const handleGameType = (type) => {
    setGameType(type);
  }

  const handleTurn = () => {
    currentTurn === "x" ? setCurrentTurn("o") : setCurrentTurn("x");
  }

  const handleCellPlayed = (cell) => {
    if ( gameState[cell] !== "" || gameActive === false ) return;
    
    let newGameState = [...gameState];
    newGameState[cell] = currentTurn;
    setGameState(newGameState);
    handleTurn();
  }

  // handleRestart
  const handleRestart = () => {
    setGameState(["", "", "", "", "", "", "", "", ""]);
    setGameActive(true);
    setCurrentTurn("x");
    setGameResult(null);
  }

  const handleRestartBtn = () => {
    setGameResult("restart");
  }

  // handle cancel
  const handleCancel = () => {
    setGameResult(null);
  }

  //handleQuit
  const handleQuit = () => {
    setNewGame(true);
    setGameType(null);
    handleRestart();
  }

  //handleNextRound seperate from handleRestart until we have a score system
  const handleNextRound = () => {
    handleRestart();
  }

  return (
    <div className="App">
      { gameResult && <GameResultModal
        gameResult={gameResult}
        handleRestart={handleRestart}
        handleCancel={handleCancel}
        handleQuit={handleQuit}
        handleNextRound={handleNextRound}
        />
      }
      { newGame && <NewGameMenu
        handleGameStart={handleGameStart}
        handleGameType={handleGameType}
        handleMarkSelect={handleMarkSelect}
        />
      }
      { !newGame && <GameBoard
        gameState={gameState}
        gameType={gameType}
        currentTurn={currentTurn}
        handleCellPlayed={handleCellPlayed}
        handleRestartBtn={handleRestartBtn}
        />
      }
    </div>
  );
}

export default App;
