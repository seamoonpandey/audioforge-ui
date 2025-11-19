import { Brain, Scissors, FileText, Download } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Brain size={32} />,
      title: 'AI Voice Engine — Human-like Narration',
      description: 'Advanced neural text-to-speech with natural intonation, emotion, and voice variety. Choose from dozens of premium voices.',
    },
    {
      icon: <Scissors size={32} />,
      title: 'Chapter-wise Split & Editing Tools',
      description: 'Automatically splits your eBook by chapters. Edit, re-record, or adjust individual sections with precision controls.',
    },
    {
      icon: <FileText size={32} />,
      title: 'Supports PDF, EPUB, MOBI',
      description: 'Upload any major eBook format. Our intelligent parser handles complex layouts, footnotes, and formatting.',
    },
    {
      icon: <Download size={32} />,
      title: 'Download in MP3, WAV, or Stream Online',
      description: 'Export in high-quality audio formats or stream directly from our platform. Full compatibility with all devices.',
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">
            Powerful Features for
            <span className="gradient-text"> Professional Results</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to create studio-quality audiobooks with cutting-edge AI technology
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
