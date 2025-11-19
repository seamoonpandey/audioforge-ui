import { useState } from 'react';
import { Camera, Mail, MapPin, Calendar, Award, TrendingUp, Headphones, BookOpen } from 'lucide-react';
import DashboardNav from '../components/DashboardNav';
import './Profile.css';

const Profile = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sarah Mitchell',
    email: 'sarah@example.com',
    location: 'San Francisco, CA',
    joinedDate: 'January 2024',
    bio: 'Avid reader and audiobook enthusiast. Love converting my favorite classics into personalized audiobooks.',
  });

  const stats = [
    { label: 'Books Converted', value: '24', icon: BookOpen, color: 'purple' },
    { label: 'Total Hours', value: '87h', icon: Headphones, color: 'blue' },
    { label: 'Favorite Voice', value: 'Bella', icon: Award, color: 'green' },
    { label: 'This Month', value: '+12%', icon: TrendingUp, color: 'orange' },
  ];

  const recentActivity = [
    { action: 'Converted', book: 'To Kill a Mockingbird', date: 'Jan 15, 2024' },
    { action: 'Converted', book: 'The Catcher in the Rye', date: 'Jan 10, 2024' },
    { action: 'Converted', book: 'Brave New World', date: 'Jan 8, 2024' },
    { action: 'Converted', book: 'Animal Farm', date: 'Jan 5, 2024' },
    { action: 'Converted', book: '1984', date: 'Dec 28, 2023' },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // In real app, save to backend
  };

  return (
    <div className="profile-page">
      <DashboardNav showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
      
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-cover"></div>
          <div className="profile-main">
            <div className="avatar-section">
              <div className="avatar-wrapper">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
                  alt={profile.name}
                  className="profile-avatar"
                />
                <button className="avatar-edit-btn">
                  <Camera size={20} />
                </button>
              </div>
            </div>
            
            <div className="profile-info">
              <div className="profile-title-section">
                <div>
                  <h1 className="profile-name">{profile.name}</h1>
                  <div className="profile-meta">
                    <div className="meta-item">
                      <Mail size={16} />
                      <span>{profile.email}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{profile.location}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>Joined {profile.joinedDate}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="btn-edit-profile"
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="profile-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card-profile">
              <div className={`stat-icon-profile ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className="stat-content-profile">
                <div className="stat-value-profile">{stat.value}</div>
                <div className="stat-label-profile">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="profile-content">
          {/* Bio Section */}
          <div className="profile-section">
            <h2 className="section-title-profile">About</h2>
            {isEditing ? (
              <textarea
                className="bio-textarea"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                rows={4}
              />
            ) : (
              <p className="bio-text">{profile.bio}</p>
            )}
          </div>

          {/* Recent Activity */}
          <div className="profile-section">
            <h2 className="section-title-profile">Recent Activity</h2>
            <div className="activity-list">
              {recentActivity.map((item, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon">
                    <BookOpen size={18} />
                  </div>
                  <div className="activity-content">
                    <div className="activity-text">
                      <span className="activity-action">{item.action}</span>
                      <span className="activity-book">{item.book}</span>
                    </div>
                    <div className="activity-date">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          {isEditing && (
            <div className="profile-section">
              <h2 className="section-title-profile">Personal Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-input"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
