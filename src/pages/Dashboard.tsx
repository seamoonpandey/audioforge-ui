import { useState } from 'react';
import { BookOpen, Zap, Clock, TrendingUp } from 'lucide-react';

import './Dashboard.css';
import ActiveConversions from '../components/ActiveConversions';
import AudioPlayer from '../components/AudioPlayer';
import BookLibrary from '../components/BookLibrary';
import DashboardNav from '../components/DashboardNav';
import SubscriptionWidget from '../components/SubscriptionWidget';
import UploadSection from '../components/UploadSection';

interface AudioState {
  bookId: number;
  title: string;
  cover: string;
  currentChapter: number;
  totalChapters: number;
}

const Dashboard = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<AudioState | null>(null);

  const userStats = {
    chaptersConverted: 248,
    minutesGenerated: 3420,
    creditsRemaining: 450,
    creditsTotal: 1000,
  };

  return (
    <div className="dashboard">
      <DashboardNav showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
      
      <div className="dashboard-container">
        {/* Hero Section - Stats */}
        <section className="dashboard-hero">
          <div className="welcome-card">
            <h1 className="welcome-title">Welcome back, Sarah! 👋</h1>
            <p className="welcome-subtitle">Here's what's happening with your audiobooks today</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon purple">
                <BookOpen size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-label">Chapters Converted</div>
                <div className="stat-value">{userStats.chaptersConverted}</div>
                <div className="stat-change positive">
                  <TrendingUp size={14} />
                  <span>+12% this month</span>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon blue">
                <Clock size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-label">Minutes Generated</div>
                <div className="stat-value">{userStats.minutesGenerated.toLocaleString()}</div>
                <div className="stat-change positive">
                  <TrendingUp size={14} />
                  <span>+8% this month</span>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">
                <Zap size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-label">Credits Remaining</div>
                <div className="stat-value">{userStats.creditsRemaining}</div>
                <div className="stat-progress">
                  <div 
                    className="stat-progress-bar" 
                    style={{ width: `${(userStats.creditsRemaining / userStats.creditsTotal) * 100}%` }}
                  ></div>
                </div>
                <div className="stat-subtext">of {userStats.creditsTotal} total</div>
              </div>
            </div>
          </div>
        </section>

        {/* Upload Section */}
        <UploadSection />

        {/* Active Conversions */}
        <ActiveConversions />

        {/* Book Library */}
        <BookLibrary setCurrentAudio={setCurrentAudio} />

        {/* Subscription Widget */}
        <SubscriptionWidget />
      </div>

      {/* Sticky Audio Player */}
      <AudioPlayer currentAudio={currentAudio} onClose={() => setCurrentAudio(null)} />
    </div>
  );
};

export default Dashboard;
