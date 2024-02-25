import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './components/TicTacToe'
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './components/TodoList'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
        {/* <TicTacToe /> */}
    </>
  )
}

export default App
