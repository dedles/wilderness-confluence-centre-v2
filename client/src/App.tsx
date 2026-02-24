import { Switch, Route, useLocation } from "wouter";
import { Suspense, lazy, useEffect, useRef } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";

function ScrollToTopOnNavigate() {
  const [location] = useLocation();
  const isInitialRender = useRef(true);
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const StyleGuidePage = lazy(() => import("./pages/StyleGuidePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function Router() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-ent-bg-light dark:bg-ent-bg-dark">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-ent-primary border-t-transparent" />
        </div>
      }
    >
      <ScrollToTopOnNavigate />
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/style-guide" component={StyleGuidePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
        <ScrollToTop />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
