import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-blue-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <p className="text-lg md:text-xl mb-4">
                "I've never felt better since I started using HealthAware. The personalized diet planner really helped me achieve my fitness goals!"
              </p>
              <div className="flex items-center">
                <img src="/path/to/user1.jpg" alt="User" className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-600">Fitness Enthusiast</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <p className="text-lg md:text-xl mb-4">
                "HealthAware has been a game-changer for me. The disease awareness articles helped me understand my condition better, and the nearby locations feature made it easy for me to find medical facilities."
              </p>
              <div className="flex items-center">
                <img src="/path/to/user2.jpg" alt="User" className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-sm text-gray-600">Health Advocate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <p className="text-lg md:text-xl mb-4">
                "I'm grateful for HealthAware's yoga posture correction feature. It has helped me improve my form and prevent injuries during my yoga practice."
              </p>
              <div className="flex items-center">
                <img src="/path/to/user3.jpg" alt="User" className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-semibold">Emily Brown</p>
                  <p className="text-sm text-gray-600">Yoga Enthusiast</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Testimonials;
