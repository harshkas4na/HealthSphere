import React, { useState } from "react";

const SkinDiseasePredictionForm = () => {
  const [result, setResult] = useState(null);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5000/skin", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <br />
        <button type="submit">Predict</button>
      </form>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default SkinDiseasePredictionForm;
