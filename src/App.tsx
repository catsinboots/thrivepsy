
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CareerPathways from "./pages/CareerPathways";
import CollegeDatabase from "./pages/CollegeDatabase";
import EntranceExams from "./pages/EntranceExams";
import SyllabusArchive from "./pages/SyllabusArchive";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import Support from "./pages/Support";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/career-pathways" element={<CareerPathways />} />
            <Route path="/colleges" element={<CollegeDatabase />} />
            <Route path="/entrance-exams" element={<EntranceExams />} />
            <Route path="/syllabus" element={<SyllabusArchive />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
