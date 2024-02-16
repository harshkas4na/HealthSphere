import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import List from '../components/List';
import Map from '../components/Map';

const Location = () => {
  // Initialize the places state
  const [places, setPlaces] = useState([]);

  // Fetch places data
  useEffect(() => {
    // Your logic to fetch places data goes here
    // For example:
    // fetch('your_api_endpoint')
    //   .then(response => response.json())
    //   .then(data => setPlaces(data));
    // Replace 'your_api_endpoint' with your actual API endpoint

    // For demonstration purposes, initializing places with sample data
    const samplePlaces = [
      { id: 1, name: 'Hospital A', address: '123 Main St', rating: 4.5 },
      { id: 2, name: 'Hospital B', address: '456 Elm St', rating: 4.0 },
      // Add more sample place objects as needed
    ];
    setPlaces(samplePlaces);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <Navbar />
      <div className="float-right my-4">
        <input
          type="text"
          placeholder="Search..."
          name="SearchLocation"
          className="w-200 bg-blue-100 border-2 border-gray-500 rounded-sm p-1"
        />
        <button className="mx-2 bg-blue-700 font-bold text-white p-2 rounded-full">Search</button>
      </div>

      <div className="my-16 flex justify-between items-center gap-4">
        <div>
          {/* Pass the places array as a prop to the List component */}
          <List places={places} />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Location;
