import Card from 'components/card';
import Register from 'pages/Register';
import Navbar from 'components/navbar';
import HomePage from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Profile from 'pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { setToken } from 'auth/token';

export default function AppRouter() {
  const [search, setSearch] = useState('');

  return (
    <Router>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<HomePage search={search} />} />
        <Route path="/upload" element={<Card />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
