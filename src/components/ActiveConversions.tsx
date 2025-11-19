import { Download, Trash2, Eye, Loader2 } from 'lucide-react';
import './ActiveConversions.css';

const ActiveConversions = () => {
  const conversions = [
    {
      id: 1,
      title: 'The Great Gatsby',
      cover: 'https://covers.openlibrary.org/b/id/7884916-M.jpg',
      status: 'processing',
      progress: 65,
      chaptersTotal: 9,
      chaptersCompleted: 6,
    },
    {
      id: 2,
      title: '1984',
      cover: 'https://covers.openlibrary.org/b/id/7222246-M.jpg',
      status: 'splitting',
      progress: 30,
      chaptersTotal: 0,
      chaptersCompleted: 0,
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      cover: 'https://covers.openlibrary.org/b/id/8380542-M.jpg',
      status: 'rendering',
      progress: 90,
      chaptersTotal: 61,
      chaptersCompleted: 55,
    },
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'processing':
        return { text: 'Processing', color: '#3b82f6' };
      case 'splitting':
        return { text: 'Splitting Chapters', color: '#f59e0b' };
      case 'rendering':
        return { text: 'Rendering Audio', color: '#10b981' };
      default:
        return { text: 'Unknown', color: '#6b7280' };
    }
  };

  return (
    <section className="active-conversions">
      <div className="section-header-small">
        <div className="header-icon">
          <Loader2 size={24} className="spinning" />
        </div>
        <div>
          <h2 className="section-title-small">Active Conversions</h2>
          <p className="section-desc">Track your ongoing audiobook generations</p>
        </div>
      </div>

      <div className="conversions-table">
        <div className="table-header">
          <div className="th th-book">Book</div>
          <div className="th th-status">Status</div>
          <div className="th th-chapters">Chapters</div>
          <div className="th th-progress">Progress</div>
          <div className="th th-actions">Actions</div>
        </div>

        <div className="table-body">
          {conversions.map(conversion => {
            const statusInfo = getStatusInfo(conversion.status);
            return (
              <div key={conversion.id} className="table-row">
                <div className="td td-book">
                  <img src={conversion.cover} alt={conversion.title} className="book-cover-thumb" />
                  <div className="book-title">{conversion.title}</div>
                </div>

                <div className="td td-status">
                  <span className="status-badge" style={{ background: `${statusInfo.color}15`, color: statusInfo.color }}>
                    <span className="status-dot" style={{ background: statusInfo.color }}></span>
                    {statusInfo.text}
                  </span>
                </div>

                <div className="td td-chapters">
                  {conversion.chaptersTotal > 0 ? (
                    <span className="chapter-count">
                      {conversion.chaptersCompleted} / {conversion.chaptersTotal}
                    </span>
                  ) : (
                    <span className="chapter-count pending">—</span>
                  )}
                </div>

                <div className="td td-progress">
                  <div className="progress-container">
                    <div className="progress-bar-wrapper">
                      <div className="progress-bar" style={{ width: `${conversion.progress}%` }}></div>
                    </div>
                    <span className="progress-text">{conversion.progress}%</span>
                  </div>
                </div>

                <div className="td td-actions">
                  <div className="action-buttons">
                    <button className="action-btn" title="View Details">
                      <Eye size={16} />
                    </button>
                    <button className="action-btn" title="Download" disabled={conversion.progress < 100}>
                      <Download size={16} />
                    </button>
                    <button className="action-btn danger" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActiveConversions;
