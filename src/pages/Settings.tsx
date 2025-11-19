import { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Key, CreditCard, Shield, LogOut, Save } from 'lucide-react';
import DashboardNav from '../components/DashboardNav';
import './Settings.css';

const Settings = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<'account' | 'notifications' | 'api' | 'billing'>('account');

  // Account settings state
  const [accountSettings, setAccountSettings] = useState({
    fullName: 'Sarah Mitchell',
    email: 'sarah@example.com',
    username: 'sarahmitchell',
    timezone: 'America/New_York',
  });

  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    conversionComplete: true,
    creditsLow: true,
    newVoices: false,
    weeklyReport: true,
    marketingEmails: false,
  });

  // API settings state
  const [apiKey] = useState('sk_live_abc123...xyz789');
  const [showApiKey, setShowApiKey] = useState(false);

  const handleSaveAccount = () => {
    console.log('Saving account settings', accountSettings);
  };

  const handleSaveNotifications = () => {
    console.log('Saving notification settings', notificationSettings);
  };

  const handleGenerateNewKey = () => {
    console.log('Generating new API key');
  };

  const handleRevokeKey = () => {
    console.log('Revoking API key');
  };

  return (
    <div className="settings-page">
      <DashboardNav showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
      
      <div className="settings-container">
        {/* Page Header */}
        <div className="settings-header">
          <div className="header-icon-large">
            <SettingsIcon size={32} />
          </div>
          <div>
            <h1 className="page-title">Settings</h1>
            <p className="page-subtitle">Manage your account and application preferences</p>
          </div>
        </div>

        <div className="settings-layout">
          {/* Sidebar Tabs */}
          <div className="settings-sidebar">
            <button 
              className={`sidebar-tab ${activeTab === 'account' ? 'active' : ''}`}
              onClick={() => setActiveTab('account')}
            >
              <User size={20} />
              <span>Account</span>
            </button>
            <button 
              className={`sidebar-tab ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              <Bell size={20} />
              <span>Notifications</span>
            </button>
            <button 
              className={`sidebar-tab ${activeTab === 'api' ? 'active' : ''}`}
              onClick={() => setActiveTab('api')}
            >
              <Key size={20} />
              <span>API Keys</span>
            </button>
            <button 
              className={`sidebar-tab ${activeTab === 'billing' ? 'active' : ''}`}
              onClick={() => setActiveTab('billing')}
            >
              <CreditCard size={20} />
              <span>Billing</span>
            </button>
            
            <div className="sidebar-divider"></div>
            
            <button className="sidebar-tab danger">
              <LogOut size={20} />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Settings Content */}
          <div className="settings-content">
            {/* Account Tab */}
            {activeTab === 'account' && (
              <div className="settings-panel">
                <h2 className="panel-title">Account Settings</h2>
                <p className="panel-description">Update your personal information and preferences</p>

                <div className="settings-form">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text"
                      className="form-input"
                      value={accountSettings.fullName}
                      onChange={(e) => setAccountSettings({...accountSettings, fullName: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email"
                      className="form-input"
                      value={accountSettings.email}
                      onChange={(e) => setAccountSettings({...accountSettings, email: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Username</label>
                    <input 
                      type="text"
                      className="form-input"
                      value={accountSettings.username}
                      onChange={(e) => setAccountSettings({...accountSettings, username: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Timezone</label>
                    <select 
                      className="form-select"
                      value={accountSettings.timezone}
                      onChange={(e) => setAccountSettings({...accountSettings, timezone: e.target.value})}
                    >
                      <option value="America/New_York">Eastern Time (ET)</option>
                      <option value="America/Chicago">Central Time (CT)</option>
                      <option value="America/Denver">Mountain Time (MT)</option>
                      <option value="America/Los_Angeles">Pacific Time (PT)</option>
                      <option value="Europe/London">London (GMT)</option>
                      <option value="Europe/Paris">Paris (CET)</option>
                      <option value="Asia/Tokyo">Tokyo (JST)</option>
                    </select>
                  </div>

                  <button className="btn-save" onClick={handleSaveAccount}>
                    <Save size={18} />
                    <span>Save Changes</span>
                  </button>
                </div>

                <div className="danger-zone">
                  <h3 className="danger-zone-title">Danger Zone</h3>
                  <p className="danger-zone-description">Permanently delete your account and all data</p>
                  <button className="btn-danger">Delete Account</button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="settings-panel">
                <h2 className="panel-title">Notification Preferences</h2>
                <p className="panel-description">Choose how you want to be notified</p>

                <div className="settings-form">
                  <div className="toggle-group">
                    <div className="toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-title">Email Notifications</div>
                        <div className="toggle-desc">Receive notifications via email</div>
                      </div>
                      <button 
                        className={`toggle-switch ${notificationSettings.emailNotifications ? 'active' : ''}`}
                        onClick={() => setNotificationSettings({
                          ...notificationSettings, 
                          emailNotifications: !notificationSettings.emailNotifications
                        })}
                      >
                        <span className="toggle-slider"></span>
                      </button>
                    </div>

                    <div className="toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-title">Conversion Complete</div>
                        <div className="toggle-desc">Notify when audiobook conversion finishes</div>
                      </div>
                      <button 
                        className={`toggle-switch ${notificationSettings.conversionComplete ? 'active' : ''}`}
                        onClick={() => setNotificationSettings({
                          ...notificationSettings, 
                          conversionComplete: !notificationSettings.conversionComplete
                        })}
                      >
                        <span className="toggle-slider"></span>
                      </button>
                    </div>

                    <div className="toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-title">Credits Running Low</div>
                        <div className="toggle-desc">Alert when credits fall below 20%</div>
                      </div>
                      <button 
                        className={`toggle-switch ${notificationSettings.creditsLow ? 'active' : ''}`}
                        onClick={() => setNotificationSettings({
                          ...notificationSettings, 
                          creditsLow: !notificationSettings.creditsLow
                        })}
                      >
                        <span className="toggle-slider"></span>
                      </button>
                    </div>

                    <div className="toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-title">New Voices Available</div>
                        <div className="toggle-desc">Notify when new AI voices are added</div>
                      </div>
                      <button 
                        className={`toggle-switch ${notificationSettings.newVoices ? 'active' : ''}`}
                        onClick={() => setNotificationSettings({
                          ...notificationSettings, 
                          newVoices: !notificationSettings.newVoices
                        })}
                      >
                        <span className="toggle-slider"></span>
                      </button>
                    </div>

                    <div className="toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-title">Weekly Report</div>
                        <div className="toggle-desc">Receive weekly usage summary</div>
                      </div>
                      <button 
                        className={`toggle-switch ${notificationSettings.weeklyReport ? 'active' : ''}`}
                        onClick={() => setNotificationSettings({
                          ...notificationSettings, 
                          weeklyReport: !notificationSettings.weeklyReport
                        })}
                      >
                        <span className="toggle-slider"></span>
                      </button>
                    </div>

                    <div className="toggle-item">
                      <div className="toggle-info">
                        <div className="toggle-title">Marketing Emails</div>
                        <div className="toggle-desc">Promotional content and product updates</div>
                      </div>
                      <button 
                        className={`toggle-switch ${notificationSettings.marketingEmails ? 'active' : ''}`}
                        onClick={() => setNotificationSettings({
                          ...notificationSettings, 
                          marketingEmails: !notificationSettings.marketingEmails
                        })}
                      >
                        <span className="toggle-slider"></span>
                      </button>
                    </div>
                  </div>

                  <button className="btn-save" onClick={handleSaveNotifications}>
                    <Save size={18} />
                    <span>Save Preferences</span>
                  </button>
                </div>
              </div>
            )}

            {/* API Keys Tab */}
            {activeTab === 'api' && (
              <div className="settings-panel">
                <h2 className="panel-title">API Keys</h2>
                <p className="panel-description">Manage your API keys for programmatic access</p>

                <div className="api-section">
                  <div className="api-key-card">
                    <div className="api-key-header">
                      <div className="api-key-icon">
                        <Shield size={24} />
                      </div>
                      <div>
                        <div className="api-key-label">Production API Key</div>
                        <div className="api-key-created">Created on Jan 15, 2024</div>
                      </div>
                    </div>

                    <div className="api-key-value">
                      <input 
                        type={showApiKey ? 'text' : 'password'}
                        value={apiKey}
                        readOnly
                        className="api-key-input"
                      />
                      <button 
                        className="api-key-toggle"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? 'Hide' : 'Show'}
                      </button>
                      <button className="api-key-copy">Copy</button>
                    </div>

                    <div className="api-key-actions">
                      <button className="btn-secondary" onClick={handleGenerateNewKey}>
                        Generate New Key
                      </button>
                      <button className="btn-secondary danger" onClick={handleRevokeKey}>
                        Revoke Key
                      </button>
                    </div>
                  </div>

                  <div className="api-docs">
                    <h3 className="api-docs-title">API Documentation</h3>
                    <p className="api-docs-desc">
                      Learn how to integrate AudioForge into your applications with our comprehensive API.
                    </p>
                    <a href="#" className="api-docs-link">View Documentation →</a>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="settings-panel">
                <h2 className="panel-title">Billing & Subscription</h2>
                <p className="panel-description">Manage your subscription and payment methods</p>

                <div className="billing-section">
                  <div className="current-plan">
                    <div className="plan-header">
                      <div>
                        <div className="plan-name">Professional Plan</div>
                        <div className="plan-price">$49/month</div>
                      </div>
                      <button className="btn-primary">Upgrade Plan</button>
                    </div>
                    <div className="plan-features">
                      <div className="plan-feature">✓ 1,000 credits per month</div>
                      <div className="plan-feature">✓ Priority processing</div>
                      <div className="plan-feature">✓ All premium voices</div>
                      <div className="plan-feature">✓ API access</div>
                    </div>
                  </div>

                  <div className="billing-history">
                    <h3 className="billing-history-title">Billing History</h3>
                    <div className="billing-table">
                      <div className="billing-row header">
                        <div>Date</div>
                        <div>Description</div>
                        <div>Amount</div>
                        <div>Status</div>
                      </div>
                      <div className="billing-row">
                        <div>Jan 15, 2024</div>
                        <div>Professional Plan</div>
                        <div>$49.00</div>
                        <div className="status-paid">Paid</div>
                      </div>
                      <div className="billing-row">
                        <div>Dec 15, 2023</div>
                        <div>Professional Plan</div>
                        <div>$49.00</div>
                        <div className="status-paid">Paid</div>
                      </div>
                      <div className="billing-row">
                        <div>Nov 15, 2023</div>
                        <div>Professional Plan</div>
                        <div>$49.00</div>
                        <div className="status-paid">Paid</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
