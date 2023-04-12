import React from 'react'

export default function Cell(props) {

  const handleClick = (e) => {
    console.log(props.cell);
    props.handlePlayerClick(props.cellIndex);
  }  

  return (
    <div className="cell" onClick={handleClick}>
      { props.cell === "x" && <img src="/img/x-mark-small.svg" alt="x-mark" className="" onClick={handleClick}/> }
      { props.cell === "o" && <img src="/img/o-mark-small.svg" alt="o-mark" className="" onClick={handleClick}/> }
    </div>
  )
}

// When cell is clicked, the cellIndex is passed to the handlePlayerClick function in GameBoard.js
// When cell is clicked, the cellIndex is passed to the handleCellPlayed function in App.js
// We need it to toggle the currentTurn state in App.js
// We need it to update the gameState array in App.js

