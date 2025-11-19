import { Play, Download, RotateCcw, Clock, Headphones } from 'lucide-react';
import './BookLibrary.css';

interface BookLibraryProps {
  setCurrentAudio: (audio: { bookId: number; title: string; cover: string; currentChapter: number; totalChapters: number }) => void;
}

const BookLibrary = ({ setCurrentAudio }: BookLibraryProps) => {
  const books = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      cover: 'https://covers.openlibrary.org/b/id/8228691-M.jpg',
      chapters: 31,
      duration: '12h 45m',
      voice: 'Bella',
      completedAt: '2024-01-15',
    },
    {
      id: 2,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      cover: 'https://covers.openlibrary.org/b/id/8453014-M.jpg',
      chapters: 26,
      duration: '8h 20m',
      voice: 'James',
      completedAt: '2024-01-10',
    },
    {
      id: 3,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      cover: 'https://covers.openlibrary.org/b/id/8229839-M.jpg',
      chapters: 18,
      duration: '9h 15m',
      voice: 'Alice',
      completedAt: '2024-01-08',
    },
    {
      id: 4,
      title: 'Animal Farm',
      author: 'George Orwell',
      cover: 'https://covers.openlibrary.org/b/id/8531433-M.jpg',
      chapters: 10,
      duration: '3h 30m',
      voice: 'Oliver',
      completedAt: '2024-01-05',
    },
  ];

  const handlePlay = (book: typeof books[0]) => {
    setCurrentAudio({
      bookId: book.id,
      title: book.title,
      cover: book.cover,
      currentChapter: 1,
      totalChapters: book.chapters,
    });
  };

  return (
    <section className="book-library">
      <div className="section-header-small">
        <div className="header-icon">
          <Headphones size={24} />
        </div>
        <div>
          <h2 className="section-title-small">My Audiobook Library</h2>
          <p className="section-desc">Your completed audiobook collection</p>
        </div>
      </div>

      <div className="library-grid">
        {books.map(book => (
          <div key={book.id} className="library-book-card">
            <div className="book-cover-wrapper">
              <img src={book.cover} alt={book.title} className="book-cover" />
              <div className="book-overlay">
                <button className="play-btn-large" onClick={() => handlePlay(book)}>
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
              <div className="chapter-badge">
                {book.chapters} Chapters
              </div>
            </div>

            <div className="book-info">
              <h3 className="book-title-card">{book.title}</h3>
              <p className="book-author">{book.author}</p>

              <div className="book-meta">
                <div className="meta-item">
                  <Clock size={14} />
                  <span>{book.duration}</span>
                </div>
                <div className="meta-item">
                  <Headphones size={14} />
                  <span>{book.voice}</span>
                </div>
              </div>

              <div className="book-actions">
                <button className="book-action-btn primary" onClick={() => handlePlay(book)}>
                  <Play size={16} fill="currentColor" />
                  Play
                </button>
                <button className="book-action-btn">
                  <Download size={16} />
                  Download
                </button>
                <button className="book-action-btn icon-only">
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookLibrary;
