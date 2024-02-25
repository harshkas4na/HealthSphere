import React, { useState } from "react";
import Navbar from "../components/Navbar";

const DiabetesPredictionForm = () => {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    urea: "",
    cr: "",
    hba1c: "",
    chol: "",
    tg: "",
    hdl: "",
    ldl: "",
    vldl: "",
    bmi: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/diabetes", {
      method: "POST",
      mode: "no-cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    });

    console.log(await response.text()); // Log the response body as text

    const data = await response.json(); // Attempt to parse the response as JSON
    setResult(data.result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
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
          Urea:
          <input
            type="text"
            name="urea"
            value={formData.urea}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CR:
          <input
            type="text"
            name="cr"
            value={formData.cr}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          HBA1C:
          <input
            type="text"
            name="hba1c"
            value={formData.hba1c}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Chol:
          <input
            type="text"
            name="chol"
            value={formData.chol}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          TG:
          <input
            type="text"
            name="tg"
            value={formData.tg}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          HDL:
          <input
            type="text"
            name="hdl"
            value={formData.hdl}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          LDL:
          <input
            type="text"
            name="ldl"
            value={formData.ldl}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          VLDL:
          <input
            type="text"
            name="vldl"
            value={formData.vldl}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          BMI:
          <input
            type="text"
            name="bmi"
            value={formData.bmi}
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

export default DiabetesPredictionForm;
