import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ManagementCouncilPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Management Council</h2>
        <p className="mb-4">The Management Council is the principal executive authority of SPPU, responsible for policy decisions, administration, and financial management. It ensures the smooth functioning of the university.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Formulates policies and regulations</li>
          <li>Oversees university administration</li>
        </ul>
        <p>Meet the members and learn about the council's initiatives.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default ManagementCouncilPage;
