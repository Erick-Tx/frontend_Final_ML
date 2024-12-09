import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar"; // Importar el Navbar
import PredictionForm from "./components/PredictionForm";
import Footer from "./components/Footer"; // Importar Footer


function App() {
  const [lastPrediction, setLastPrediction] = useState(null);
  const [predictionHistory, setPredictionHistory] = useState([]);
  const [predictionCounter, setPredictionCounter] = useState(0);

  const translatePrediction = (prediction) => {
    switch (prediction) {
      case 0:
        return "Good";
      case 1:
        return "Poor";
      case 2:
        return "Standard";
      default:
        return "Unknown";
    }
  };

  const handleNewPrediction = (newPrediction) => {
    setPredictionCounter((prevCounter) => prevCounter + 1);
    const numberedPrediction = {
      ...newPrediction,
      id: predictionCounter + 1,
    };

    setLastPrediction(numberedPrediction);
    setPredictionHistory((prevHistory) => [numberedPrediction, ...prevHistory]);
  };

  return (
    <div className="App" >
      <Navbar /> {/* Agregar el Navbar */}
      <div className="container">
        <div className="left-column">
          
          <PredictionForm onNewPrediction={handleNewPrediction} />
        </div>
        <div className="right-column">
          <h2>Predictions</h2>
          <div id="last-prediction">
            <h3>Last Prediction</h3>
            {lastPrediction && (
              <div>
                <p>
                  <strong>Prediction:</strong>{" "}
                  {translatePrediction(lastPrediction.prediction)} ({lastPrediction.prediction})
                </p>
                <p>
                <strong>Probabilities:</strong> {lastPrediction.probabilities.map(prob => prob.toFixed(5)).join(" || ")}
                </p>
                <p>
                <strong>Input:</strong> {Object.entries(lastPrediction.input).map(([key, value]) => `${key}: ${value}`).join(", ")}
                </p>
              </div>
            )}
          </div>
          <div id="prediction-history" className="prediction-history">
            <h3>Prediction History</h3>
            <ul>
              {predictionHistory.map((entry) => (
                <li key={entry.id}>
                  <strong>Prediction {entry.id}:</strong>{" "}
                  {translatePrediction(entry.prediction)} ({entry.prediction}) <br />
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer /> {/* Agregar el Footer */}
    </div>
  );
}

export default App;
