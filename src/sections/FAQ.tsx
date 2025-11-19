import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the AI voice technology work?',
      answer: 'Our advanced neural text-to-speech engine uses deep learning models trained on thousands of hours of human speech. It analyzes context, punctuation, and sentence structure to deliver natural-sounding narration with proper emotion and intonation.',
    },
    {
      question: 'What eBook formats are supported?',
      answer: 'AudioForge supports EPUB, PDF, MOBI, AZW, and TXT formats. Our intelligent parser handles complex layouts, tables, footnotes, and formatting to ensure accurate conversion.',
    },
    {
      question: 'Can I edit individual chapters after conversion?',
      answer: 'Yes! Our chapter-wise editing tools let you modify, re-record, or adjust any section. You can change voices, adjust speed, fix pronunciation, or regenerate specific chapters without affecting the entire audiobook.',
    },
    {
      question: 'How long does it take to convert an eBook?',
      answer: 'Conversion time depends on book length. A typical 300-page novel takes 15-20 minutes. Our Pro plan includes priority processing, and Studio tier offers batch processing for multiple books simultaneously.',
    },
    {
      question: 'Can I use the audiobooks commercially?',
      answer: 'Free and Pro tiers are for personal use only. The Studio tier includes commercial usage rights, allowing you to sell, distribute, or use audiobooks for business purposes. White-label options are also available.',
    },
    {
      question: 'What audio quality and formats can I export?',
      answer: 'We offer MP3 (up to 320kbps), WAV (lossless), and M4B (audiobook format with chapter markers). All exports maintain studio-quality audio with professional mastering.',
    },
    {
      question: 'Is there a limit on book length or file size?',
      answer: 'Free tier supports books up to 200 pages. Pro tier has no length limits. Maximum file size is 100MB for uploads, but we can handle larger files through our API (Studio tier).',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel anytime from your account settings. You\'ll retain access until the end of your billing period, and all your previously converted audiobooks remain accessible for download.',
    },
  ];

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about AudioForge
          </p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`chevron ${openIndex === index ? 'rotated' : ''}`}
                />
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
