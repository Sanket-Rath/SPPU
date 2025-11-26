import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const SenatePage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Senate</h2>
        <p className="mb-4">The Senate is the supreme authority of SPPU, responsible for making decisions on all academic matters. It consists of representatives from various faculties, students, and external experts.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Decides on academic policies and regulations</li>
          <li>Represents the university community</li>
        </ul>
        <p>Find out more about the Senate's structure and functions.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default SenatePage;
