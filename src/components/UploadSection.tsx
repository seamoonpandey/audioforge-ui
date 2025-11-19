import { useState, useRef } from 'react';
import { Upload, FileText, Mic2, Sparkles, Check } from 'lucide-react';
import './UploadSection.css';

const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedVoice, setSelectedVoice] = useState('bella');
  const [selectedStyle, setSelectedStyle] = useState('narration');
  const [autoSplit, setAutoSplit] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const voices = [
    { id: 'bella', name: 'Bella', gender: 'Female', accent: 'American' },
    { id: 'alice', name: 'Alice', gender: 'Female', accent: 'British' },
    { id: 'james', name: 'James', gender: 'Male', accent: 'American' },
    { id: 'oliver', name: 'Oliver', gender: 'Male', accent: 'British' },
    { id: 'emma', name: 'Emma', gender: 'Female', accent: 'Australian' },
  ];

  const styles = [
    { id: 'narration', name: 'Narration', desc: 'Professional storytelling' },
    { id: 'conversational', name: 'Conversational', desc: 'Casual and friendly' },
    { id: 'energetic', name: 'Energetic', desc: 'Dynamic and upbeat' },
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleStartConversion = () => {
    console.log('Starting conversion', { selectedFile, selectedVoice, selectedStyle, autoSplit });
    // Add conversion logic here
  };

  return (
    <section className="upload-section">
      <div className="section-header-small">
        <div className="header-icon">
          <Upload size={24} />
        </div>
        <div>
          <h2 className="section-title-small">Upload & Convert</h2>
          <p className="section-desc">Transform your eBooks into audiobooks with AI</p>
        </div>
      </div>

      <div className="upload-card">
        <div
          className={`upload-dropzone ${isDragging ? 'dragging' : ''} ${selectedFile ? 'has-file' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleUploadClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.epub,.txt"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />

          {selectedFile ? (
            <div className="file-selected">
              <FileText size={48} className="file-icon" />
              <div className="file-name">{selectedFile.name}</div>
              <div className="file-size">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</div>
              <button className="change-file-btn" onClick={(e) => {
                e.stopPropagation();
                setSelectedFile(null);
              }}>
                Change File
              </button>
            </div>
          ) : (
            <>
              <div className="upload-icon-circle">
                <Upload size={32} />
              </div>
              <h3 className="upload-title">Drag & drop your eBook here</h3>
              <p className="upload-subtitle">or click to browse</p>
              <div className="upload-formats">
                <span className="format-tag">PDF</span>
                <span className="format-tag">EPUB</span>
                <span className="format-tag">TXT</span>
              </div>
            </>
          )}
        </div>

        <div className="upload-options">
          {/* Voice Selection */}
          <div className="option-group">
            <label className="option-label">
              <Mic2 size={18} />
              <span>Choose Voice</span>
            </label>
            <div className="voice-grid">
              {voices.map(voice => (
                <button
                  key={voice.id}
                  className={`voice-option ${selectedVoice === voice.id ? 'selected' : ''}`}
                  onClick={() => setSelectedVoice(voice.id)}
                >
                  <div className="voice-info">
                    <div className="voice-name">{voice.name}</div>
                    <div className="voice-meta">{voice.gender} · {voice.accent}</div>
                  </div>
                  {selectedVoice === voice.id && <Check size={16} className="check-icon" />}
                </button>
              ))}
            </div>
          </div>

          {/* Style Selection */}
          <div className="option-group">
            <label className="option-label">
              <Sparkles size={18} />
              <span>Narration Style</span>
            </label>
            <div className="style-grid">
              {styles.map(style => (
                <button
                  key={style.id}
                  className={`style-option ${selectedStyle === style.id ? 'selected' : ''}`}
                  onClick={() => setSelectedStyle(style.id)}
                >
                  <div className="style-name">{style.name}</div>
                  <div className="style-desc">{style.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Auto-split Toggle */}
          <div className="option-group">
            <label className="toggle-label">
              <div className="toggle-info">
                <span className="toggle-title">Auto-Split into Chapters</span>
                <span className="toggle-desc">Automatically detect and split book chapters</span>
              </div>
              <button
                className={`toggle-switch ${autoSplit ? 'active' : ''}`}
                onClick={() => setAutoSplit(!autoSplit)}
              >
                <span className="toggle-slider"></span>
              </button>
            </label>
          </div>

          {/* Start Button */}
          <button
            className="start-conversion-btn"
            disabled={!selectedFile}
            onClick={handleStartConversion}
          >
            <Sparkles size={20} />
            <span>Start Conversion</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
