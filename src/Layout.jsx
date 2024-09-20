// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Footer from './components/Footer';
// import { fetchAllAnnouncementsThunk } from './redux/announcements/operations';

export const Layout = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllAnnouncementsThunk());
  // }, [dispatch]);

  return (
    <div className=" h-[100vh] flex flex-col justify-between overflow-x-hidden">
      <Toaster position="top-right" />
      <Header />
      <main className="pt-[120px] w-4/5 flex justify-between mx-auto items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
