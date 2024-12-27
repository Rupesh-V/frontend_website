import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import AboutUs from './components/aboutus/list';
import WhoEditPage from './components/aboutus/whoWeAre/edit';
import '../src/styles/common.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" 
               element={
                    <>
                        <Header />
                        <Sidebar />
                        <AboutUs />
                        
                    </>
               } 
        />
        <Route path="/who-we-are" 
               element={
                    <>
                        <Header />
                        <Sidebar />
                        <WhoEditPage />
                        
                    </>
               } 
        />
        {/* You can add other routes here for your dashboard or other pages */}
      </Routes>
    </Router>
  );
}

export default App;
