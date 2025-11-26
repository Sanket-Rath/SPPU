import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AcademicsPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Academics</h2>
        <p className="mb-4">SPPU offers a diverse range of academic programs across Science, Arts, Commerce, Engineering, Management, Law, and more. The university is known for its rigorous curriculum, experienced faculty, and focus on research and innovation.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Undergraduate, Postgraduate, and Doctoral programs</li>
          <li>Choice Based Credit System (CBCS)</li>
          <li>Industry collaborations and internships</li>
          <li>Modern laboratories and research facilities</li>
        </ul>
        <p>Explore our departments and programs to find the right academic path for you.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default AcademicsPage;
