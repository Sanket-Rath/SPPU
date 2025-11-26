import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const HowToReachPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">How to Reach University?</h2>
        <p className="mb-4">SPPU is well-connected by road, rail, and air. The campus is easily accessible from all parts of Pune city and beyond.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Nearest railway station: Pune Junction</li>
          <li>Nearest airport: Pune International Airport</li>
        </ul>
        <p>Find directions and travel tips for reaching the university.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default HowToReachPage;
