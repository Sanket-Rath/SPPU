import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const SnapshotPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">A Snapshot</h2>
        <p className="mb-4">Savitribai Phule Pune University at a glance:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Over 700 affiliated colleges</li>
          <li>More than 300,000 students</li>
          <li>International collaborations and research centers</li>
          <li>Modern campus with state-of-the-art facilities</li>
        </ul>
        <p>SPPU is a vibrant academic community committed to excellence and innovation.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default SnapshotPage;
