import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Footer from './components/Footer';
import { fetchAllAnnouncementsThunk } from './redux/announcements/operations';

export const Layout = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllAnnouncementsThunk());
  // }, [dispatch]);

  return (
    <div className=" h-[100vh] flex flex-col justify-between">
      <Toaster position="top-right" />
      <Header />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
