import Card from 'components/card';
import Register from 'pages/Login';
import Navbar from 'components/navbar';
import HomePage from 'pages/Home';
import Login from 'pages/Register';
import NotFound from 'pages/NotFound';
import Profile from 'pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<Card />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
