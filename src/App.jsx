import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
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

function App() {
  const dispatch = useDispatch();
  const isRefreshing = false;
  // useSelector(selectIsRefreshing);

  // return (
  //   <Layout>
  //     <HomePage />
  //   </Layout>
  // );
  // useEffect(() => {
  //   dispatch(refreshUserThunk());
  // }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute redirectTo="/login" component={<Layout />} />}
      >
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/announcement" element={<AnnouncementsPage />} />
        <Route path="/lawyers" element={<LawyersPage />} />
      </Route>
      <Route
        path="/login"
        element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
      />
      <Route
        path="/register"
        element={
          <PublicRoute redirectTo="/" component={<RegistrationPage />} />
        }
      />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
}
export default App;
