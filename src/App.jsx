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
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  // const dispatch = useDispatch();

  // ..
  const isRefreshing = false;
  // useSelector(selectIsRefreshing);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: true, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    // dispatch(refreshUserThunk());
  });

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
