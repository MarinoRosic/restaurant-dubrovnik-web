// import ReactDOM from "react-dom/client";
import { Routes, Route, useLocation } from "react-router-dom";
import React from 'react';
import { AnimatePresence } from "framer-motion";
// import components
import Header from './components/Header'
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import BookATableHelper from "./components/BookATableHelper";
// import pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import FindUs from "./pages/FindUs";
import FooterImage from "./components/FooterImage";
import Team from "./pages/Team";
import Menu from './pages/Menu'
import WineList from "./pages/WineList";
import Catering from "./pages/Catering";
import DivSpacer from "./components/DivSpacer";
import BookATable from "./pages/BookATable";
import Gallery from "./pages/Gallery";
import ConfirmReservation from "./pages/ConfirmReservation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className='h-full overflow-hidden'>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="*" element={<PageNotFound />} />
                <Route index element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/findus" element={<FindUs />} />
                <Route path="/bookatable" element={<BookATable />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/winelist" element={<WineList />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/confirmreservation" element={<ConfirmReservation />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
          </AnimatePresence>
        <DivSpacer />
        <FooterImage />
        <Footer />
        <ScrollToTop />
        <BookATableHelper />
      </div>
    </>
  );
};

export default App;
