import { useState } from 'react';
import { Check, CreditCard, Zap, TrendingUp, Download, Headphones } from 'lucide-react';
import DashboardNav from '../components/DashboardNav';
import './Subscription.css';

const Subscription = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const currentPlan = {
    name: 'Pro',
    price: 29,
    billingCycle: 'monthly',
    nextBilling: 'February 15, 2024',
    creditsPerMonth: 1000,
    creditsUsed: 550,
    creditsRemaining: 450,
  };

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      credits: 100,
      features: [
        '100 credits per month',
        'Basic voices (3)',
        'Standard narration',
        'Email support',
        'Basic audio quality',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: { monthly: 29, yearly: 290 },
      credits: 1000,
      features: [
        '1,000 credits per month',
        'All voices (15+)',
        'Multiple voice styles',
        'Priority support',
        'HD audio quality',
        'Advanced settings',
        'Batch conversion',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: { monthly: 99, yearly: 990 },
      credits: 5000,
      features: [
        '5,000 credits per month',
        'All voices + custom',
        'API access',
        'Dedicated support',
        'Ultra HD quality',
        'White-label option',
        'Priority processing',
        'Team collaboration',
      ],
      popular: false,
    },
  ];

  const usageHistory = [
    { month: 'January 2024', creditsUsed: 850, creditsTotal: 1000 },
    { month: 'December 2023', creditsUsed: 920, creditsTotal: 1000 },
    { month: 'November 2023', creditsUsed: 780, creditsTotal: 1000 },
    { month: 'October 2023', creditsUsed: 650, creditsTotal: 1000 },
  ];

  const paymentHistory = [
    { date: 'Jan 15, 2024', amount: 29, status: 'Paid', plan: 'Pro Monthly' },
    { date: 'Dec 15, 2023', amount: 29, status: 'Paid', plan: 'Pro Monthly' },
    { date: 'Nov 15, 2023', amount: 29, status: 'Paid', plan: 'Pro Monthly' },
  ];

  const getUsagePercentage = () => {
    return (currentPlan.creditsUsed / currentPlan.creditsPerMonth) * 100;
  };

  return (
    <div className="subscription-page">
      <DashboardNav showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
      
      <div className="subscription-container">
        <div className="subscription-header">
          <div>
            <h1 className="page-title">Subscription & Billing</h1>
            <p className="page-subtitle">Manage your plan and billing information</p>
          </div>
        </div>

        {/* Current Plan Overview */}
        <div className="current-plan-overview">
          <div className="plan-overview-header">
            <div className="plan-badge-large">
              <Zap size={24} />
              <div>
                <div className="plan-name-large">{currentPlan.name} Plan</div>
                <div className="plan-price-large">${currentPlan.price}/month</div>
              </div>
            </div>
            <button className="btn-change-plan">Change Plan</button>
          </div>

          <div className="plan-stats-grid">
            <div className="plan-stat">
              <div className="plan-stat-icon">
                <CreditCard size={20} />
              </div>
              <div>
                <div className="plan-stat-label">Next Billing</div>
                <div className="plan-stat-value">{currentPlan.nextBilling}</div>
              </div>
            </div>
            <div className="plan-stat">
              <div className="plan-stat-icon">
                <Headphones size={20} />
              </div>
              <div>
                <div className="plan-stat-label">Credits Used</div>
                <div className="plan-stat-value">{currentPlan.creditsUsed} / {currentPlan.creditsPerMonth}</div>
              </div>
            </div>
            <div className="plan-stat">
              <div className="plan-stat-icon">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="plan-stat-label">Credits Remaining</div>
                <div className="plan-stat-value">{currentPlan.creditsRemaining}</div>
              </div>
            </div>
          </div>

          <div className="usage-bar-section">
            <div className="usage-bar-header">
              <span className="usage-label">Monthly Usage</span>
              <span className="usage-percentage">{getUsagePercentage().toFixed(0)}%</span>
            </div>
            <div className="usage-bar">
              <div 
                className="usage-bar-fill" 
                style={{ width: `${getUsagePercentage()}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="billing-toggle-section">
          <h2 className="section-title-sub">Choose Your Plan</h2>
          <div className="billing-toggle">
            <button 
              className={`billing-toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`billing-toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              <span className="save-badge">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`plan-card-sub ${plan.popular ? 'popular' : ''} ${plan.name === currentPlan.name ? 'current' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              {plan.name === currentPlan.name && <div className="current-badge">Current Plan</div>}
              
              <div className="plan-card-header">
                <h3 className="plan-card-name">{plan.name}</h3>
                <div className="plan-card-price">
                  <span className="price-amount">${plan.price[billingCycle]}</span>
                  <span className="price-period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <div className="plan-card-credits">{plan.credits.toLocaleString()} credits/month</div>
              </div>

              <ul className="plan-features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="plan-feature">
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`btn-select-plan ${plan.name === currentPlan.name ? 'current' : ''}`}
                disabled={plan.name === currentPlan.name}
              >
                {plan.name === currentPlan.name ? 'Current Plan' : plan.name === 'Free' ? 'Downgrade' : 'Upgrade'}
              </button>
            </div>
          ))}
        </div>

        {/* Usage History */}
        <div className="subscription-section">
          <h2 className="section-title-sub">Usage History</h2>
          <div className="usage-history">
            {usageHistory.map((item, index) => (
              <div key={index} className="usage-item">
                <div className="usage-month">{item.month}</div>
                <div className="usage-credits">
                  {item.creditsUsed} / {item.creditsTotal} credits
                </div>
                <div className="usage-bar-small">
                  <div 
                    className="usage-bar-fill-small"
                    style={{ width: `${(item.creditsUsed / item.creditsTotal) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment History */}
        <div className="subscription-section">
          <h2 className="section-title-sub">Payment History</h2>
          <div className="payment-table">
            <div className="payment-row header">
              <div>Date</div>
              <div>Plan</div>
              <div>Amount</div>
              <div>Status</div>
              <div>Invoice</div>
            </div>
            {paymentHistory.map((payment, index) => (
              <div key={index} className="payment-row">
                <div>{payment.date}</div>
                <div>{payment.plan}</div>
                <div>${payment.amount}.00</div>
                <div>
                  <span className="status-badge paid">{payment.status}</span>
                </div>
                <div>
                  <button className="btn-download-invoice">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
