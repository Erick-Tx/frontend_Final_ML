import React, { useState } from "react";

function PredictionForm({ onNewPrediction }) {
  const [formData, setFormData] = useState({ Outstanding_Debt: "", Interest_Rate: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const inputData = {
        Outstanding_Debt: parseFloat(formData.Outstanding_Debt),
        Interest_Rate: parseFloat(formData.Interest_Rate),
      };

      //const response = await fetch("http://localhost:5000/predict", {
      const response = await fetch("https://9778-190-103-191-5.ngrok-free.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (!response.ok) {
        throw new Error("Error in prediction API");
      }

      const data = await response.json();

      // Adjuntar los datos enviados como input para mostrar en pantalla
      onNewPrediction({
        ...data,
        input: inputData,
      });

      // Limpiar formulario
      setFormData({ Outstanding_Debt: "", Interest_Rate: "" });
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "20px auto",
        padding: "20px",
        maxWidth: "400px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Make a Prediction</h2>
      <div style={{ marginBottom: "15px" }}>
        <label>Outstanding Debt:</label>
        <input
          type="number"
          name="Outstanding_Debt"
          value={formData.Outstanding_Debt}
          onChange={handleChange}
          required
          style={{ width: "97%", padding: "10px", marginTop: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Interest Rate:</label>
        <input
          type="number"
          name="Interest_Rate"
          value={formData.Interest_Rate}
          onChange={handleChange}
          required
          style={{ width: "97%", padding: "10px", marginTop: "5px" }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4A90E2",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          
        }}
      >
        Predict
      </button>
    </form>
  );
}

export default PredictionForm;
