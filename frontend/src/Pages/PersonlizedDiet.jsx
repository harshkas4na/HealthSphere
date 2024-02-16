import React, { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import ErrorPage from '../components/ErrorPage';

const DietPlannerPage = () => {
  // State for BMI calculator
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  // Function to calculate BMI
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  // State for user details form
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    diseases: '',
    dietPreference: '',
    goals: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., storing data)
    console.log(formData);
  };
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const retrievedUser = JSON.parse(localStorage.getItem('user'));
    if (retrievedUser) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, []);

  if (!userLoggedIn) {
    return <ErrorPage />; // Render ErrorPage component if user is not logged in
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Diet Planner</h1>
        <hr className="mb-4" />

        {/* BMI Calculator */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-6">
            <h2 className="text-white text-lg font-semibold mb-2">BMI Calculator</h2>
            <div className="flex items-center mb-4">
              <input
                type="number"
                className="w-20 mr-4 py-2 px-3 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <input
                type="number"
                className="w-20 mr-4 py-2 px-3 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <button onClick={calculateBMI} className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 transition duration-300">Calculate BMI</button>
            </div>
            {bmi && <p className="text-white">Your BMI: {bmi}</p>}
          </div>
        </div>

        {/* User Details Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">User Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-medium mb-1">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="diseases" className="block text-gray-700 font-medium mb-1">Known Diseases:</label>
              <input
                type="text"
                id="diseases"
                name="diseases"
                value={formData.diseases}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dietPreference" className="block text-gray-700 font-medium mb-1">Diet Preference:</label>
              <input
                type="text"
                id="dietPreference"
                name="dietPreference"
                value={formData.dietPreference}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="goals" className="block text-gray-700 font-medium mb-1">Goals:</label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md py-2
                px-3 focus:outline-none h-32"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    
    export default DietPlannerPage;
    