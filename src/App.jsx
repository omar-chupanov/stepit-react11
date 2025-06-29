import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Footer'
import Footer from './components/Header'
import Usecard from './components/Usecard'
import Greeting from './components/Greeting'
import ToggleText from './components/ToggleText'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <Greeting name = 'Omar'></Greeting>
      <Usecard name = 'Zlata' age = {25}></Usecard>
      <ToggleText></ToggleText>
      <Counter></Counter>
    </>
  )
}

export default App
