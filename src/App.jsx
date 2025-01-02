import React from 'react';
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import LoginAdmin from "./components/auth/LoginAdmin";
import Footer from "./components/footer";
import Header from "./components/header";
import withBanner from './hoc/withBanner';
import About from "./pages/about";
import AdminDashboards from "./pages/admin/dashboard";
import ContactUs from './pages/contact';
import Home from "./pages/home";
import Media from './pages/media';
// import Products from './pages/products';
import ProtectedRoute from "./state-management/admin/login/ProtectedRoute";

// Images 
import ScrollToTop from './components/shared/ScrollToTop';
import { commanBanner, mobileBanner } from './Images';

import Services from './pages/service';
import Projects from './pages/projects';
import ServiceDetails from './pages/service/service-details';
import ChatGPt from './pages/gpt';



function App() {
  const isAuthenticated = useSelector((state) => state.adminLogin.isAuthenticated);

  const About__ = withBanner(About, `${commanBanner}`, `${mobileBanner}`, 'About Us');
  const Services__ = withBanner(Services, `${commanBanner}`, `${mobileBanner}`, 'Services');
  const ServiceDetails__ = withBanner(ServiceDetails, `${mobileBanner}`, `${mobileBanner}`, 'Service Details');
  const Projects__ = withBanner(Projects, `${commanBanner}`, `${mobileBanner}`, 'Projects');
  const Media__ = withBanner(Media, `${commanBanner}`, `${mobileBanner}`, 'Media');
  const ContactUs__ = withBanner(ContactUs, `${commanBanner}`, `${mobileBanner}`, 'Contact Us');

const domainLink = "/apps/arabinfra/"
  
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/admin/login" element={<LoginAdmin />} />

        
        {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/admin/dashboard" element={<AdminDashboards />} />
        </Route> */}


        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboards />} />
        </Route>
        {/* <Route path={`/`} element={<Home />} /> */}
        <Route path="/about" element={<About__ />} />
        <Route path="/services" element={<Services__ />} />
        {/* <Route path="/services/details" element={<ServiceDetails__ />} />
        <Route path="/projects" element={<Projects__ />} />
        <Route path="/media" element={<Media__ />} /> */}
        <Route path="/contact" element={<ContactUs__ />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

