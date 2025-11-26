import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ELearningPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">E-Learning</h2>
        <p className="mb-4">SPPU's E-Learning platform provides access to online courses, digital resources, and virtual classrooms. The university is committed to leveraging technology for accessible and flexible learning.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Online courses and MOOCs</li>
          <li>Digital library and e-books</li>
          <li>Recorded lectures and webinars</li>
          <li>Learning management system (LMS)</li>
        </ul>
        <p>Start your digital learning journey with SPPU's E-Learning resources.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default ELearningPage;
