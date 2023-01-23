import Card from 'components/card';
import Register from 'pages/Login';
import Navbar from 'components/navbar';
import HomePage from 'pages/Home';
import Login from 'pages/Register';
import NotFound from 'pages/NotFound';
import Profile from 'pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

export default function AppRouter() {
  const [token, setToken] = useState('');
  const [search, setSearch] = useState('');
  console.log(search);

  if (token) {
    return <Route path="/login" />;
  }

  return (
    <Router>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<HomePage search={search} />} />
        <Route path="/upload" element={<Card />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
