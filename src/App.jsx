import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'
import Card from './components/Card'

function App() {
  

  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl">Props and Tailwind</h1>
     <Card title="About Laptop" read="Read more about Laptop"/>
     <Card title="about Us" read="Read more"/>
    </>
  )
}

export default App
