import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <Zap className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-2xl font-bold text-gray-900">Spark</span>
                </Link>
              </div>
              <div className="flex items-center">
                <Link to="/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <Link to="/projects" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectList />} />
          </Routes>
        </main>

        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2023 Creative Dog India. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;