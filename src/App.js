import React, { useState } from 'react';
import './App.css';
import { Board } from './component/Board';
import Popup from './component/Popup';
import Reset from './component/Reset';
import ScoreBoard from './component/ScoreBoard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [board, setboard] = useState(Array(9).fill(null));
  const [xplaying, setXplaying] = useState(true);
  const [Score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameover, setgameover] = useState(false)

  const handelBoxClick = (boxIdx) => {
    const updateboard = board.map((value, indx) => {
      if (indx === boxIdx) {
        return xplaying === true ? "X" : "O"
      }
      else {
        return value;
      }
    })

    const winner = checkWinner(updateboard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = Score
        oScore += 1
        setScore({ ...Score, oScore })
      }
      else {
        let { xScore } = Score
        xScore += 1
        setScore({ ...Score, xScore })
      }
    }

    console.log(Score)

    setboard(updateboard)
    setXplaying(!xplaying)
  }
  let status;
  const checkWinner = (board) => {
    for (let i = 0; i < win.length; i++) {
      const [x, y, z] = win[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z] && board[z]) {
        setgameover(true)
        return board[x];

      }
      else if (!board.includes(null)) {
        toast.success("Draw");
        break
      }
    }
  }

  const resetBoard = () => {
    setgameover(false);
    setboard(Array(9).fill(null))
  }

  return (
    <>
      <div className="App" >
        {/* <Popup  status={status}/> */}
        <ScoreBoard Score={Score} xplaying={xplaying}  />
        <Board board={board} onClick={gameover ? resetBoard : handelBoxClick} />
        <Reset resetBoard={resetBoard} />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>

  );
}

export default App;