import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const UtilityBuildingsPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Utility Buildings</h2>
        <p className="mb-4">SPPU's campus includes a variety of utility buildings such as libraries, auditoriums, health centers, and administrative offices. These facilities support the academic and extracurricular needs of students and staff.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Central Library and departmental libraries</li>
          <li>Health center, bank, and post office</li>
        </ul>
        <p>Learn more about the facilities available on campus.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default UtilityBuildingsPage;
