import { BookAudio, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <BookAudio size={32} className="logo-icon" />
              <span className="logo-text">AudioForge</span>
            </div>
            <p className="footer-description">
              Transform your eBooks into studio-quality audiobooks with advanced AI technology.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Github size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#">API</a>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          
          <div className="footer-links">
            <h4>Support</h4>
            <a href="#">Documentation</a>
            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 AudioForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
