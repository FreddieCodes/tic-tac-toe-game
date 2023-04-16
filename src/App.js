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
    if (resultValidator(gameState) === "Round Won") {
      setGameActive(false);

      let gameResObj = {
        // winner set to the opposite of currentTurn for now until we implement the logic to determine the winner based on the last turn
        winner: currentTurn,
        loser: currentTurn === "x" ? "o" : "x"
      }

      setGameResult(gameResObj);
      // increase winner score
    }

    if (resultValidator(gameState) === "Round Draw") {
      setGameActive(false);
      setGameResult("Round Draw");
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

  return (
    <div className="App">
      { gameResult && <GameResultModal gameResult={gameResult} /> }
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
        />
      }
    </div>
  );
}

export default App;
