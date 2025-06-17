# AdminPro Dashboard

A modern, feature-rich React admin dashboard built with TypeScript, Tailwind CSS, and Vite. This production-ready application provides a comprehensive suite of administrative tools with a beautiful, responsive design and smooth user experience.

![AdminPro Dashboard](https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## ✨ Features

### 🎨 **Modern Design System**
- **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Collapsible Sidebar** - Space-efficient navigation with smooth animations
- **Glass-morphism Effects** - Modern UI with subtle shadows and depth
- **Micro-interactions** - Thoughtful hover states and transitions throughout

### 📊 **Dashboard Components**
- **Overview Dashboard** - KPI cards with trend indicators and interactive charts
- **Data Table Management** - Advanced table with sorting, filtering, and pagination
- **Calendar Integration** - Full-featured calendar with event management
- **Kanban Board** - Drag-and-drop task management with priority levels
- **User Management** - Complete user administration interface

### 🛠️ **Technical Features**
- **TypeScript** - Full type safety and enhanced developer experience
- **Modular Architecture** - Clean, maintainable component structure
- **Context API** - Efficient state management for themes and UI preferences
- **Local Storage** - Persistent user preferences across sessions
- **Mock Data** - Realistic sample data for demonstration

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   [](https://github.com/priyanshu7855/React-Admin-Dashboard)
   cd React-Admin-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard/
│   │   ├── Overview.tsx          # Main dashboard with KPIs and charts
│   │   ├── DataTable.tsx         # Advanced data table component
│   │   ├── Calendar.tsx          # Calendar with event management
│   │   └── KanbanBoard.tsx       # Drag-and-drop task board
│   └── Layout/
│       ├── Header.tsx            # Top navigation bar
│       └── Sidebar.tsx           # Collapsible sidebar navigation
├── contexts/
│   └── ThemeContext.tsx          # Theme and UI state management
├── data/
│   └── mockData.ts               # Sample data for demonstration
├── App.tsx                       # Main application component
└── main.tsx                      # Application entry point
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Customization

### Theme Configuration
The application uses a comprehensive design system built with Tailwind CSS. You can customize colors, spacing, and other design tokens in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Blue
      secondary: '#6366F1',  // Indigo
      accent: '#10B981',     // Emerald
    }
  }
}
```

### Adding New Components
1. Create your component in the appropriate directory under `src/components/`
2. Export it from the component file
3. Import and use it in your desired location
4. Follow the existing TypeScript patterns for type safety

### Data Integration
Replace the mock data in `src/data/mockData.ts` with your actual API calls:

```typescript
// Example API integration
export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('/api/users');
  return response.json();
};
```

## 🔧 Built With

- **[React 18](https://reactjs.org/)** - Modern React with hooks and concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[Vite](https://vitejs.dev/)** - Fast build tool and development server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful, customizable icons
- **[ESLint](https://eslint.org/)** - Code quality and consistency

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop** (1024px+) - Full sidebar and multi-column layouts
- **Tablet** (768px-1023px) - Adapted layouts with collapsible sidebar
- **Mobile** (320px-767px) - Stack layouts with mobile-optimized navigation

## 🎪 Demo Features

### Dashboard Overview
- Revenue trends with animated progress bars
- User activity metrics with visual indicators
- KPI cards with trend percentages
- Interactive hover states and smooth transitions

### Data Management
- Sortable columns with visual indicators
- Real-time search and filtering
- Pagination with page navigation
- User status management with color-coded badges

### Calendar System
- Month navigation with smooth transitions
- Event creation and management
- Color-coded event types
- Responsive calendar grid

### Kanban Board
- Drag-and-drop functionality between columns
- Priority-based color coding
- Task assignment and due dates
- Label management system

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Design inspiration from modern admin dashboards
- Icons provided by [Lucide](https://lucide.dev/)
- Sample images from [Pexels](https://pexels.com/)
- Built with love using React and TypeScript

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub or reach out
