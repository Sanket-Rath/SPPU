import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ResearchPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Research</h2>
        <p className="mb-4">SPPU is a leader in research and innovation, with numerous research centers, funded projects, and international collaborations. The university encourages interdisciplinary research and provides support for faculty and student research initiatives.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Research centers in Science, Technology, Social Sciences, and Humanities</li>
          <li>Funded projects from national and international agencies</li>
          <li>Publication of journals and research papers</li>
          <li>Annual conferences, seminars, and workshops</li>
        </ul>
        <p>Discover our research achievements and opportunities for collaboration.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default ResearchPage;
