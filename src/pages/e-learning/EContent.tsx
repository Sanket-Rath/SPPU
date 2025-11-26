import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const EContentPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">E-Content Learning Module</h1>
        <p className="mb-4">Subject-wise digital course modules prepared by SPPU faculty, including video/audio lessons and downloadable learning materials.</p>
        <ul className="list-disc pl-6">
          <li>Subject-wise digital course modules</li>
          <li>SPPU faculty-created video/audio lessons</li>
          <li>Downloadable learning materials</li>
        </ul>
      </main>
    </div>
    <Footer />
  </div>
);

export default EContentPage;
