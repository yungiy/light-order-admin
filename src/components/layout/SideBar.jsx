import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ toggleSidebar }) => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold">Light Order</div>
        <button onClick={toggleSidebar} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav>
        <ul>
           <li className="mb-2">
            <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-700">대시보드</Link>
          </li>
          <li className="mb-2">
            <Link to="/orders" className="block p-2 rounded hover:bg-gray-700">주문관리</Link>
          </li>
          <li className="mb-2">
            <Link to="/menus" className="block p-2 rounded hover:bg-gray-700">메뉴관리</Link>
          </li>
          <li className="mb-2">
            <Link to="/customers" className="block p-2 rounded hover:bg-gray-700">고객관리</Link>
          </li>
          <li className="mb-2">
            <Link to="/reservations" className="block p-2 rounded hover:bg-gray-700">예약관리</Link>
          </li>
           <li className="mb-2">
            <Link to="/notifications" className="block p-2 rounded hover:bg-gray-700">알림관리</Link>
          </li>
          <li className="mb-2">
            <Link to="/statistics" className="block p-2 rounded hover:bg-gray-700">매출통계</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;