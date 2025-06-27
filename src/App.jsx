import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Footer'
import Footer from './components/Header'
import Usecard from './components/Usecard'

function App() {

  return (
    <>
      <Header />
      <p></p>
      <Usecard name ='Omar'  age = {25}> 

      </Usecard>
      <Footer></Footer>
    </>
  )
}

export default App
