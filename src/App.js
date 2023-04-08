import { useState, useEffect } from 'react';
import NewGameMenu from './components/NewGameMenu';
import './App.css';

function App() {
  const [newGame, setNewGame] = useState(true);

  const handleGameStart = () => {
    setNewGame(false);
  }

  return (
    <div className="App">
      {newGame && <NewGameMenu handleGameStart={handleGameStart}/>}
    </div>
  );
}

export default App;
