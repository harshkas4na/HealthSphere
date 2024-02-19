import React from 'react';

const Features = () => {
  return (
    <div className="blue__gradient py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Our Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1: Health Issue Prediction */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Health Issue Prediction</h3>
              <p className="text-gray-700 mb-4">Predict health issues using advanced machine learning models.</p>
              <a href="/prediction" className="text-blue-500 font-semibold hover:underline">Learn More</a>
            </div>
          </div>

          {/* Feature 2: Disease Awareness */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Disease Awareness</h3>
              <p className="text-gray-700 mb-4">Access pre-generated articles on various diseases.</p>
              <a href="/diseaseAwareness" className="text-blue-500 font-semibold hover:underline">Learn More</a>
            </div>
          </div>

          {/* Feature 3: Personalized Diet Planner */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Personalized Diet Planner</h3>
              <p className="text-gray-700 mb-4">Plan your diet based on health calculators and AI models.</p>
              <a href="/personlizedDiet" className="text-blue-500 font-semibold hover:underline">Learn More</a>
            </div>
          </div>

          {/* Feature 4: Nearby Locations */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Nearby Locations</h3>
              <p className="text-gray-700 mb-4">Find hospitals, labs, and medical stores near you using Google Maps.</p>
              <a href="/locations" className="text-blue-500 font-semibold hover:underline">Learn More</a>
            </div>
          </div>

          {/* Feature 5: Correcting Yoga Postures */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Correcting Yoga Postures</h3>
              <p className="text-gray-700 mb-4">Improve your yoga postures with AI models.</p>
              <a href="/yoga" className="text-blue-500 font-semibold hover:underline">Learn More</a>
            </div>
          </div>

          {/* Feature 6: Disease Analytics */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Disease Analytics</h3>
              <p className="text-gray-700 mb-4">Get insights into health issues using real data and analytics.</p>
              <a href="/analytics" className="text-blue-500 font-semibold hover:underline">Learn More</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Features;
