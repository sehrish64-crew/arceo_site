'use client';

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function LayoutWrapper({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="h-screen bg-white flex overflow-hidden relative px-4 lg:px-8">
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex overflow-hidden mt-24 custom-light">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="flex-1 overflow-auto md:px-8 py-8 px-3 py-3 bg-[#CEE5E433]">
          {children}
        </main>
      </div>
    </div>
  );
}
