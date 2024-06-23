import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import for v6 or above
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import WorkPage from './pages/WorkPage';
import DetailedWorkPage from './pages/DetailedWorkPage';
import GalleryPage from './pages/GalleryPage';
import DonationPage from './pages/DonationPage';


const App = () => {
  return (
    <Router>
      <div>   
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage/>}/>
          <Route path="/works" element={<WorkPage />} />
          <Route path='/works/:id' element={<DetailedWorkPage/>} />
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path="/donation" element={<DonationPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;