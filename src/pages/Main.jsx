import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import SideBar from '../components/layout/SideBar';

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* 사이드 바 */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-52 bg-gray-800 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <SideBar toggleSidebar={toggleSidebar} />
      </div>

      {/* 메인 콘텐츠 */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header toggleSidebar={toggleSidebar} />
        <main className='bg-gray-100'>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
