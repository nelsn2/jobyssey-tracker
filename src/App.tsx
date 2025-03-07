
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Jobs from "./pages/Jobs";
import SavedJobs from "./pages/SavedJobs";
import Settings from "./pages/Settings";
import Network from "./pages/Network";
import LearningHub from "./pages/LearningHub";
import NotFound from "./pages/NotFound";
import CareerAdvisor from "./pages/CareerAdvisor";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="analytics" element={<Analytics />} />
            </Route>
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/saved" element={<SavedJobs />} />
            <Route path="/network" element={<Network />} />
            <Route path="/learning" element={<LearningHub />}>
              <Route path="career-advisor" element={<CareerAdvisor />} />
            </Route>
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
