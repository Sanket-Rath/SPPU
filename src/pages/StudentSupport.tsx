import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const StudentSupportPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Student Support Facilities</h2>
        <p className="mb-4">SPPU provides a range of support facilities for students, including counseling, career guidance, and health services. Our goal is to ensure the well-being and success of every student.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Counseling and mental health support</li>
          <li>Career guidance and placement cell</li>
          <li>Scholarships and financial aid</li>
        </ul>
        <p>Access resources and support for your academic journey.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default StudentSupportPage;
