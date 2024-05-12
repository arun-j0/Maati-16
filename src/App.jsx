import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import for v6 or above
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import WorkPage from './pages/WorkPage';
import DetailedWorkPage from './pages/DetailedWorkPage';

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;