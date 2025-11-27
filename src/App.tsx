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
import DepartmentsPage from "./pages/academics/Departments";
import ResearchPage from "./pages/Research";
import ResearchOnline from "./pages/research/Online";
import GuidelinesResearch from "./pages/research/Guidelines";
import PhdTracking from "./pages/research/PhdTracking";
import Avishkar from "./pages/research/Avishkar";
import Seminars from "./pages/research/Seminars";
import Aspire from "./pages/research/Aspire";
import AdministrationPage from "./pages/Administration";
import StudentsPage from "./pages/Students";
import ELearningPage from "./pages/ELearning";
import LawSectionPage from "./pages/administration/Law";
import ExaminationPage from "./pages/administration/Examination";
import BuildingWorksPage from "./pages/administration/BuildingWorks";
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
import HostelPage from "./pages/students/Hostel";
import AlumniPage from "./pages/students/Alumni";
import StudentHelplinePage from "./pages/students/StudentHelpline";
import AboutCampusPage from "./pages/AboutCampus";
import CampusMapPage from "./pages/CampusMap";
import UtilityBuildingsPage from "./pages/UtilityBuildings";
import StudentSupportPage from "./pages/StudentSupport";
import AboutPunePage from "./pages/AboutPune";
import HowToReachPage from "./pages/HowToReach";
import UOPMapPage from "./pages/UOPMap";
import ContactPage from "./pages/Contact";
import AdmissionsPage from "./pages/Admissions";
import AcademicCalenderPage from "./pages/AcademicCalender";
import EBooksLearnPage from "./pages/e-learning/EBooks";
import GIANLearnPage from "./pages/e-learning/GIAN";
import NPTELLearnPage from "./pages/e-learning/NPTEL";
import EContentLearnPage from "./pages/e-learning/EContent";
import AudioVideoLearnPage from "./pages/e-learning/AudioVideo";
import PortalLearnPage from "./pages/e-learning/Portal";

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
          <Route path="/academics/departments" element={<DepartmentsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/online" element={<ResearchOnline />} />
          <Route path="/research/guidelines" element={<GuidelinesResearch />} />
          <Route path="/research/phd-tracking" element={<PhdTracking />} />
          <Route path="/research/avishkar" element={<Avishkar />} />
          <Route path="/research/seminars" element={<Seminars />} />
          <Route path="/research/aspire" element={<Aspire />} />
          <Route path="/administration" element={<AdministrationPage />} />
          <Route path="/administration/law" element={<LawSectionPage />} />
          <Route path="/administration/examination" element={<ExaminationPage />} />
          <Route path="/administration/building-works" element={<BuildingWorksPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/students/hostel" element={<HostelPage />} />
          <Route path="/students/alumni" element={<AlumniPage />} />
          <Route path="/students/student-helpline" element={<StudentHelplinePage />} />
          <Route path="/elearning" element={<ELearningPage />} />
          <Route path="/e-learning/ebooks" element={<EBooksLearnPage />} />
          <Route path="/e-learning/gian" element={<GIANLearnPage />} />
          <Route path="/e-learning/nptel" element={<NPTELLearnPage />} />
          <Route path="/e-learning/econtent" element={<EContentLearnPage />} />
          <Route path="/e-learning/audio-video" element={<AudioVideoLearnPage />} />
          <Route path="/e-learning/portal" element={<PortalLearnPage />} />
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
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/academic-calendar" element={<AcademicCalenderPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
