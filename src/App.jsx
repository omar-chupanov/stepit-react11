import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Footer'
import Footer from './components/Header'
import Usecard from './components/Usecard'
import Greeting from './components/Greeting'

function App() {

  return (
    <>
      <Greeting name = 'Omar'></Greeting>
      <Usecard name = 'Zlata' age = {25}></Usecard>
    </>
  )
}

export default App
