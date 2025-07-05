import React from "react";
import { useNavigate } from 'react-router-dom';

// Login Page Component

function LoginPage({ login }) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  // Updated: login(email, password) signature, no isAdmin arg
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  // Optionally, you can remove this button or keep for demo, but it now just calls login(email, password)
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <section className="py-12 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block mb-2">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter your password"
          />
        </div>
        {error && <div className="text-red-600 text-center">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Login as User
        </button>
        <button
          type="button"
          onClick={handleAdminLogin}
          className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors mt-2"
        >
          Login as Admin
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => navigate('/register')}
          >
            Register here
          </button>
        </p>
      </form>
    </section>
  );
}
export default LoginPage;