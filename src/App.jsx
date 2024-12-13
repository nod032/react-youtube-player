import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Search from './pages/Search.jsx';
import VideoDetails from './routes/VideoDetails.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Video Finder</h1>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
