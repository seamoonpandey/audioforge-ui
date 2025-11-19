# AudioForge UI

A modern, high-end SaaS platform for converting digital eBooks into audiobooks with AI-powered text-to-speech technology. Built with React, TypeScript, and Vite.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646cff.svg)

## 🌟 Features

### Landing Page

- **Modern Design**: High-end SaaS landing page with glassmorphism effects
- **Fully Responsive**: Mobile-first design with smooth animations
- **Interactive Sections**:
  - Hero section with 3D book-to-audio animation
  - Features showcase with 6 key capabilities
  - How It Works process flow
  - Customer testimonials
  - Pricing tiers (Free, Pro, Enterprise)
  - FAQ accordion
  - Contact support form

### Dashboard

- **Overview Statistics**: Real-time metrics for chapters converted, credits, and usage
- **Upload Section**: Drag-and-drop file upload with voice and style selection
- **Active Conversions**: Live tracking of ongoing conversions with progress bars
- **Book Library**: Grid view of completed audiobooks
- **Audio Player**: Sticky bottom player with playback controls
- **Subscription Widget**: Plan overview and credit tracking

### Books Management

- **Library View**: Complete collection with search and filtering
- **Sort Options**: By recent, title, author, or duration
- **Voice Filter**: Filter books by voice used
- **Book Details**: Individual book pages with:
  - Chapter-by-chapter navigation
  - Waveform visualization for each chapter
  - Play/pause controls per chapter
  - Download and regenerate options
  - Book metadata and statistics

### Voice Library

- **Voice Catalog**: 8+ professional voices (male/female)
- **Premium Tiers**: Free and premium voice options
- **Filtering**: By gender (all/male/female) and accent (7 accents)
- **Preview Player**: Test voices with waveform visualization
- **Voice Details**: Descriptions and use-case tags

### User Profile

- **Profile Management**: Editable user information
- **Statistics Dashboard**: Personal metrics and achievements
- **Activity Timeline**: Recent conversion history
- **Avatar Upload**: Custom profile picture support

### Subscription & Billing

- **Plan Overview**: Current subscription details and usage
- **Credit Tracking**: Visual progress bars for monthly credits
- **Plan Comparison**: Side-by-side pricing tiers
- **Billing Toggle**: Monthly/yearly options with savings
- **Usage History**: Monthly credit consumption charts
- **Payment History**: Transaction records with downloadable invoices

### Settings

- **Account Settings**: Profile information management
- **Notifications**: Granular notification preferences (6 toggles)
- **API Access**: Key generation and management
- **Billing Info**: Payment methods and history
- **Danger Zone**: Account deletion options

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Version 9.0 or higher (comes with Node.js)
- **Git**: For cloning the repository

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/seamoonpandey/audioforge-ui.git
   cd audioforge-ui
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   ```bash
   Navigate to http://localhost:5173
   ```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload at <http://localhost:5173> |
| `npm run build` | Build for production to `dist/` folder |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🏗️ Project Structure

```bash
audioforge-ui/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── DashboardNav.tsx
│   │   ├── UploadSection.tsx
│   │   ├── ActiveConversions.tsx
│   │   ├── BookLibrary.tsx
│   │   ├── AudioPlayer.tsx
│   │   └── SubscriptionWidget.tsx
│   ├── pages/             # Page components
│   │   ├── LandingPage.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Books.tsx
│   │   ├── BookDetails.tsx
│   │   ├── Voices.tsx
│   │   ├── Profile.tsx
│   │   ├── Subscription.tsx
│   │   └── Settings.tsx
│   ├── sections/          # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Support.tsx
│   ├── App.tsx            # Main app component with routing
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Tech Stack

### Core

- **React 19.2.0** - UI library with latest features
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 7.2.2** - Fast build tool and dev server

### Routing

- **React Router DOM 7.9.6** - Client-side routing with dynamic paths

### Icons

- **Lucide React 0.554.0** - Beautiful, consistent icon set (50+ icons used)

### Styling

- **CSS3** - Custom properties, gradients, animations
- **Glassmorphism** - Modern UI with backdrop filters
- **Responsive Design** - Mobile-first with breakpoints at 640px, 768px, 1024px

### External APIs

- **Open Library Covers API** - Book cover images
- **DiceBear Avatars API** - User avatar generation

## 🎯 Key Features Breakdown

### Design System

- **Color Palette**:
  - Primary: `#6366f1` (Indigo)
  - Secondary: `#8b5cf6` (Purple)
  - Accent: `#06b6d4` (Cyan)
  - Success: `#10b981` (Green)
  - Background: `#f8f9fa` (Light gray)
  - Text: `#1a1a1a` (Near black)

- **Typography**:
  - Font weights: 400, 500, 600, 700, 800
  - Responsive font sizes
  - Proper line heights for readability

- **Animations**:
  - Smooth transitions (0.3s ease)
  - Hover transforms (translateY, scale)
  - Waveform pulse animations
  - Gradient backgrounds

### User Experience

- **Snap Scrolling**: Smooth section navigation on landing page
- **Active Navigation**: Dynamic route-based highlighting
- **Dropdown Menus**: Auto-close on navigation
- **Loading States**: Visual feedback for async operations
- **Error Handling**: Graceful error messages
- **Empty States**: Helpful messages when no data

### Performance Optimizations

- **Code Splitting**: Route-based lazy loading ready
- **Image Optimization**: External CDN usage
- **Memoization**: useMemo hooks for expensive computations
- **CSS Containment**: Isolated component styles

## 🔗 Routing Structure

```bash
/                           → Landing Page
/login                      → Login Page
/register                   → Register Page
/dashboard                  → Main Dashboard
/dashboard/books            → Books Library
/dashboard/book/:id         → Individual Book Details
/dashboard/voices           → Voice Library
/dashboard/profile          → User Profile
/dashboard/subscription     → Subscription Management
/dashboard/settings         → Settings Panel
```

## 🎨 Component Architecture

### Stateful Components

All page components manage their own state using React hooks:

- `useState` - Local state management
- `useMemo` - Performance optimization
- `useParams` - URL parameter extraction
- `useLocation` - Route detection for active links

### Prop Drilling

Minimal prop drilling with focused component responsibilities:

- Dashboard passes audio state to player
- Navigation components receive menu state
- Book library receives audio setter function

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| Mobile | < 640px | Single column, stacked layout |
| Tablet | 640px - 768px | 2-column grids, adjusted spacing |
| Desktop | 768px - 1024px | 3-column grids, full features |
| Large | > 1024px | 4-column grids, maximum width 1400px |

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication system
- [ ] Actual file upload and processing
- [ ] WebSocket for live conversion updates
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Email notifications
- [ ] Team collaboration features
- [ ] Advanced audio editing tools
- [ ] Voice cloning capability
- [ ] Multi-language support

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👨‍💻 Author

### seamoonpandey

- GitHub: [@seamoonpandey](https://github.com/seamoonpandey)
- Repository: [audioforge-ui](https://github.com/seamoonpandey/audioforge-ui)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- Lucide for the beautiful icon library
- Open Library for book cover images
- DiceBear for avatar generation
