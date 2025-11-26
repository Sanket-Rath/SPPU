import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const EmblemPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">The University Emblem</h2>
        <p className="mb-4">The emblem of Savitribai Phule Pune University symbolizes knowledge, progress, and the university's commitment to excellence. It is a source of pride for students, faculty, and alumni.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Represents the university's values and heritage</li>
          <li>Inspires the academic community</li>
        </ul>
        <p>Learn more about the meaning and history of our emblem.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default EmblemPage;
