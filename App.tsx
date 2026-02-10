import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';
import BrandStrategy from './pages/BrandStrategy';
import WebsiteCopy from './pages/WebsiteCopy';
import EditorialCampaigns from './pages/EditorialCampaigns';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="brand-strategy" element={<BrandStrategy />} />
          <Route path="website-copy" element={<WebsiteCopy />} />
          <Route path="editorial-campaigns" element={<EditorialCampaigns />} />
          <Route path="work/:slug" element={<CaseStudy />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;