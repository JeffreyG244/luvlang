import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                LUV LANG
              </div>
              <span className="bg-green-500/20 text-green-300 border border-green-400/30 px-2 py-1 rounded text-sm">
                Basic
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white mb-4">Executive Dashboard</h1>
          <p className="text-xl text-purple-200">Your professional dating command center</p>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Welcome back, jeffreytgravescas!</h2>
            <p className="text-purple-200 mb-8">Ready to find your perfect match? Choose what you'd like to do next.</p>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-8 max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">LUV LANG</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Complete Your Executive Profile</h3>
              <p className="text-purple-200 mb-6">
                Set up your professional interests, personality traits, and preferences to 
                find sophisticated matches who share your values and lifestyle.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App