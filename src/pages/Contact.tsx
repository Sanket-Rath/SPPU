import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <p className="mb-4">
          Access the official Savitribai Phule Pune University contact directory for the latest office numbers and departments.
        </p>
        

        <ul className="list-disc pl-6 mb-4">
                  <li>Address: Ganeshkhind, Pune, Maharashtra 411007, India</li>
                  <li>Phone: +91-20-25696061</li>
                  <li>Email: info@unipune.ac.in</li>
            </ul>
        <p>We look forward to assisting you!</p>

        <a
          href="/Contact%20info%20sppu%20project.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >

        
          Open Contact Info PDF
        </a>

      </main>
    </div>
    <Footer />
  </div>
);

export default ContactPage;
