import {useState} from 'react';
export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const calculateWinner = (board) => {

    }

    const handleClick = (i) => {
        if (board[i] || calculateWinner(board)) {
            return;
        }

        const newBoard = [...board];
        newBoard[i] = xIsNext ? "X" : "O";
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i) => {
        <button className="square" onClick={()=> handleClick(i)}>
            {board[i]}
        </button>
    }

    return (
        <div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
        </div>
    )
}