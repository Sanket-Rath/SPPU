import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const PortalPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">E-Learning Portal</h1>
        <p className="mb-4">SPPU e-learning portal providing centralized access to online study resources, LMS login and user guides for students and faculty.</p>
        <ul className="list-disc pl-6">
          <li>SPPU e-learning portal</li>
          <li>Online study resources</li>
          <li>LMS login & user guide</li>
        </ul>
        <p className="mt-4">For portal access and credentials, contact the E-Learning support team at <a href="mailto:elearning@unipune.ac.in" className="text-blue-600 hover:underline">elearning@unipune.ac.in</a>.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default PortalPage;
