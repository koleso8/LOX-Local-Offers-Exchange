import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { fetchAllAnnouncementsThunk } from './redux/announcements/operations';
import { useDispatch } from 'react-redux';

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAnnouncementsThunk());
  }, [dispatch]);

  return (
    <div className=" h-[100vh] flex flex-col justify-between overflow-x-hidden">
      <Toaster position="top-right" />
      <Header />
      <main className="pt-[120px] w-4/5 flex justify-between mx-auto items-center">
        <Outlet />
      </main>
      <script 
  src="https://www.go-it-hackathon.website/widget.js" 
  data-agent="15a84753-0b20-49db-9893-63de8d208dfe"
  async
></script>
      <Footer />
    </div>
  );
};

export default Layout;
