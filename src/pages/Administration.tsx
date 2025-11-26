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

        <section className="mb-8">
          <div className="max-w-xs space-y-4">
            <a href="/administration/law" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Law Section</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
            <a href="/administration/examination" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Examination Section</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
            <a href="/administration/building-works" className="flex items-center justify-between px-4 py-3 rounded-md bg-gradient-to-b from-teal-800 to-teal-500 text-white shadow-md hover:scale-[1.01] transition-transform">
              <span className="font-semibold">Building & Works Committee</span>
              <span className="text-yellow-300 text-2xl">»</span>
            </a>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
);

export default AdministrationPage;
