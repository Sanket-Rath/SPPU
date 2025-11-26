import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Index from "./pages/Index";
import ResultsPage from "./pages/ResultsPage";
import EBooksPage from "./pages/EBooksPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import AcademicsPage from "./pages/Academics";
import ResearchPage from "./pages/Research";
import AdministrationPage from "./pages/Administration";
import StudentsPage from "./pages/Students";
import ELearningPage from "./pages/ELearning";
import HistoryPage from "./pages/History";
import MissionPage from "./pages/Mission";
import VCDeskPage from "./pages/VCDesk";
import SnapshotPage from "./pages/Snapshot";
import EmblemPage from "./pages/Emblem";
import ChairsPage from "./pages/Chairs";
import ManagementCouncilPage from "./pages/ManagementCouncil";
import AcademicCouncilPage from "./pages/AcademicCouncil";
import SenatePage from "./pages/Senate";
import DeansPage from "./pages/Deans";
import AboutCampusPage from "./pages/AboutCampus";
import CampusMapPage from "./pages/CampusMap";
import UtilityBuildingsPage from "./pages/UtilityBuildings";
import StudentSupportPage from "./pages/StudentSupport";
import AboutPunePage from "./pages/AboutPune";
import HowToReachPage from "./pages/HowToReach";
import UOPMapPage from "./pages/UOPMap";
import ContactPage from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/administration" element={<AdministrationPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/elearning" element={<ELearningPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/ebooks" element={<EBooksPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/vc-desk" element={<VCDeskPage />} />
          <Route path="/snapshot" element={<SnapshotPage />} />
          <Route path="/emblem" element={<EmblemPage />} />
          <Route path="/chairs" element={<ChairsPage />} />
          <Route path="/management-council" element={<ManagementCouncilPage />} />
          <Route path="/academic-council" element={<AcademicCouncilPage />} />
          <Route path="/senate" element={<SenatePage />} />
          <Route path="/deans" element={<DeansPage />} />
          <Route path="/about-campus" element={<AboutCampusPage />} />
          <Route path="/campus-map" element={<CampusMapPage />} />
          <Route path="/utility-buildings" element={<UtilityBuildingsPage />} />
          <Route path="/student-support" element={<StudentSupportPage />} />
          <Route path="/about-pune" element={<AboutPunePage />} />
          <Route path="/how-to-reach" element={<HowToReachPage />} />
          <Route path="/uop-map" element={<UOPMapPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
