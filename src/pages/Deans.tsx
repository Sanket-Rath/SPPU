import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const DeansPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Deans of Faculties</h2>
        <p className="mb-4">The Deans of Faculties at SPPU provide academic leadership and oversee the functioning of various departments. They play a crucial role in curriculum development, research, and student affairs.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Lead academic planning and development</li>
          <li>Support faculty and student initiatives</li>
        </ul>
        <p>Meet our deans and learn about their contributions to the university.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default DeansPage;
