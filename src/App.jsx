import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider, useToast , Card, CardHeader, CardBody, CardFooter} from "@chakra-ui/react";
import { IoCloudySharp } from "react-icons/io5";
import weatherGraph from './assets/weather-graph.png';
import circles from './assets/circles.png';
import { FaLocationArrow } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider isResettingCSS={false}>
      <div className="weather-app">
        <div className="header">
          <FaLocationArrow color="white" className="location-icon" />
          <GoPlus color="white" className="plus-icon" />
        </div>

        <div className="weather-header">
            <h1>Philadelphia</h1>
            <div className="temperature-icon-container">
              <span className="temp-value">76°</span>
              <div className="weather-icon">
                  <IoCloudySharp size={60} color="white" /> {}
              </div>
            </div>
        </div>

        <div className="weather-graph">
            <img src={weatherGraph} alt="Weather Graph"/> {/* Replace with an actual graph */}
        </div>

        <div className="weather-details">
            <p>High <span className="detail-value">82°</span></p>
            <p>Low <span className="detail-value">63°</span></p>
            <p>Feels Like <span className="detail-value">78°</span></p>
            <p>Chance of Rain <span className="detail-value">10%</span></p>
            <p>UV Index <span className="detail-value">4 Low</span></p>
            <p>Sunrise <span className="detail-value">6:30AM</span></p>
            <p>Sunrise <span className="detail-value">7:15PM</span></p>
        </div>

        <div className="circles-img">
            <img src={circles} alt="Circles" size={60}/> {}
        </div>
      </div>
    </ChakraProvider>
  )
}

export default App
