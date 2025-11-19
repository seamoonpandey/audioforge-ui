import { Play, Pause, SkipBack, SkipForward, Volume2, X } from 'lucide-react';
import { useState } from 'react';
import './AudioPlayer.css';

interface AudioPlayerProps {
  currentAudio: {
    bookId: number;
    title: string;
    cover: string;
    currentChapter: number;
    totalChapters: number;
  } | null;
  onClose: () => void;
}

const AudioPlayer = ({ currentAudio, onClose }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(70);
  const [speed, setSpeed] = useState(1.0);

  if (!currentAudio) return null;

  const speeds = [0.75, 1.0, 1.25, 1.5, 1.75, 2.0];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="audio-player">
      <div className="player-container">
        <div className="player-info">
          <img src={currentAudio.cover} alt={currentAudio.title} className="player-cover" />
          <div className="player-text">
            <div className="player-title">{currentAudio.title}</div>
            <div className="player-chapter">
              Chapter {currentAudio.currentChapter} of {currentAudio.totalChapters}
            </div>
          </div>
          <button className="player-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="player-controls-section">
          <div className="player-progress-wrapper">
            <span className="time-stamp">{formatTime(252)}</span>
            <div className="progress-track">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="progress-slider"
              />
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="time-stamp">{formatTime(720)}</span>
          </div>

          <div className="player-controls">
            <button className="control-btn">
              <SkipBack size={20} />
            </button>
            <button className="control-btn play-pause" onClick={handlePlayPause}>
              {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
            </button>
            <button className="control-btn">
              <SkipForward size={20} />
            </button>
          </div>
        </div>

        <div className="player-extras">
          <div className="volume-control">
            <Volume2 size={18} />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>

          <div className="speed-control">
            {speeds.map(s => (
              <button
                key={s}
                className={`speed-btn ${speed === s ? 'active' : ''}`}
                onClick={() => setSpeed(s)}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
