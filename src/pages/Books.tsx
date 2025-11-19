import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Search, SlidersHorizontal, Clock, Headphones, MoreVertical } from 'lucide-react';
import DashboardNav from '../components/DashboardNav';
import './Books.css';

const Books = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [filterVoice, setFilterVoice] = useState('all');

  const books = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
      chapters: 31,
      duration: '12h 45m',
      voice: 'Bella',
      style: 'Narration',
      completedAt: 'January 15, 2024',
      size: '245 MB',
    },
    {
      id: 2,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      cover: 'https://covers.openlibrary.org/b/id/8453014-L.jpg',
      chapters: 26,
      duration: '8h 20m',
      voice: 'James',
      style: 'Narration',
      completedAt: 'January 10, 2024',
      size: '185 MB',
    },
    {
      id: 3,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      cover: 'https://covers.openlibrary.org/b/id/8229839-L.jpg',
      chapters: 18,
      duration: '9h 15m',
      voice: 'Alice',
      style: 'Dramatic',
      completedAt: 'January 8, 2024',
      size: '198 MB',
    },
    {
      id: 4,
      title: 'Animal Farm',
      author: 'George Orwell',
      cover: 'https://covers.openlibrary.org/b/id/8531433-L.jpg',
      chapters: 10,
      duration: '3h 30m',
      voice: 'Oliver',
      style: 'Narration',
      completedAt: 'January 5, 2024',
      size: '95 MB',
    },
    {
      id: 5,
      title: '1984',
      author: 'George Orwell',
      cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
      chapters: 23,
      duration: '11h 30m',
      voice: 'James',
      style: 'Dramatic',
      completedAt: 'December 28, 2023',
      size: '230 MB',
    },
    {
      id: 6,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      cover: 'https://covers.openlibrary.org/b/id/8238558-L.jpg',
      chapters: 9,
      duration: '4h 50m',
      voice: 'Bella',
      style: 'Narration',
      completedAt: 'December 22, 2023',
      size: '112 MB',
    },
    {
      id: 7,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      cover: 'https://covers.openlibrary.org/b/id/8235896-L.jpg',
      chapters: 61,
      duration: '14h 20m',
      voice: 'Alice',
      style: 'Dramatic',
      completedAt: 'December 18, 2023',
      size: '285 MB',
    },
    {
      id: 8,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      cover: 'https://covers.openlibrary.org/b/id/8406789-L.jpg',
      chapters: 19,
      duration: '10h 55m',
      voice: 'Oliver',
      style: 'Dramatic',
      completedAt: 'December 12, 2023',
      size: '218 MB',
    },
  ];

  const voices = ['all', 'Bella', 'James', 'Alice', 'Oliver', 'Emma'];

  const filteredBooks = books
    .filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVoice = filterVoice === 'all' || book.voice === filterVoice;
      return matchesSearch && matchesVoice;
    })
    .sort((a, b) => {
      if (sortBy === 'recent') return b.id - a.id;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'author') return a.author.localeCompare(b.author);
      if (sortBy === 'duration') return parseFloat(b.duration) - parseFloat(a.duration);
      return 0;
    });

  return (
    <div className="books-page">
      <DashboardNav showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
      
      <div className="books-container">
        <div className="books-header">
          <div className="header-content">
            <h1 className="page-title">My Audiobook Library</h1>
            <p className="page-subtitle">Browse and manage your complete audiobook collection</p>
          </div>
          
          <div className="books-stats">
            <div className="stat-badge">
              <Headphones size={18} />
              <span>{books.length} Books</span>
            </div>
            <div className="stat-badge">
              <Clock size={18} />
              <span>87h Total</span>
            </div>
          </div>
        </div>

        <div className="books-controls">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters">
            <div className="filter-group">
              <SlidersHorizontal size={18} />
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
                <option value="recent">Most Recent</option>
                <option value="title">Title A-Z</option>
                <option value="author">Author A-Z</option>
                <option value="duration">Duration</option>
              </select>
            </div>

            <div className="filter-group">
              <Headphones size={18} />
              <select value={filterVoice} onChange={(e) => setFilterVoice(e.target.value)} className="filter-select">
                {voices.map(voice => (
                  <option key={voice} value={voice}>
                    {voice === 'all' ? 'All Voices' : voice}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="empty-state">
            <Headphones size={64} />
            <h3>No books found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="books-grid">
            {filteredBooks.map(book => (
              <Link to={`/dashboard/book/${book.id}`} key={book.id} className="book-card">
                <div className="book-card-cover">
                  <img src={book.cover} alt={book.title} />
                  <div className="book-card-overlay">
                    <button className="play-btn-overlay">
                      <Play size={28} fill="white" />
                    </button>
                  </div>
                </div>

                <div className="book-card-content">
                  <h3 className="book-card-title">{book.title}</h3>
                  <p className="book-card-author">{book.author}</p>
                  
                  <div className="book-card-meta">
                    <div className="meta-item">
                      <Headphones size={14} />
                      <span>{book.voice}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={14} />
                      <span>{book.duration}</span>
                    </div>
                  </div>

                  <div className="book-card-footer">
                    <div className="book-chapters">
                      <span>{book.chapters} chapters</span>
                    </div>
                    <button className="book-menu-btn" onClick={(e) => e.preventDefault()}>
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
