import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const MissionPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <p className="mb-4">The mission of Savitribai Phule Pune University is to be a global, socially conscious center of excellence in teaching, research, and extension. The university is committed to creating an inclusive and innovative environment for students and faculty.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Promote academic excellence and research</li>
          <li>Foster social responsibility and inclusivity</li>
          <li>Encourage innovation and entrepreneurship</li>
        </ul>
        <p>SPPU strives to empower students to become leaders and change-makers in society.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default MissionPage;
