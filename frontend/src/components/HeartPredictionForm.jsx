import React, { useState } from "react";

const HeartDiseasePredictionForm = () => {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    chestPain: "",
    restingBPS: "",
    cholesterol: "",
    fastingBloodSugar: "",
    restingECG: "",
    maxHeartRate: "",
    exerciseAngina: "",
    oldPeak: "",
    STSlope: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/heart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sex:
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Chest Pain:
          <input
            type="text"
            name="chestPain"
            value={formData.chestPain}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Resting BPS:
          <input
            type="text"
            name="restingBPS"
            value={formData.restingBPS}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Cholesterol:
          <input
            type="text"
            name="cholesterol"
            value={formData.cholesterol}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fasting Blood Sugar:
          <input
            type="text"
            name="fastingBloodSugar"
            value={formData.fastingBloodSugar}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Resting ECG:
          <input
            type="text"
            name="restingECG"
            value={formData.restingECG}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Max Heart Rate:
          <input
            type="text"
            name="maxHeartRate"
            value={formData.maxHeartRate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Exercise Angina:
          <input
            type="text"
            name="exerciseAngina"
            value={formData.exerciseAngina}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Old Peak:
          <input
            type="text"
            name="oldPeak"
            value={formData.oldPeak}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ST Slope:
          <input
            type="text"
            name="STSlope"
            value={formData.STSlope}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Predict</button>
      </form>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default HeartDiseasePredictionForm;
