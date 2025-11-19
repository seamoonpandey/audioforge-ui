import { Star } from 'lucide-react';
import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Author & Publisher',
      avatar: '👩‍💼',
      rating: 5,
      text: 'AudioForge transformed my entire catalog into audiobooks in days. The AI voices are incredibly natural, and my readers love the professional quality.',
    },
    {
      name: 'James Chen',
      role: 'Educational Content Creator',
      avatar: '👨‍🏫',
      rating: 5,
      text: 'The chapter-wise editing feature is a game-changer. I can fine-tune each section perfectly. This tool has saved me thousands in production costs.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Independent Author',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'I was skeptical about AI narration, but this exceeded all expectations. The emotion and pacing are spot-on. My audiobook sales have tripled!',
    },
    {
      name: 'Michael Park',
      role: 'Digital Publisher',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Batch processing is incredible. We converted our entire library in a weekend. The commercial rights option makes this perfect for our business.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">
            Loved by
            <span className="gradient-text"> Creators Worldwide</span>
          </h2>
          <p className="section-subtitle">
            Join thousands of authors and publishers who trust AudioForge
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card glass ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
