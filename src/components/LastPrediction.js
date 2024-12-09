import React from "react";

function LastPrediction({ prediction }) {
  if (!prediction) {
    return <p style={{ textAlign: "center" }}>No predictions made yet.</p>;
  }

  return (
    <div style={{ margin: "20px auto", padding: "20px", maxWidth: "600px", backgroundColor: "#eaf4fc", borderRadius: "10px" }}>
      <h3 style={{ textAlign: "center", color: "#333" }}>Last Prediction</h3>
      <p><strong>Prediction:</strong> {prediction.prediction}</p>
      <p><strong>Probabilities:</strong> {prediction.probabilities.join(", ")}</p>
      <p><strong>Input:</strong> {JSON.stringify(prediction.input)}</p>
    </div>
  );
}

export default LastPrediction;
