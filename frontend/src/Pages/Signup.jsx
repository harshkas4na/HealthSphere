import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate,Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can implement the logic to create a new user account here
    
    // Clear the input fields after submission
    setName('');
    setEmail('');
    setPassword('');

    const response = await fetch("http://localhost:3000/register",{
      method:'POST',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      } 
    })
    const data = await response.json();
    window.localStorage.token=data.token;
    
  };

  return (
    <div>
      <Navbar />
    <div className="bg-gray-100 py-12 h-[50%] w-[50%] mx-auto my-24 drop-shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Sign Up</h2>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md py-2 px-4"
              required
            />
          </div>
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md py-2 px-4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>

          <div className='block my-2'>Already have a account <Link to="/login" className='text-red-400 font-semibold'>Login</Link></div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;
