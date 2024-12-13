import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Search from './pages/Search';
import Posts from './pages/Posts';
import User from './pages/User';
import Users from './pages/Users';
import VideoDetails from './pages/VideoDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Search
          </NavLink>
          <NavLink to="/posts" className={({ isActive }) => (isActive ? 'active' : '')}>
            Posts
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => (isActive ? 'active' : '')}>
            Users
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Search />} /> 
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
