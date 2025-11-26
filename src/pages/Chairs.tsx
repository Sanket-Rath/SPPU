import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ChairsPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Chairs</h2>
        <p className="mb-4">Savitribai Phule Pune University has established several academic chairs to promote research and scholarship in various fields. These chairs are supported by endowments and collaborations with industry and government.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Chairs in Science, Technology, Social Sciences, and Humanities</li>
          <li>Promoting interdisciplinary research</li>
        </ul>
        <p>Discover the impact of our academic chairs on research and innovation.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default ChairsPage;
