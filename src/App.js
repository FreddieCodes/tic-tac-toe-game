import { useState, useEffect } from 'react';
import NewGameMenu from './components/NewGameMenu';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  const [newGame, setNewGame] = useState(true);
  const [gameType, setGameType] = useState(null);

  const handleGameStart = () => {
    setNewGame(false);
  }

  const handleGameType = (type) => {
    setGameType(type);
  }

  return (
    <div className="App">
      { newGame && <NewGameMenu handleGameStart={handleGameStart} handleGameType={handleGameType} /> }
      { !newGame && <GameBoard gameType={gameType}/> }
    </div>
  );
}

export default App;
