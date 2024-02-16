import React from 'react';
import Navbar from '../components/Navbar';

const HealthIssuePredictionPage = () => {
  const scrollToModels = () => {
    const modelsSection = document.getElementById('models');
    modelsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Health Issue Prediction</h1>
        <hr className="mb-4" />

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Heart Diseases */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Heart Diseases</h2>
            <p className="text-gray-700 mb-4">Learn about our model for predicting heart diseases.</p>
            <button onClick={scrollToModels} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Skin Diseases */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Skin Diseases</h2>
            <p className="text-gray-700 mb-4">Discover how our model predicts various skin diseases.</p>
            <button onClick={scrollToModels} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Diabetes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Diabetes</h2>
            <p className="text-gray-700 mb-4">Explore our model for predicting diabetes.</p>
            <button onClick={scrollToModels} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Info Card and Models Section */}
        <div id="models" className="mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">Our Model</h2>
            <p className="text-gray-700 mb-4">Here you can find information about our prediction model and how it works.</p>
            <button onClick={scrollToModels} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Scroll to Models
            </button>
          </div>

          {/* Models Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Heart Diseases Model */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Heart Diseases Prediction Model</h3>
              {/* Include your model details and predictions here */}
            </div>

            {/* Skin Diseases Model */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Skin Diseases Prediction Model</h3>
              {/* Include your model details and predictions here */}
            </div>

            {/* Diabetes Model */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Diabetes Prediction Model</h3>
              {/* Include your model details and predictions here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthIssuePredictionPage;
