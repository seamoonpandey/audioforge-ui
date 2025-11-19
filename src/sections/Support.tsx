import { Mail, MessageCircle, Book } from 'lucide-react';
import './Support.css';

const Support = () => {
  return (
    <section className="support">
      <div className="support-container">
        <div className="support-content">
          <h2 className="support-title">Still Have Questions?</h2>
          <p className="support-description">
            Our support team is here to help you get the most out of AudioForge. 
            Reach out anytime for personalized assistance.
          </p>
          
          <div className="support-options">
            <a href="mailto:support@audioforge.com" className="support-card">
              <div className="support-icon">
                <Mail size={28} />
              </div>
              <h3>Email Support</h3>
              <p>support@audioforge.com</p>
              <span className="support-badge">Response within 24h</span>
            </a>
            
            <a href="#" className="support-card">
              <div className="support-icon">
                <MessageCircle size={28} />
              </div>
              <h3>Live Chat</h3>
              <p>Chat with our team</p>
              <span className="support-badge">Available 9am-6pm EST</span>
            </a>
            
            <a href="#" className="support-card">
              <div className="support-icon">
                <Book size={28} />
              </div>
              <h3>Documentation</h3>
              <p>Browse our guides</p>
              <span className="support-badge">Comprehensive tutorials</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
