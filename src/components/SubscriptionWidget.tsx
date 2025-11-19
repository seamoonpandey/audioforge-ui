import { CreditCard, Crown, Zap } from 'lucide-react';
import './SubscriptionWidget.css';

const SubscriptionWidget = () => {
  return (
    <section className="subscription-widget">
      <div className="widget-card">
        <div className="widget-header">
          <div className="widget-icon">
            <Crown size={28} />
          </div>
          <div>
            <h3 className="widget-title">Current Plan</h3>
            <p className="widget-plan">Professional</p>
          </div>
        </div>

        <div className="widget-stats">
          <div className="widget-stat">
            <div className="stat-label">Credits Remaining</div>
            <div className="stat-value">450 / 1,000</div>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: '45%' }}></div>
            </div>
          </div>

          <div className="widget-stat">
            <div className="stat-label">Renewal Date</div>
            <div className="stat-value">Feb 15, 2024</div>
          </div>
        </div>

        <div className="widget-benefits">
          <div className="benefit-item">
            <Zap size={16} />
            <span>1,000 credits/month</span>
          </div>
          <div className="benefit-item">
            <CreditCard size={16} />
            <span>Priority processing</span>
          </div>
        </div>

        <button className="upgrade-btn">
          <Crown size={18} />
          Upgrade to Enterprise
        </button>
      </div>
    </section>
  );
};

export default SubscriptionWidget;
