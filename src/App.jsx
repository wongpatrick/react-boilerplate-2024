import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './components/TodoList'
import Navbar from './components/Navbar'
import TicTacToe from './components/TicTacToe'
import Pokemon from './components/Pokemon'

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
      {/* <TicTacToe /> */}
      <Pokemon />
    </>
  )
}

export default App
