import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const CampusMapPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Campus Map</h2>
        <p className="mb-4">Find your way around SPPU with our detailed campus map. Locate academic buildings, hostels, sports complexes, and more.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Interactive campus map available online</li>
          <li>Guides for new students and visitors</li>
        </ul>
        <p>Plan your visit and explore the campus with ease.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default CampusMapPage;
