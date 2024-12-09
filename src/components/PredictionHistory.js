import React from "react";

function PredictionHistory({ history }) {
  if (!history.length) {
    return <p style={{ textAlign: "center" }}>No prediction history available.</p>;
  }

  return (
    <div style={{ margin: "20px auto", padding: "20px", maxWidth: "600px", backgroundColor: "#f0f8ff", borderRadius: "10px" }}>
      <h3 style={{ textAlign: "center", color: "#333" }}>Prediction History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>Prediction {index + 1}:</strong> {item.prediction}
            <br />
            <strong>Input:</strong> {JSON.stringify(item.input)}
            <br />
            <strong>Probabilities:</strong> {item.probabilities.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PredictionHistory;
