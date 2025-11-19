import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Download, RotateCcw, Clock, Headphones, Calendar, FileText, Share2, Trash2 } from 'lucide-react';
import DashboardNav from '../components/DashboardNav';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [playingChapter, setPlayingChapter] = useState<number | null>(null);

  // Sample book data (in real app, fetch by id)
  const book = useMemo(() => ({
    id: Number(id),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
    totalChapters: 31,
    duration: '12h 45m',
    voice: 'Bella',
    style: 'Narration',
    completedAt: 'January 15, 2024',
    fileSize: '245 MB',
    chapters: Array.from({ length: 31 }, (_, i) => ({
      id: i + 1,
      title: `Chapter ${i + 1}`,
      duration: `${15 + (i % 20)}:${String((i * 13) % 60).padStart(2, '0')}`,
      size: `${5 + (i % 10)} MB`,
      status: 'completed' as const,
    })),
  }), [id]);

  const handlePlayChapter = (chapterId: number) => {
    if (playingChapter === chapterId) {
      setPlayingChapter(null);
    } else {
      setPlayingChapter(chapterId);
    }
  };

  const handleDownloadAll = () => {
    console.log('Downloading all chapters');
  };

  const handleDownloadChapter = (chapterId: number) => {
    console.log('Downloading chapter', chapterId);
  };

  const handleRegenerateChapter = (chapterId: number) => {
    console.log('Regenerating chapter', chapterId);
  };

  return (
    <div className="book-details-page">
      <DashboardNav showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
      
      <div className="book-details-container">
        {/* Back Button */}
        <Link to="/dashboard" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </Link>

        {/* Book Header */}
        <div className="book-header">
          <div className="book-header-cover">
            <img src={book.cover} alt={book.title} />
          </div>
          
          <div className="book-header-info">
            <h1 className="book-header-title">{book.title}</h1>
            <p className="book-header-author">by {book.author}</p>
            
            <div className="book-header-meta">
              <div className="meta-badge">
                <Headphones size={16} />
                <span>{book.voice}</span>
              </div>
              <div className="meta-badge">
                <Clock size={16} />
                <span>{book.duration}</span>
              </div>
              <div className="meta-badge">
                <FileText size={16} />
                <span>{book.totalChapters} chapters</span>
              </div>
              <div className="meta-badge">
                <Calendar size={16} />
                <span>{book.completedAt}</span>
              </div>
            </div>

            <div className="book-header-actions">
              <button className="btn-primary" onClick={handleDownloadAll}>
                <Download size={18} />
                <span>Download All</span>
              </button>
              <button className="btn-secondary">
                <Share2 size={18} />
                <span>Share</span>
              </button>
              <button className="btn-secondary danger">
                <Trash2 size={18} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chapters List */}
        <div className="chapters-section">
          <div className="section-header-medium">
            <h2>Chapters</h2>
            <span className="chapter-count">{book.totalChapters} chapters · {book.fileSize}</span>
          </div>

          <div className="chapters-list">
            {book.chapters.map((chapter) => (
              <div key={chapter.id} className={`chapter-item ${playingChapter === chapter.id ? 'playing' : ''}`}>
                <button 
                  className="chapter-play-btn"
                  onClick={() => handlePlayChapter(chapter.id)}
                >
                  {playingChapter === chapter.id ? (
                    <Pause size={20} fill="currentColor" />
                  ) : (
                    <Play size={20} fill="currentColor" />
                  )}
                </button>

                <div className="chapter-number">{chapter.id}</div>

                <div className="chapter-info">
                  <div className="chapter-title">{chapter.title}</div>
                  <div className="chapter-meta">
                    <span className="chapter-duration">
                      <Clock size={12} />
                      {chapter.duration}
                    </span>
                    <span className="chapter-size">{chapter.size}</span>
                  </div>
                </div>

                <div className="chapter-waveform">
                  <div className="waveform-bars">
                    {Array.from({ length: 50 }, (_, i) => (
                      <div 
                        key={i} 
                        className="waveform-bar"
                        style={{ height: `${Math.random() * 100}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="chapter-actions">
                  <button 
                    className="chapter-action-btn"
                    onClick={() => handleDownloadChapter(chapter.id)}
                    title="Download"
                  >
                    <Download size={16} />
                  </button>
                  <button 
                    className="chapter-action-btn"
                    onClick={() => handleRegenerateChapter(chapter.id)}
                    title="Regenerate"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
