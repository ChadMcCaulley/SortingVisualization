import React from 'react'
import SortingVisualization from './components/SortingVisualization'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <SortingVisualization />
      </div>
    </div>
  );
}

export default App;
