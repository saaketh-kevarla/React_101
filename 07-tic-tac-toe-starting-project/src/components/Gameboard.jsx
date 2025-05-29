import { useState } from "react"

const initialGameboard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function Gameboard({onSelectSquare,activePlayerSymbol}){
    const[gameboard,setGameboard] = useState(initialGameboard)

    function handleSelectsquare(rowIndex,colIndex){
        setGameboard((prevGameBoard) => {
            // its a good practise to copy/clone the object to a different object & and not by references
            const updatedBoard = [...prevGameBoard.map(inner => [...inner])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        })

        onSelectSquare();
    }

    return(
        <ol id="game-board">
            {gameboard.map((row,rowIndex) =>( 
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => handleSelectsquare(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>   
                        ))}
                    </ol>
                </li>
                ))}
        </ol>
    )
}