import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const GIANPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">GIAN - SPPU</h1>
        <p className="mb-4">Information about Global Initiative of Academic Networks (GIAN) at SPPU, including courses offered, enrollment process and announcements.</p>
        <ul className="list-disc pl-6">
          <li>Information about GIAN</li>
          <li>Courses offered under GIAN</li>
          <li>Enrollment process & announcements</li>
        </ul>
      </main>
    </div>
    <Footer />
  </div>
);

export default GIANPage;
