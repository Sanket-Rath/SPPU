import ImprovedHeader from "@/components/ImprovedHeader";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const AcademicCalenderPage = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <ImprovedHeader />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-4">Academic Calendar</h2>
        <div className="w-full rounded-lg overflow-hidden shadow-lg border border-border">
          <img
            src="public/sppu-ac.webp"
            alt="SPPU Academic Calendar"
            className="w-full h-auto object-cover"
            onError={(event) => {
              if (event.currentTarget.src.includes("SPPU-Academic-Calender.webp")) {
                event.currentTarget.src = "/sppu-ac.webp";
              }
            }}
          />
        </div>
      </main>
    </div>
    <Footer />
  </div>
);

export default AcademicCalenderPage;

