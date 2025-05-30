import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import { useState } from "react"

function App() {

  const [gameTurns,setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectsquare(rowIndex,colIndex){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' :'X')
    setGameTurns((prevTurns) =>{
      let currentPlayer  = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O'
        }

      const updateTurns = [
        {square : {row : rowIndex,col : colIndex}, player : currentPlayer},
        ...prevTurns]

      return updateTurns;
    })
  }



  return (
    <main >
      <div id="game-container">
      <ol id='players' className="highlight-player">
        <Player initialName='Player1' symbol= 'X' isActive={activePlayer === 'X'}/> 
        <Player initialName = 'Player2' symbol = 'O' isActive={activePlayer === 'O'}/>
      </ol>
      GAMEBOARD
      <Gameboard onSelectSquare = {handleSelectsquare} turns={gameTurns}/>
      </div>
      LOG
    </main>
    
  )
}

export default App
