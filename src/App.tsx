import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Overview from './components/Dashboard/Overview';
import DataTable from './components/Dashboard/DataTable';
import Calendar from './components/Dashboard/Calendar';
import KanbanBoard from './components/Dashboard/KanbanBoard';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { sidebarCollapsed } = useTheme();

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Overview />;
      case 'users': return <DataTable />;
      case 'calendar': return <Calendar />;
      case 'kanban': return <KanbanBoard />;
      case 'analytics': return <Overview />;
      case 'settings': return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Settings</h2>
          <p className="text-gray-600 dark:text-gray-400">Settings panel coming soon...</p>
        </div>
      );
      default: return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header />
      
      <main className={`
        transition-all duration-300 ease-in-out pt-16
        ${sidebarCollapsed ? 'ml-16' : 'ml-64'}
      `}>
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;