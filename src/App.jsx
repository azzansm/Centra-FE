import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import Chart from './components/Chart';
import BatchInfo from './components/BatchInfo';
import BatchProgress from './components/BatchProgress';
import CheckBP from './components/CheckBP'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <div className="chart-section">
                <Chart />
              </div>
              <div className="dashboard" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '85%', 
                marginTop: '3%',
                }} >
                <div className="progress-section">
                  <ProgressBar value={70} />
                  <CheckBP />
                </div>
                <div className="batch-info-section">
                  <BatchInfo />
                </div>
              </div>
            </main>
          } />
          <Route path="/batch-progress" element={<BatchProgress />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
