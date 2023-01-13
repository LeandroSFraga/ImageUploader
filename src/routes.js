import Card from 'components/card';
import HomePage from 'pages/Home/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/upload' element={<Card/>}/>
      </Routes>
    </Router>
  );
}