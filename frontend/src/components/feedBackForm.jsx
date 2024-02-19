import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic to submit the feedback here
    console.log('Feedback submitted:', feedback);
    // Clear the feedback field after submission
    setFeedback('');
  };

  return (
    <div className="blue__gradient py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Leave Your Feedback</h2>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md py-2 px-4"
              required
            />
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback..."
            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
