import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AboutPunePage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">About Pune</h2>
        <p className="mb-4">Pune is a vibrant city known for its educational institutions, cultural heritage, and pleasant climate. It is often referred to as the "Oxford of the East."</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Rich history and cultural diversity</li>
          <li>Hub for education and IT industries</li>
        </ul>
        <p>Discover the city that is home to SPPU.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default AboutPunePage;
