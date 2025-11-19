import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookAudio, Bell, Settings, LogOut, User, LayoutDashboard, Library, Mic2, CreditCard } from 'lucide-react';
import './DashboardNav.css';

interface DashboardNavProps {
  showUserMenu: boolean;
  setShowUserMenu: (show: boolean) => void;
}

const DashboardNav = ({ showUserMenu, setShowUserMenu }: DashboardNavProps) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'Chapter conversion completed for "The Great Novel"', time: '2m ago', unread: true },
    { id: 2, text: 'New voice "Emma" added to library', time: '1h ago', unread: true },
    { id: 3, text: 'Monthly credits refreshed', time: '2h ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <nav className="dashboard-nav">
      <div className="dashboard-nav-container">
        {/* Logo */}
        <Link to="/" className="dashboard-logo">
          <BookAudio size={32} className="logo-icon" />
          <span className="logo-text">AudioForge</span>
        </Link>

        {/* Center Navigation */}
        <div className="dashboard-nav-links">
          <Link to="/dashboard" className="nav-link active">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <Link to="/dashboard/books" className="nav-link">
            <Library size={18} />
            <span>My Books</span>
          </Link>
          <Link to="/dashboard/voices" className="nav-link">
            <Mic2 size={18} />
            <span>Voices</span>
          </Link>
          <Link to="/dashboard/settings" className="nav-link">
            <Settings size={18} />
            <span>Settings</span>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="dashboard-nav-actions">
          {/* Notifications */}
          <div className="notification-container">
            <button 
              className="icon-button"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowUserMenu(false);
              }}
            >
              <Bell size={20} />
              {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
            </button>

            {showNotifications && (
              <div className="notification-dropdown">
                <div className="dropdown-header">
                  <h3>Notifications</h3>
                  <button className="mark-read-btn">Mark all as read</button>
                </div>
                <div className="notification-list">
                  {notifications.map(notif => (
                    <div key={notif.id} className={`notification-item ${notif.unread ? 'unread' : ''}`}>
                      <div className="notification-text">{notif.text}</div>
                      <div className="notification-time">{notif.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="user-menu-container">
            <button 
              className="user-avatar"
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowNotifications(false);
              }}
            >
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="User" />
            </button>

            {showUserMenu && (
              <div className="user-dropdown">
                <div className="user-info">
                  <div className="user-avatar-large">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="User" />
                  </div>
                  <div className="user-details">
                    <div className="user-name">Sarah Mitchell</div>
                    <div className="user-email">sarah@example.com</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <Link to="/dashboard/profile" className="dropdown-item">
                  <User size={18} />
                  <span>Profile</span>
                </Link>
                <Link to="/dashboard/subscription" className="dropdown-item">
                  <CreditCard size={18} />
                  <span>Subscription</span>
                </Link>
                <Link to="/dashboard/settings" className="dropdown-item">
                  <Settings size={18} />
                  <span>Settings</span>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/login" className="dropdown-item logout">
                  <LogOut size={18} />
                  <span>Logout</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
