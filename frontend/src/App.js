import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminDashboard from './components/AdminDashboard';
import TutorList from './components/TutorList';
import SelectedTutors from './components/SelectedTutors';
import ThankCard from './components/Thank';
import AboutUs from './components/AboutUs';

function App() {
    return (
        <Router>
            <nav className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
    <div className="flex items-center justify-between py-3 px-6"> {/* Increased px-6 for more spacing */}
        {/* Left side - Logo with consistent margin */}
        <div className="flex items-center">
           <Link to="/aboutus">
            <div className="flex items-center justify-center h-14 w-auto lg:h-16 rounded-2xl overflow-hidden bg-white backdrop-blur-lg p-1 shadow-xl ml-4 lg:ml-6"> {/* Added ml-4 lg:ml-6 */}
                <img 
                    src="/Jyamiti Horizo.png"
                    alt="Jyamiti Logo"
                    className="h-full w-auto object-contain"
                />
            </div>
            </Link>
        </div>
        
       
    </div>
</nav>
            <div className="min-h-screen bg-slate-900 text-white">
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/thankyou" element={<ThankCard/>} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/tutors" element={<TutorList />} />
                    <Route path="/admin/selected" element={<SelectedTutors />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;