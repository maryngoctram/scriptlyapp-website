import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "./pages/Index";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Feedback from "./pages/Feedback";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { trackPageview } from "@/utils/analytics";
import { PAGES } from "@/seo";

const queryClient = new QueryClient();

const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Prerendered pages already have the right title; this keeps it in sync on in-app navigation
    document.title = PAGES[location.pathname]?.title ?? "Page Not Found | Scriptly";
    trackPageview(location.pathname);
  }, [location]);
  
  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouteTracker />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/community" element={<Community />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
