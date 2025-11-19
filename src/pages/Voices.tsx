import { useState } from 'react';
import { Mic2, Play, Pause, Filter } from 'lucide-react';
import DashboardNav from '../components/DashboardNav';
import './Voices.css';

const Voices = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);
  const [filterGender, setFilterGender] = useState<'all' | 'male' | 'female'>('all');
  const [filterAccent, setFilterAccent] = useState<string>('all');

  const voices = [
    {
      id: 'bella',
      name: 'Bella',
      gender: 'Female',
      accent: 'American English',
      description: 'Warm and engaging voice perfect for fiction and storytelling',
      tags: ['Popular', 'Fiction', 'Warm'],
      sampleUrl: '#',
      isPremium: false,
    },
    {
      id: 'alice',
      name: 'Alice',
      gender: 'Female',
      accent: 'British English',
      description: 'Clear and sophisticated voice ideal for non-fiction and educational content',
      tags: ['Professional', 'Clear', 'Educational'],
      sampleUrl: '#',
      isPremium: false,
    },
    {
      id: 'james',
      name: 'James',
      gender: 'Male',
      accent: 'American English',
      description: 'Deep and authoritative voice great for business and technical books',
      tags: ['Authoritative', 'Business', 'Deep'],
      sampleUrl: '#',
      isPremium: false,
    },
    {
      id: 'oliver',
      name: 'Oliver',
      gender: 'Male',
      accent: 'British English',
      description: 'Refined and articulate voice perfect for classic literature',
      tags: ['Classic', 'Refined', 'Literature'],
      sampleUrl: '#',
      isPremium: false,
    },
    {
      id: 'emma',
      name: 'Emma',
      gender: 'Female',
      accent: 'Australian English',
      description: 'Friendly and upbeat voice excellent for young adult and contemporary fiction',
      tags: ['Friendly', 'Upbeat', 'YA'],
      sampleUrl: '#',
      isPremium: false,
    },
    {
      id: 'sophie',
      name: 'Sophie',
      gender: 'Female',
      accent: 'French English',
      description: 'Elegant and expressive voice with a subtle French accent',
      tags: ['Elegant', 'Expressive', 'Premium'],
      sampleUrl: '#',
      isPremium: true,
    },
    {
      id: 'marcus',
      name: 'Marcus',
      gender: 'Male',
      accent: 'South African English',
      description: 'Dynamic and versatile voice suitable for adventure and thriller genres',
      tags: ['Dynamic', 'Adventure', 'Premium'],
      sampleUrl: '#',
      isPremium: true,
    },
    {
      id: 'priya',
      name: 'Priya',
      gender: 'Female',
      accent: 'Indian English',
      description: 'Gentle and soothing voice perfect for meditation and self-help books',
      tags: ['Soothing', 'Wellness', 'Premium'],
      sampleUrl: '#',
      isPremium: true,
    },
  ];

  const accents = ['all', ...Array.from(new Set(voices.map(v => v.accent)))];

  const filteredVoices = voices.filter(voice => {
    const genderMatch = filterGender === 'all' || voice.gender.toLowerCase() === filterGender;
    const accentMatch = filterAccent === 'all' || voice.accent === filterAccent;
    return genderMatch && accentMatch;
  });

  const handlePlayPause = (voiceId: string) => {
    if (playingVoice === voiceId) {
      setPlayingVoice(null);
    } else {
      setPlayingVoice(voiceId);
    }
  };

  return (
    <div className="voices-page">
      <DashboardNav showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
      
      <div className="voices-container">
        {/* Page Header */}
        <div className="voices-header">
          <div className="header-icon-large">
            <Mic2 size={32} />
          </div>
          <div>
            <h1 className="page-title">Voice Library</h1>
            <p className="page-subtitle">Choose from our collection of premium AI voices for your audiobooks</p>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="filter-icon">
            <Filter size={20} />
            <span>Filters</span>
          </div>

          <div className="filters-group">
            <div className="filter-group">
              <label className="filter-label">Gender</label>
              <div className="filter-buttons">
                <button 
                  className={`filter-btn ${filterGender === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterGender('all')}
                >
                  All
                </button>
                <button 
                  className={`filter-btn ${filterGender === 'male' ? 'active' : ''}`}
                  onClick={() => setFilterGender('male')}
                >
                  Male
                </button>
                <button 
                  className={`filter-btn ${filterGender === 'female' ? 'active' : ''}`}
                  onClick={() => setFilterGender('female')}
                >
                  Female
                </button>
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Accent</label>
              <select 
                className="filter-select"
                value={filterAccent}
                onChange={(e) => setFilterAccent(e.target.value)}
              >
                {accents.map(accent => (
                  <option key={accent} value={accent}>
                    {accent === 'all' ? 'All Accents' : accent}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="filter-results">
            {filteredVoices.length} {filteredVoices.length === 1 ? 'voice' : 'voices'} found
          </div>
        </div>

        {/* Voices Grid */}
        <div className="voices-grid">
          {filteredVoices.map((voice) => (
            <div key={voice.id} className={`voice-card ${voice.isPremium ? 'premium' : ''}`}>
              {voice.isPremium && <div className="premium-badge">Premium</div>}
              
              <div className="voice-card-header">
                <div className="voice-avatar">
                  <Mic2 size={32} />
                </div>
                <div className="voice-card-info">
                  <h3 className="voice-card-name">{voice.name}</h3>
                  <p className="voice-card-accent">{voice.accent}</p>
                </div>
              </div>

              <div className="voice-card-gender">
                {voice.gender}
              </div>

              <p className="voice-card-description">{voice.description}</p>

              <div className="voice-card-tags">
                {voice.tags.map(tag => (
                  <span key={tag} className="voice-tag">{tag}</span>
                ))}
              </div>

              <div className="voice-card-preview">
                <div className="preview-waveform">
                  {Array.from({ length: 30 }, (_, i) => (
                    <div 
                      key={i}
                      className={`preview-bar ${playingVoice === voice.id ? 'animating' : ''}`}
                      style={{ 
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    />
                  ))}
                </div>
                
                <button 
                  className="preview-play-btn"
                  onClick={() => handlePlayPause(voice.id)}
                >
                  {playingVoice === voice.id ? (
                    <Pause size={20} fill="currentColor" />
                  ) : (
                    <Play size={20} fill="currentColor" />
                  )}
                  <span>{playingVoice === voice.id ? 'Pause' : 'Preview'}</span>
                </button>
              </div>

              <button className="select-voice-btn">
                Select Voice
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Voices;
