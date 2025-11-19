import { Link } from 'react-router-dom';
import { BookAudio } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <BookAudio size={32} className="logo-icon" />
          <span className="logo-text">AudioForge</span>
        </Link>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#features" className="navbar-link" onClick={(e) => handleSmoothScroll(e, 'features')}>Features</a>
          <a href="#how-it-works" className="navbar-link" onClick={(e) => handleSmoothScroll(e, 'how-it-works')}>How It Works</a>
          <a href="#pricing" className="navbar-link" onClick={(e) => handleSmoothScroll(e, 'pricing')}>Pricing</a>
          <a href="#testimonials" className="navbar-link" onClick={(e) => handleSmoothScroll(e, 'testimonials')}>Testimonials</a>
          <a href="#faq" className="navbar-link" onClick={(e) => handleSmoothScroll(e, 'faq')}>FAQ</a>
        
          <div className="navbar-actions">
            <Link to="/login" className="btn-secondary" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            <Link to="/register" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
