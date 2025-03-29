import React, { useState } from 'react';
import {
  LineChart,
  Moon,
  Sun,
  Search,
  Trophy,
  BarChart3,
  ArrowRight,
  Twitter,
  MessageSquare,
} from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      {/* Navigation */}
      <nav className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} fixed w-full z-50 shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <LineChart className="text-blue-500" size={32} />
              <span className="ml-2 font-bold text-xl">DayTradingAnalytics</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Tools</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Knowledge Base</a>
              <a href="#" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-slate-700 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className={`relative ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Unlock Your Trading Edge
              </h1>
              <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
                Empower Your Trades with Hidden Insights
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto">
                Explore Tools
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tool Section */}
      <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Tool</h2>
            <p className="text-slate-400">Discover our most popular trading analysis tool</p>
          </div>
          <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} rounded-xl p-8 flex flex-col md:flex-row items-center gap-8`}>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
                alt="TSLA Stock Chart"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">trustthelevels.com</h3>
              <p className="text-slate-400 mb-6">
                Daily Levels for Retail Favorites. Get precise entry and exit points for the most traded stocks in the market.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                Try It Now
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Uncover Hidden Market Knowledge</h3>
              <p className="text-slate-400">Advanced analytics to reveal market patterns and opportunities others miss.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Gaps & Volume Like a Pro</h3>
              <p className="text-slate-400">Professional-grade tools for gap analysis and volume profiling.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Tools Built for Retail Success</h3>
              <p className="text-slate-400">Powerful trading tools accessible to everyone, not just institutions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Coming Soon</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} p-6 rounded-xl`}>
              <img
                src="https://images.unsplash.com/photo-1642790551116-18e150f248e5?auto=format&fit=crop&w=800&q=80"
                alt="Gap Detection Preview"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Gap Detection</h3>
              <p className="text-slate-400">Advanced algorithm to identify and analyze market gaps in real-time.</p>
              <span className="inline-block mt-4 px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Coming Soon</span>
            </div>
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} p-6 rounded-xl`}>
              <img
                src="https://images.unsplash.com/photo-1642790595397-b4c50aa19c6e?auto=format&fit=crop&w=800&q=80"
                alt="Volume Footprints Preview"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Volume Footprints</h3>
              <p className="text-slate-400">Detailed volume analysis to understand market dynamics at every price level.</p>
              <span className="inline-block mt-4 px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-slate-800' : 'bg-slate-900'} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Built by Traders, for Traders</h3>
              <p className="text-slate-400">Join our community of successful traders and take your trading to the next level.</p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <MessageSquare size={24} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 DayTradingAnalytics.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;