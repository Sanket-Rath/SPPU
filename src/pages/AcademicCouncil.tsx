import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AcademicCouncilPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Academic Council</h2>
        <p className="mb-4">The Academic Council is the highest academic body of SPPU, responsible for maintaining standards of education, teaching, and research. It approves curricula, syllabi, and academic policies.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Approves academic programs and courses</li>
          <li>Ensures quality in teaching and research</li>
        </ul>
        <p>Learn more about the council's role in academic excellence.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default AcademicCouncilPage;
