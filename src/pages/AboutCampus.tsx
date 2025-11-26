import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AboutCampusPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">About Campus</h2>
        <p className="mb-4">The SPPU campus is spread over 411 acres and is known for its lush greenery, historic buildings, and modern infrastructure. It provides a vibrant environment for learning and research.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>State-of-the-art classrooms and labs</li>
          <li>Hostels, sports facilities, and cafeterias</li>
        </ul>
        <p>Explore our beautiful campus and its facilities.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default AboutCampusPage;
