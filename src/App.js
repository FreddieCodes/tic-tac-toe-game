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

  return (
    <div className="App">
      { newGame && <NewGameMenu handleGameStart={handleGameStart} handleGameType={handleGameType} handleMarkSelect={handleMarkSelect} /> }
      { !newGame && <GameBoard gameType={gameType} currentTurn={currentTurn}/> }
    </div>
  );
}

export default App;
