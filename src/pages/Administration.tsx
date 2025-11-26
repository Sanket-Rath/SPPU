import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AdministrationPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Administration</h2>
        <p className="mb-4">The administration of SPPU is committed to transparent governance, efficient management, and student-centric policies. The university is led by the Vice-Chancellor, Registrar, Deans, and various statutory bodies.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Management Council, Academic Council, Senate</li>
          <li>Deans of Faculties and Heads of Departments</li>
          <li>Student Welfare and Grievance Redressal</li>
          <li>Online services for students and staff</li>
        </ul>
        <p>Meet our leadership and learn about our administrative structure.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default AdministrationPage;
