import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../web/Sidebar';
import Header from '../web/Navbar';

export default function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <div className=''>
        <Sidebar />
      </div>
      <div style={{ flex: 1 }} className='pl-5 md:pl-5 lg:pl-72'>
        <Header />
        <main style={{ padding: '1rem' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
