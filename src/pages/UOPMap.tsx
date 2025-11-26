import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const UOPMapPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">UoP Google Map</h2>
        <p className="mb-4">View the location of Savitribai Phule Pune University on Google Maps. Plan your visit and explore the campus virtually.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Interactive map for navigation</li>
          <li>Landmarks and important buildings</li>
        </ul>
        <p>Access the map online for easy navigation.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default UOPMapPage;
