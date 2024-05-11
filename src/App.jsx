import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import for v6 or above
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Use this for older versions (below v6)
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

const App = () => {
  return (
    <Router>
      <div>   
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/blogs" exact element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
