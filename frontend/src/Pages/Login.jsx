import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate,Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can implement the logic to authenticate the user here
    
    // Clear the input fields after submission
    
    
    const response = await fetch("http://localhost:3000/login",{
      method:'POST',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json',
        'authorization':`Bearer ${window.localStorage.token}`
      }

    })
    const data = await response.json(); // Parse response JSON
    
    if(data.success){ // Check if login was successful
      navigate('/Home');
      // setloggedIn(true);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="bg-gray-100 py-12 h-[50%] w-[50%] mx-auto my-24 drop-shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Login</h2>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
            Login
          </button>
          <div className='block my-2'>If Not Have a account , Please <Link to="/signup" className='text-red-400 font-semibold'>Sign-Up</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;
