import React, { useState, useEffect, useRef } from 'react';

const List = ({ places}) => {
  const [elRefs, setElRefs] = useState([]);
  
  // useEffect(() => {
  //   setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || useRef()));
  // }, [places]);

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Nearby Locations</h2>
      {false ? (
        <div className="flex items-center justify-center h-40">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <div className="flex justify-between mb-4">
            <div className="w-1/2 pr-2">
              <label htmlFor="type" className="block mb-1 font-semibold">Type</label>
              <select
                id="type"
                value="Hotels"
                onChange={(e) => setType(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-4"
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="rating" className="block mb-1 font-semibold">Rating</label>
              <select
                id="rating"
                value="ALL"
                onChange={(e) => setRating(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-4"
              >
                <option value="">All</option>
                <option value="3">Above 3.0</option>
                <option value="4">Above 4.0</option>
                <option value="4.5">Above 4.5</option>
              </select>
            </div>
          </div>
          <div className="overflow-y-auto max-h-72">
            {places.map((place, index) => (
              <div key={index} ref={elRefs[index]} className="mb-4 p-4 bg-white rounded-md shadow-md">
                {/* Render your place details here */}
                <p className="font-semibold">{place.name}</p>
                <p className="text-gray-600">{place.address}</p>
                <p className="text-gray-600">Rating: {place.rating}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
