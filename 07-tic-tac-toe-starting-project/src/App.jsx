import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import { useState } from "react"

function App() {

  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectsquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' :'X')
  }

  return (
    <main >
      <div id="game-container">
      <ol id='players' className="highlight-player">
        <Player initialName='Player1' symbol= 'X' isActive={activePlayer === 'X'}/> 
        <Player initialName = 'Player2' symbol = 'O' isActive={activePlayer === 'O'}/>
      </ol>
      GAMEBOARD
      <Gameboard onSelectSquare = {handleSelectsquare} activePlayerSymbol= {activePlayer}/>
      </div>
      LOG
    </main>
    
  )
}

export default App
