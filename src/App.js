import { useState, useEffect } from 'react';
import NewGameMenu from './components/NewGameMenu';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  const [newGame, setNewGame] = useState(true);
  const [gameType, setGameType] = useState(null);
  const [player1, setPlayer1] = useState("x");
  const [player2, setPlayer2] = useState("o");
  const [currentTurn, setCurrentTurn] = useState("o");
  const [gameState, setGameState] = useState(["", "", "", "", "", "", "", "", ""]);

  // player1 = {
  //  mark: "x",
  // }

  useEffect(() => {
    console.log("gameState changed");
    console.log(gameState);
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
    let newGameState = [...gameState];
    newGameState[cell] = currentTurn;
    setGameState(newGameState);
    
  }

  return (
    <div className="App">
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
        handleTurn={handleTurn}
        handleCellPlayed={handleCellPlayed}
        /> 
      }
    </div>
  );
}

export default App;
