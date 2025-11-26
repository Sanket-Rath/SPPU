import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AboutPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">About Savitribai Phule Pune University</h2>
        <p className="mb-4">Savitribai Phule Pune University (SPPU) is one of India's premier universities, recognized by the UGC under Section 2(f) and 12(B) of the UGC Act, 1956. The university is renowned for its academic excellence, research, and vibrant campus life. SPPU has received an NAAC A++ grade with a CGPA of 3.60 (highest in Maharashtra).</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Established in 1949</li>
          <li>Over 700 affiliated colleges</li>
          <li>Wide range of undergraduate, postgraduate, and doctoral programs</li>
          <li>International collaborations and research centers</li>
        </ul>
        <p>SPPU is committed to fostering innovation, inclusivity, and global standards in higher education.</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
