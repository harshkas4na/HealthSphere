import React, { useState } from "react";

const ThyroidPredictionForm = () => {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    TSH: "",
    T3: "",
    TT4: "",
    T4U: "",
    FTI: "",
    sick: "",
    pregnant: "",
    thyroid_surgery: "",
    lithium: "",
    goitre: "",
    tumor: "",
    I131_treatment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/thyroid", {
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
          TSH:
          <input
            type="text"
            name="TSH"
            value={formData.TSH}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          T3:
          <input
            type="text"
            name="T3"
            value={formData.T3}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          TT4:
          <input
            type="text"
            name="TT4"
            value={formData.TT4}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          T4U:
          <input
            type="text"
            name="T4U"
            value={formData.T4U}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          FTI:
          <input
            type="text"
            name="FTI"
            value={formData.FTI}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sick:
          <input
            type="text"
            name="sick"
            value={formData.sick}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Pregnant:
          <input
            type="text"
            name="pregnant"
            value={formData.pregnant}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Thyroid Surgery:
          <input
            type="text"
            name="thyroid_surgery"
            value={formData.thyroid_surgery}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Lithium:
          <input
            type="text"
            name="lithium"
            value={formData.lithium}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Goitre:
          <input
            type="text"
            name="goitre"
            value={formData.goitre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Tumor:
          <input
            type="text"
            name="tumor"
            value={formData.tumor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          I131 Treatment:
          <input
            type="text"
            name="I131_treatment"
            value={formData.I131_treatment}
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

export default ThyroidPredictionForm;
