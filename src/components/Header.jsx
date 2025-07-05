import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Header Component
function Header({ user, role, logout, darkMode, toggleDarkMode }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <header className={`py-4 shadow-md transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="text-xl font-bold">Khokhar Welfare Foundation</h1>
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className={`capitalize hover:text-blue-600 transition-colors ${currentPath === '/' ? 'text-blue-600 font-medium' : ''}`}>Home</Link>
          <Link to="/about" className={`capitalize hover:text-blue-600 transition-colors ${currentPath === '/about' ? 'text-blue-600 font-medium' : ''}`}>About</Link>
          {!user && <>
            <Link to="/login" className={`capitalize hover:text-blue-600 transition-colors ${currentPath === '/login' ? 'text-blue-600 font-medium' : ''}`}>Login</Link>
            <Link to="/register" className={`capitalize hover:text-blue-600 transition-colors ${currentPath === '/register' ? 'text-blue-600 font-medium' : ''}`}>Register</Link>
          </>}
          {user && (
            <>
              {role === 'admin' && (
                <Link to="/admin-dashboard" className={`hover:text-blue-600 transition-colors ${currentPath === '/admin-dashboard' ? 'text-blue-600 font-medium' : ''}`}>Admin Dashboard</Link>
              )}
              <Link to="/my-donations" className={`hover:text-blue-600 transition-colors ${currentPath === '/my-donations' ? 'text-blue-600 font-medium' : ''}`}>My Donations</Link>
              <Link to="/usage-history" className={`hover:text-blue-600 transition-colors ${currentPath === '/usage-history' ? 'text-blue-600 font-medium' : ''}`}>Usage History</Link>
              <Link to="/donate" className={`hover:text-blue-600 transition-colors ${currentPath === '/donate' ? 'text-blue-600 font-medium' : ''}`}>Donate</Link>
              <button 
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </>
          )}
        </nav>
        {/* Mobile menu button */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile nav links */}
      {mobileMenuOpen && (
        <nav className="flex flex-col space-y-2 px-4 pb-4 md:hidden bg-white dark:bg-gray-800 shadow-md">
          <Link to="/" className={`capitalize hover:text-blue-600 transition-colors ${currentPath === '/' ? 'text-blue-600 font-medium' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className={`capitalize hover:text-blue-600 transition-colors ${currentPath === '/about' ? 'text-blue-600 font-medium' : ''}`} onClick={() => setMobileMenuOpen(false)}>About</Link>
          {!user && <>
            <Link to="/login" className={`capitalize hover:text-blue-600 transition-colors ${currentPath === '/login' ? 'text-blue-600 font-medium' : ''}`} onClick={() => setMobileMenuOpen(false)}>Login</Link>
            <Link to="/register" className={`capitalize hover:text-blue-600 transition-colors ${currentPath === '/register' ? 'text-blue-600 font-medium' : ''}`} onClick={() => setMobileMenuOpen(false)}>Register</Link>
          </>}
          {user && (
            <>
              {role === 'admin' && (
                <Link to="/admin-dashboard" className={`hover:text-blue-600 transition-colors ${currentPath === '/admin-dashboard' ? 'text-blue-600 font-medium' : ''}`} onClick={() => setMobileMenuOpen(false)}>Admin Dashboard</Link>
              )}
              <Link to="/my-donations" className={`hover:text-blue-600 transition-colors ${currentPath === '/my-donations' ? 'text-blue-600 font-medium' : ''}`} onClick={() => setMobileMenuOpen(false)}>My Donations</Link>
              <Link to="/usage-history" className={`hover:text-blue-600 transition-colors ${currentPath === '/usage-history' ? 'text-blue-600 font-medium' : ''}`} onClick={() => setMobileMenuOpen(false)}>Usage History</Link>
              <Link to="/donate" className={`hover:text-blue-600 transition-colors ${currentPath === '/donate' ? 'text-blue-600 font-medium' : ''}`} onClick={() => setMobileMenuOpen(false)}>Donate</Link>
              <button 
                onClick={() => { logout(); setMobileMenuOpen(false); }}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
export default Header;