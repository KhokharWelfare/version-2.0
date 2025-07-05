import React, { useState, useEffect } from 'react';
import { apiGet, apiPost, apiUpload } from './api.js';
import './custom-styles.css';
  // Fetch donations and usage history from backend on mount
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const [donationsData, usageData] = await Promise.all([
  //         apiGet('/api/donations'),
  //         apiGet('/api/usage'),
  //       ]);
  //       setDonations(donationsData);
  //       setUsageHistory(usageData);
  //     } catch (err) {
  //       // Optionally handle error
  //     }
  //   }
  //   fetchData();
  // }, []);
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import DonatePage from './pages/DonatePage.jsx';
import MyDonationsPage from './pages/MyDonationPage.jsx';
import UsageHistoryPage from './pages/UsageHistoryPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

function AppContent() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('guest'); // guest, user, admin
  const [donations, setDonations] = useState([]);
  const [usageHistory, setUsageHistory] = useState([]);
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();


  // Backend authentication
  // Robust login: matches backend API response structure
  const login = async (emailArg, passwordArg) => {
    console.log('Logging in with:', emailArg, passwordArg);
    try {
      const email = emailArg && emailArg.trim();
      const password = passwordArg && passwordArg.trim();
      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }
      const data = await apiPost('/api/auth/login', { email, password });
      if (data && data.status === 'success' && data.data && data.data.user) {
        setUser(data.data.user);
        setRole(data.data.user.role || 'user');
        navigate('/');
      } else if (data && data.message) {
        alert('Login failed: ' + data.message);
      } else {
        alert('Login failed: Invalid credentials or server error.');
      }
    } catch (err) {
      // Try to show backend error if available
      if (err && err.response && err.response.data && err.response.data.message) {
        alert('Login failed: ' + err.response.data.message);
      } else {
        alert('Login failed: ' + (err?.message || 'Unknown error'));
      }
      setUser(null);
      setRole('guest');
    }
  };

  const logout = async () => {
    try {
      // Logout is GET /api/auth/logout
      await apiGet('/api/auth/logout');
    } catch {}
    setUser(null);
    setRole('guest');
    navigate('/');
  };

  // Donation submission
  const submitDonation = async (amount, proof) => {
    try {
      const formData = new FormData();
      formData.append('amount', amount);
      formData.append('proof', proof);
      // POST /api/donations/
      const data = await apiUpload('/api/donations', formData);
      setDonations([data, ...donations]);
      alert('Donation submitted successfully!');
    } catch (err) {
      alert('Donation failed: ' + err.message);
    }
  };

  // Usage history submission (admin only)
  const addUsageRecord = async (recipient, amount, proof) => {
    try {
      const formData = new FormData();
      formData.append('recipient', recipient);
      formData.append('amount', amount);
      formData.append('proof', proof);
      // POST /api/usage/
      const data = await apiUpload('/api/usage', formData);
      setUsageHistory([data, ...usageHistory]);
      alert('Usage record added successfully!');
    } catch (err) {
      alert('Usage record failed: ' + err.message);
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300${darkMode ? ' dark-mode bg-gray-900 text-white' : ' bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <Header 
        user={user} 
        role={role} 
        logout={logout}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage login={login} />} />
          <Route path="/register" element={<RegisterPage login={login} />} />
          {/* Donations: user only, fetches from /api/donations (POST for create, GET /me for user's donations) */}
          <Route path="/donate" element={role !== 'guest' ? <DonatePage submitDonation={submitDonation} /> : <Navigate to="/login" />} />
          <Route path="/my-donations" element={role !== 'guest' ? <MyDonationsPage donations={donations} /> : <Navigate to="/login" />} />
          {/* Usage history: all users see /api/usage (GET) */}
          <Route path="/usage-history" element={<UsageHistoryPage usageHistory={usageHistory} />} />
          {/* Admin dashboard: admin only, fetches all donations and usage */}
          <Route path="/admin-dashboard" element={role === 'admin' ? (
            <AdminDashboard 
              users={users} 
              donations={donations} 
              usageHistory={usageHistory} 
              addUsageRecord={addUsageRecord}
            />
          ) : <Navigate to="/" />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}