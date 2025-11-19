import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Voices from './pages/Voices';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Subscription from './pages/Subscription';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/books" element={<Books />} />
        <Route path="/dashboard/book/:id" element={<BookDetails />} />
        <Route path="/dashboard/voices" element={<Voices />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/subscription" element={<Subscription />} />
      </Routes>
    </Router>
  );
};

export default App;
