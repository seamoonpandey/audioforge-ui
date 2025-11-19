import { Upload, Settings, Download } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Upload size={40} />,
      title: 'Upload your eBook',
      description: 'Simply drag and drop your EPUB, PDF, or MOBI file. Our system instantly processes and analyzes the content.',
    },
    {
      number: '02',
      icon: <Settings size={40} />,
      title: 'Choose voice & style',
      description: 'Select from our library of premium AI voices. Customize speed, tone, and pronunciation to match your vision.',
    },
    {
      number: '03',
      icon: <Download size={40} />,
      title: 'Get your audiobook',
      description: 'Download chapter-wise or as a complete audiobook. Stream online or export in your preferred audio format.',
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2 className="section-title">
            How It Works
          </h2>
          <p className="section-subtitle">
            Three simple steps to transform your eBooks into professional audiobooks
          </p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon glass">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
