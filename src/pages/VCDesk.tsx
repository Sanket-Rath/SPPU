import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const VCDeskPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">From VC's Desk</h2>
        <p className="mb-4">Welcome to Savitribai Phule Pune University! As Vice-Chancellor, I am proud to lead an institution that values academic excellence, research, and social responsibility. Our university is dedicated to nurturing talent and fostering innovation for a better tomorrow.</p>
        <p>We invite students, faculty, and partners to join us in our journey of growth and discovery.</p>
        <p className="mt-4 font-semibold">- Vice-Chancellor, SPPU</p>
      </main>
    </div>
    <Footer />
  </div>
);

export default VCDeskPage;
