
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import SidebarNav from '@/components/SidebarNav';
import Dashboard from '@/pages/Dashboard';
import UserMenu from '@/components/UserMenu';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Set initial dark mode based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Check for authentication on mount
  useEffect(() => {
    const authData = localStorage.getItem('nef-auth');
    if (!authData) {
      navigate('/landing');
    }
  }, [navigate]);

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  // Collapse sidebar on mobile by default
  useEffect(() => {
    setSidebarCollapsed(isMobile);
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar className={sidebarCollapsed ? "w-16" : "w-64"}>
        <SidebarNav collapsed={sidebarCollapsed} />
      </Sidebar>

      <div 
        className="transition-all duration-300"
        style={{ 
          marginLeft: sidebarCollapsed ? '4rem' : '16rem'
        }}
      >
        <Header 
          title="NEF + AI for a Sustainable Planet" 
          subtitle="Vision Simulation Dashboard"
          onToggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          rightContent={<UserMenu />}
        />
        <main>
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Index;
