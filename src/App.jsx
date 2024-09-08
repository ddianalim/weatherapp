import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider, useToast , Card, CardHeader, CardBody, CardFooter} from "@chakra-ui/react";
// import Navbar from './Navbar';
// import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider isResettingCSS={false}>
      {/* <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/design" element={<Design />}/>
        </Routes>
      </div> */}
      <h1>Philadelphia</h1> 
      <div className="card">
        <li>
          <el>High</el>
          <el>Low</el>
          <el>High</el>
          <el>High</el>
          
        </li>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div> 
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ChakraProvider>
  )
}

export default App
