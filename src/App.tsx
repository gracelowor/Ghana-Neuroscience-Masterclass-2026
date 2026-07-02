import { useEffect, type FC } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Prep } from "./pages/Prep";
import { GitGuide } from "./pages/GitGuide";
import { People } from "./pages/People";
import { NotFound } from "./pages/NotFound";

// Helper component to scroll window to top on route change
const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prep" element={<Prep />} />
          <Route path="/git" element={<GitGuide />} />
          <Route path="/people" element={<People />} />
          <Route path="/404" element={<NotFound />} />
          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
