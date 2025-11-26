import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const NptelPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">NPTEL - SPPU</h1>
        <p className="mb-4">SPPU–NPTEL local chapter details, with guidance for enrollment in NPTEL MOOCs and certificate information.</p>
        <ul className="list-disc pl-6">
          <li>SPPU–NPTEL local chapter details</li>
          <li>Enrollment instructions for NPTEL MOOCs</li>
          <li>Certificate information</li>
        </ul>
      </main>
    </div>
    <Footer />
  </div>
);

export default NptelPage;
