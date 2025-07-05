import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { apiPost } from '../api.js';

// Register Page Component
function RegisterPage({ login }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      // Call backend signup route
      const res = await apiPost('/api/auth/signup', { name, email, password, confirmPassword });
      // If backend returns user, auto-login with the same credentials
      if (res && res.user) {
        await login(false, email, password);
      } else {
        setError('Registration succeeded but login failed. Please try logging in manually.');
      }
    } catch (err) {
      // Handle duplicate email error from backend
      if (err.message && err.message.includes('E11000 duplicate key error')) {
        setError('An account with this email already exists. Please use a different email or login.');
      } else {
        setError(err.message || "Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div>
          <label className="block mb-2">Full Name</label>
          <input 
            type="text"
            name="name"
            required 
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input 
            type="email"
            name="email"
            required 
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block mb-2">Password</label>
          <input 
            type="password"
            name="password"
            required 
            minLength={6}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Create a password (minimum 6 characters)"
          />
        </div>
        <div>
          <label className="block mb-2">Confirm Password</label>
          <input 
            type="password"
            name="confirmPassword"
            required 
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Confirm your password"
          />
        </div>
        {error && <div className="text-red-600 text-center">{error}</div>}
        <button 
          type="submit" 
          className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register Now"}
        </button>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <button 
            type="button" 
            className="text-blue-600 hover:underline"
            onClick={() => navigate('/login')}
          >
            Login here
          </button>
        </p>
      </form>
    </section>
  );
}
export default RegisterPage;