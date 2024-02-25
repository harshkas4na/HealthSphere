import React, { useState } from "react";

const XRayPredictionForm = () => {
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", formData.file);

    const response = await fetch("http://localhost:5000/x_ray", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleChange} />
        <button type="submit">Predict</button>
      </form>
      {result && (
        <div>
          <p>Probability: {result.probability}</p>
          <p>Class: {result.class}</p>
        </div>
      )}
    </div>
  );
};

export default XRayPredictionForm;
