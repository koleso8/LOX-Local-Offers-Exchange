import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import Loader from './components/Loader';
import { PrivateRoute } from './PrivateRoute';
import AboutUs from './pages/AboutUs';
import AnnouncementsPage from './pages/AnnouncementsPage';
import LawyersPage from './pages/LawyersPage';
import { PublicRoute } from './PublicRoute';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import OfferContractPage from './pages/OfferContractPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import CabinetPage from './pages/CabinetPage';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = false;
  // useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUserThunk());
  // }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route
          path="/"
          element={<PrivateRoute redirectTo="login" component={<Outlet />} />}
        >
          <Route path="announcement" element={<AnnouncementsPage />} />
          <Route path="lawyers" element={<LawyersPage />} />
          <Route path="cabinet" element={<CabinetPage />} />
        </Route>
        <Route path="oferta" element={<OfferContractPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route
          path="login"
          element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/" component={<RegistrationPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
export default App;
