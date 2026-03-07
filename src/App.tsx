import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUtilizacao from "./pages/TermosUtilizacao";
import BlogPage from "./pages/BlogPage";
import BlogArticle from "./pages/BlogArticle";
import Candidatura from "./pages/Candidatura";
import ProgramaFundacao from "./pages/ProgramaFundacao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/candidatura" element={<Candidatura />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-utilizacao" element={<TermosUtilizacao />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
