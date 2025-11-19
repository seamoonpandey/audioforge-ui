import { Check, Zap, Crown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      icon: <Zap size={24} />,
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for trying out AudioForge',
      features: [
        '1 book conversion per month',
        'Standard AI voices',
        'MP3 export only',
        'Basic chapter splitting',
        'Community support',
        'Watermarked audio',
      ],
      cta: 'Get Started Free',
      highlighted: false,
    },
    {
      name: 'Pro',
      icon: <Crown size={24} />,
      price: { monthly: 29, yearly: 290 },
      description: 'For serious authors and creators',
      features: [
        'Unlimited conversions',
        'Premium neural voices (50+)',
        'All export formats (MP3, WAV, M4B)',
        'Advanced editing tools',
        'Priority support',
        'No watermarks',
        'Batch processing',
        'Custom voice training',
      ],
      cta: 'Start Pro Trial',
      highlighted: true,
    },
    {
      name: 'Studio',
      icon: <Crown size={24} />,
      price: { monthly: 99, yearly: 990 },
      description: 'Enterprise-grade audiobook production',
      features: [
        'Everything in Pro',
        'Commercial usage rights',
        'White-label exports',
        'API access',
        'Dedicated account manager',
        'Custom voice cloning',
        'Team collaboration (5 seats)',
        'Advanced analytics',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <div className="section-header">
          <h2 className="section-title">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect plan for your audiobook creation needs
          </p>
        </div>
        
        <div className="billing-toggle">
          <button
            className={billingCycle === 'monthly' ? 'active' : ''}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={billingCycle === 'yearly' ? 'active' : ''}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
            <span className="discount-badge">Save 17%</span>
          </button>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card glass ${plan.highlighted ? 'highlighted' : ''}`}
            >
              {plan.highlighted && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-icon">{plan.icon}</div>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price[billingCycle]}</span>
                <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              
              <Link to="/register" className={`plan-cta ${plan.highlighted ? 'primary' : 'secondary'}`}>
                {plan.cta}
              </Link>
              
              <div className="plan-features">
                {plan.features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <Check size={18} className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
