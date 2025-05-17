
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EnergyResearch from "./pages/EnergyResearch";
import OceanCleanup from "./pages/OceanCleanup";
import ClimateModels from "./pages/ClimateModels";
import Communities from "./pages/Communities";
import Validation from "./pages/Validation";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/energy-research" element={<EnergyResearch />} />
          <Route path="/ocean-cleanup" element={<OceanCleanup />} />
          <Route path="/climate-models" element={<ClimateModels />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/reports" element={<Reports />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
